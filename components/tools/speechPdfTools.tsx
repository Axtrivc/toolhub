"use client";

import { useEffect, useRef, useState } from "react";
import { useApp } from "@/components/providers/AppProviders";
import { tui } from "@/lib/i18n/tool-l10n-accessors/tools/speechPdfTools";
import { PDFDocument } from "pdf-lib";
import { zipSync } from "fflate";

// 主题感知的控件配色(与全站 var 体系一致,参照 QRCodeGeneratorClient)
const inputStyle = {
  borderColor: "rgb(var(--border-strong))",
  backgroundColor: "rgb(var(--bg-card))",
  color: "rgb(var(--text))",
};

// {n}/{name}/{list} 等模板变量替换
function fmt(tpl: string, vars: Record<string, string | number>): string {
  return tpl.replace(/\{(\w+)\}/g, (m, k) => {
    const key = String(k);
    return key in vars ? String(vars[key]) : m;
  });
}

function formatBytes(n: number): string {
  if (n < 1024) return n + " B";
  if (n < 1024 * 1024) return (n / 1024).toFixed(1) + " KB";
  return (n / (1024 * 1024)).toFixed(2) + " MB";
}

function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = name;
  link.href = url;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// TS 5.9 的 BlobPart 需要 ArrayBuffer 背景的 Uint8Array;拷贝一次以收敛类型
function toBlobPart(bytes: Uint8Array): BlobPart {
  const copy = new Uint8Array(bytes.length);
  copy.set(bytes);
  return copy;
}

function isPdfFile(file: File): boolean {
  return file.type === "application/pdf" || /\.pdf$/i.test(file.name);
}

// 加载 PDF:加密文件抛 EncryptedPDFError,损坏文件抛其他异常
// 注意:pdf-lib 的 EncryptedPDFError 继承 Error,但其 ES5 编译产物中 super() 返回新对象,
// 实例原型链指向 Error.prototype,err.name 与 instanceof 均不可靠;只能据其固定消息判别。
async function loadPdf(buf: ArrayBuffer): Promise<PDFDocument> {
  return PDFDocument.load(buf);
}

function isEncryptedPdfError(err: unknown): boolean {
  return err instanceof Error && /is encrypted/.test(err.message);
}

// ─────────── Speech to Text ───────────

// Web Speech API 最小类型(DOM lib 不含该接口,按需声明)
type SRAlternative = { transcript: string };
type SRResult = { isFinal: boolean; length: number; [index: number]: SRAlternative };
type SRResultList = { length: number; [index: number]: SRResult };
type SREvent = { resultIndex: number; results: SRResultList };
type SRErrorEvent = { error: string };
type SRLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  start(): void;
  stop(): void;
  onresult: ((event: SREvent) => void) | null;
  onerror: ((event: SRErrorEvent) => void) | null;
  onend: (() => void) | null;
};
type SRCtor = new () => SRLike;

function getSpeechCtor(): SRCtor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { SpeechRecognition?: SRCtor; webkitSpeechRecognition?: SRCtor };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

const SPEECH_LANGS = ["en-US", "es-ES", "de-DE"] as const;

export function SpeechToTextClient() {
  const { locale } = useApp();
  const L = (key: string, fb: string) => tui("speech-to-text", locale, key, fb);

  const [supported, setSupported] = useState(true);
  const [listening, setListening] = useState(false);
  const [paused, setPaused] = useState(false);
  const [interim, setInterim] = useState("");
  const [transcript, setTranscript] = useState("");
  const [error, setError] = useState("");
  const [lang, setLang] = useState<string>("en-US");

  const recRef = useRef<SRLike | null>(null);
  const finalRef = useRef("");
  const manualStopRef = useRef(false);

  useEffect(() => {
    setSupported(getSpeechCtor() !== null);
  }, []);

  const ensureRec = (): SRLike | null => {
    if (recRef.current) return recRef.current;
    const Ctor = getSpeechCtor();
    if (!Ctor) return null;
    const rec = new Ctor();
    rec.continuous = true;
    rec.interimResults = true;
    rec.onresult = (event) => {
      let finals = "";
      let interimText = "";
      for (let i = 0; i < event.results.length; i++) {
        const res = event.results[i];
        if (!res) continue;
        const alt = res[0];
        if (!alt) continue;
        if (res.isFinal) finals += alt.transcript;
        else interimText += alt.transcript;
      }
      // finals 是本会话全部已确认文本;与上次快照对比,只把增量落进可编辑区
      const prev = finalRef.current;
      if (finals !== prev) {
        const added = finals.startsWith(prev) ? finals.slice(prev.length) : finals;
        finalRef.current = finals;
        const piece = added.trim();
        if (piece) setTranscript((t) => (t ? t + " " : "") + piece);
      }
      setInterim(interimText);
    };
    rec.onerror = (event) => {
      const code = event.error;
      if (code === "no-speech" || code === "aborted") return;
      if (code === "not-allowed" || code === "service-not-allowed") {
        setError(L("errPermission", "Microphone access denied. Allow the microphone in the browser address bar and try again."));
      } else if (code === "audio-capture") {
        setError(L("errNoMic", "No microphone found. Connect one and try again."));
      } else if (code === "network") {
        setError(L("errNetwork", "Could not reach the speech service. Check your connection and try again."));
      } else {
        setError(fmt(L("errGeneric", "Recognition error: {e}"), { e: code }));
      }
    };
    rec.onend = () => {
      setListening(false);
      setInterim("");
      // 服务自动断开时落到「已暂停」态,提示用户按继续;手动停止则回到空闲态
      setPaused(!manualStopRef.current);
      manualStopRef.current = false;
    };
    recRef.current = rec;
    return rec;
  };

  const startSession = () => {
    const rec = ensureRec();
    if (!rec) return;
    rec.lang = lang;
    finalRef.current = "";
    manualStopRef.current = false;
    setError("");
    try {
      rec.start();
      setListening(true);
      setPaused(false);
    } catch {
      // 上一会话尚未完全结束时 start 会抛 InvalidStateError,忽略即可
    }
  };

  const handleStart = () => {
    setTranscript("");
    setInterim("");
    startSession();
  };

  const handlePause = () => {
    recRef.current?.stop();
    setListening(false);
    setPaused(true);
  };

  const handleResume = () => {
    startSession();
  };

  const handleStop = () => {
    manualStopRef.current = true;
    recRef.current?.stop();
    recRef.current = null;
    setListening(false);
    setPaused(false);
    setInterim("");
  };

  const handleLangChange = (value: string) => {
    setLang(value);
    if (recRef.current) recRef.current.lang = value;
  };

  const words = transcript.trim() ? transcript.trim().split(/\s+/).length : 0;

  const copyTranscript = async () => {
    try {
      await navigator.clipboard.writeText(transcript);
    } catch {
      // 剪贴板不可用(非安全上下文等)时静默失败,用户仍可手动选中复制
    }
  };

  const downloadTxt = () => {
    if (!transcript) return;
    downloadBlob(new Blob([transcript], { type: "text/plain;charset=utf-8" }), "transcript.txt");
  };

  if (!supported) {
    return (
      <div className="space-y-6">
        <p className="rounded-lg border p-4 text-sm" style={inputStyle}>
          {L("unsupported", "Your browser does not offer speech recognition. Live dictation works in Chrome, Edge and Safari; it is not yet available in Firefox.")}
        </p>
      </div>
    );
  }

  const status = listening
    ? L("statusListening", "Listening — speak now")
    : paused
      ? L("statusPaused", "Paused — press Resume to continue")
      : L("statusIdle", "Ready");

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="stt-lang" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {L("languageLabel", "Recognition language")}
        </label>
        <select
          id="stt-lang"
          value={lang}
          onChange={(e) => handleLangChange(e.target.value)}
          className="w-full rounded-lg border p-2.5 shadow-sm outline-none"
          style={inputStyle}
        >
          {SPEECH_LANGS.map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className={"mr-2 inline-flex items-center gap-2 text-sm " + (listening ? "font-medium" : "")} style={{ color: "rgb(var(--text-muted))" }}>
          <span className={"inline-block h-2.5 w-2.5 rounded-full " + (listening ? "animate-pulse bg-red-500" : paused ? "bg-amber-500" : "bg-slate-400")}></span>
          {status}
        </span>
        {!listening && !paused && (
          <button type="button" className="btn btn-primary text-sm" onClick={handleStart}>{L("startButton", "Start dictating")}</button>
        )}
        {listening && (
          <button type="button" className="btn btn-secondary text-sm" onClick={handlePause}>{L("pauseButton", "Pause")}</button>
        )}
        {paused && (
          <button type="button" className="btn btn-primary text-sm" onClick={handleResume}>{L("resumeButton", "Resume")}</button>
        )}
        {(listening || paused) && (
          <button type="button" className="btn btn-secondary text-sm" onClick={handleStop}>{L("stopButton", "Stop")}</button>
        )}
      </div>

      {error && (
        <p className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">{error}</p>
      )}

      <div>
        <label htmlFor="stt-interim" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {L("interimLabel", "Listening…")}
        </label>
        <div id="stt-interim" aria-live="polite" className="min-h-[2.5rem] rounded-lg border p-3 text-sm italic" style={inputStyle}>
          {interim || "—"}
        </div>
      </div>

      <div>
        <label htmlFor="stt-transcript" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          {L("transcriptLabel", "Transcript (editable)")}
        </label>
        <textarea
          id="stt-transcript"
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
          rows={8}
          className="w-full rounded-lg border p-3 shadow-sm outline-none"
          style={inputStyle}
        />
        <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
            {fmt(L("charStats", "≈ {c} characters · {w} words"), { c: transcript.length, w: words })}
          </span>
          <span className="flex flex-wrap gap-2">
            <button type="button" className="btn btn-secondary text-sm" disabled={!transcript} onClick={() => void copyTranscript()}>⧉</button>
            <button type="button" className="btn btn-secondary text-sm" disabled={!transcript && !interim} onClick={() => { setTranscript(""); setInterim(""); setError(""); }}>{L("clearButton", "Clear")}</button>
            <button type="button" className="btn btn-primary text-sm" disabled={!transcript} onClick={downloadTxt}>{L("downloadTxt", "Download .txt")}</button>
          </span>
        </div>
      </div>

      <p className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
        {L("note", "🎙️ Recognition uses the browser Web Speech API: Chrome and similar browsers send the audio to the vendor speech service for transcription, so you need a connection. ToolHub never receives or stores audio, and the final text stays only in your browser: edit it, copy it or download it as .txt. Live dictation is not yet available in Firefox.")}
      </p>
    </div>
  );
}

// ─────────── PDF Merger ───────────

type MergeItem = {
  id: number;
  name: string;
  pages: number;
  buf: ArrayBuffer | null;
  error: "corrupt" | "notpdf" | null;
};

export function PdfMergerClient() {
  const { locale } = useApp();
  const L = (key: string, fb: string) => tui("pdf-merger", locale, key, fb);

  const [items, setItems] = useState<MergeItem[]>([]);
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [doneMsg, setDoneMsg] = useState("");
  const [result, setResult] = useState<Uint8Array | null>(null);
  const nextIdRef = useRef(1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addFiles = async (files: File[]) => {
    const additions: MergeItem[] = [];
    for (const file of files) {
      if (!isPdfFile(file)) {
        additions.push({ id: nextIdRef.current++, name: file.name, pages: 0, buf: null, error: "notpdf" });
        continue;
      }
      try {
        const buf = await file.arrayBuffer();
        const doc = await loadPdf(buf);
        additions.push({ id: nextIdRef.current++, name: file.name, pages: doc.getPageCount(), buf, error: null });
      } catch {
        // 损坏或加密的 PDF 一律标记 errCorrupt 并排除在合并之外
        additions.push({ id: nextIdRef.current++, name: file.name, pages: 0, buf: null, error: "corrupt" });
      }
    }
    setItems((prev) => [...prev, ...additions]);
    setResult(null);
    setDoneMsg("");
  };

  const valid = items.filter((item) => item.error === null && item.buf !== null);
  const canMerge = valid.length >= 2 && !processing;

  const move = (index: number, delta: number) => {
    setItems((prev) => {
      const next = [...prev];
      const target = index + delta;
      if (target < 0 || target >= next.length) return prev;
      const tmp = next[index];
      next[index] = next[target];
      next[target] = tmp;
      return next;
    });
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleMerge = async () => {
    if (!canMerge) return;
    setProcessing(true);
    setDoneMsg("");
    setResult(null);
    try {
      const out = await PDFDocument.create();
      for (const item of valid) {
        const src = await loadPdf(item.buf as ArrayBuffer);
        const copied = await out.copyPages(src, src.getPageIndices());
        for (const page of copied) out.addPage(page);
      }
      const bytes = await out.save();
      setResult(bytes);
      setDoneMsg(fmt(L("mergeDone", "Merge ready: {n} files → merged.pdf"), { n: valid.length }));
    } catch {
      setDoneMsg(fmt(L("errCorrupt", "Could not read {name}: damaged or password-protected PDF"), { name: "?" }));
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); void addFiles(Array.from(e.dataTransfer.files)); }}
        className={"flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 text-center" + (dragging ? " border-blue-400 bg-blue-50 dark:bg-blue-950/40" : "")}
        style={inputStyle}
      >
        <button type="button" className="btn btn-primary text-sm" onClick={() => inputRef.current?.click()}>
          {L("chooseFiles", "Choose PDF files")}
        </button>
        <p className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
          {items.length > 0 ? L("dropHintShort", "Drop more PDFs here") : L("dropHint", "or drag and drop your PDFs here")}
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,.pdf"
          multiple
          className="hidden"
          onChange={(e) => { void addFiles(Array.from(e.target.files ?? [])); e.target.value = ""; }}
        />
      </div>

      {items.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">{fmt(L("fileListLabel", "Files ({n})"), { n: items.length })}</p>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={item.id} className="flex flex-wrap items-center gap-2 rounded-lg border p-3 text-sm" style={inputStyle}>
                {item.error === null ? (
                  <>
                    <span className="min-w-0 flex-1 truncate" title={item.name}>{item.name}</span>
                    <span style={{ color: "rgb(var(--text-muted))" }}>
                      {item.pages === 1 ? L("pagesOne", "1 page") : fmt(L("pagesCount", "{n} pages"), { n: item.pages })}
                    </span>
                  </>
                ) : (
                  <span className="min-w-0 flex-1 truncate text-red-600 dark:text-red-400">
                    {item.error === "notpdf"
                      ? fmt(L("errNotPdf", "Only PDF files are supported: {name}"), { name: item.name })
                      : fmt(L("errCorrupt", "Could not read {name}: damaged or password-protected PDF"), { name: item.name })}
                  </span>
                )}
                <span className="flex gap-1">
                  <button type="button" className="btn btn-secondary px-2 py-1 text-xs" disabled={index === 0} onClick={() => move(index, -1)} title={L("moveUp", "Move up")}>↑</button>
                  <button type="button" className="btn btn-secondary px-2 py-1 text-xs" disabled={index === items.length - 1} onClick={() => move(index, 1)} title={L("moveDown", "Move down")}>↓</button>
                  <button type="button" className="btn btn-secondary px-2 py-1 text-xs" onClick={() => removeItem(item.id)} title={L("removeItem", "Remove")}>✕</button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {items.length > 0 && valid.length < 2 && (
        <p className="text-sm text-amber-700 dark:text-amber-400">{L("errNeedTwo", "Add at least two valid PDFs to merge")}</p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {result ? (
          <button type="button" className="btn btn-primary text-sm" onClick={() => downloadBlob(new Blob([toBlobPart(result)], { type: "application/pdf" }), "merged.pdf")}>⬇ merged.pdf</button>
        ) : (
          <button type="button" className="btn btn-primary text-sm" disabled={!canMerge} onClick={() => void handleMerge()}>{L("mergeButton", "Merge into merged.pdf")}</button>
        )}
        {processing && <span className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>{L("processing", "Merging…")}</span>}
        {doneMsg && !processing && <span className="text-sm font-medium">{doneMsg}</span>}
      </div>

      <p className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
        {L("note", "🔒 Your PDFs never leave the browser: merging is 100% local with pdf-lib, with no uploads and no storage. Reorder the list before merging and download merged.pdf with the pages copied exactly as they are, without recompression.")}
      </p>
    </div>
  );
}

// ─────────── PDF Splitter ───────────

type RangeError = "rangeErrSyntax" | "rangeErrOrder" | "rangeErrBounds" | "rangeErrEmpty";
type RangeResult = { ok: true; pages: number[] } | { ok: false; key: RangeError; vars: Record<string, string | number> };

function parseRange(text: string, max: number): RangeResult {
  const t = text.trim();
  if (!t) return { ok: false, key: "rangeErrEmpty", vars: {} };
  const pages: number[] = [];
  for (const part of t.split(",")) {
    const seg = part.trim();
    const m = /^(\d{1,5})(?:\s*-\s*(\d{1,5}))?$/.exec(seg);
    if (!m) return { ok: false, key: "rangeErrSyntax", vars: { s: seg } };
    const a = parseInt(m[1] ?? "", 10);
    const b = m[2] !== undefined ? parseInt(m[2], 10) : a;
    if (!Number.isFinite(a) || (m[2] !== undefined && !Number.isFinite(b))) {
      return { ok: false, key: "rangeErrSyntax", vars: { s: seg } };
    }
    if (b < a) return { ok: false, key: "rangeErrOrder", vars: { a, b } };
    if (a < 1 || b > max) return { ok: false, key: "rangeErrBounds", vars: { n: a < 1 ? a : b, t: max } };
    for (let p = a; p <= b; p++) {
      if (!pages.includes(p)) pages.push(p);
    }
  }
  pages.sort((x, y) => x - y);
  return { ok: true, pages };
}

const RANGE_FALLBACK: Record<RangeError, string> = {
  rangeErrSyntax: "Invalid syntax: {s}",
  rangeErrOrder: "Range {a}-{b} is reversed",
  rangeErrBounds: "Page {n} does not exist (the document has {t})",
  rangeErrEmpty: "Type at least one page range",
};

export function PdfSplitterClient() {
  const { locale } = useApp();
  const L = (key: string, fb: string) => tui("pdf-splitter", locale, key, fb);

  const [fileName, setFileName] = useState("");
  const [buf, setBuf] = useState<ArrayBuffer | null>(null);
  const [pages, setPages] = useState(0);
  const [loadError, setLoadError] = useState<"corrupt" | "encrypted" | "notpdf" | null>(null);
  const [range, setRange] = useState("");
  const [mode, setMode] = useState<"single" | "zip">("single");
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [doneMsg, setDoneMsg] = useState("");
  const [result, setResult] = useState<{ blob: Blob; name: string } | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const loadFile = async (file: File) => {
    setResult(null);
    setDoneMsg("");
    setRange("");
    setLoadError(null);
    setBuf(null);
    setPages(0);
    setFileName(file.name);
    if (!isPdfFile(file)) {
      setLoadError("notpdf");
      return;
    }
    try {
      const ab = await file.arrayBuffer();
      const doc = await loadPdf(ab);
      setBuf(ab);
      setPages(doc.getPageCount());
    } catch (err) {
      setLoadError(isEncryptedPdfError(err) ? "encrypted" : "corrupt");
    }
  };

  const parsed = pages > 0 ? parseRange(range, pages) : null;

  const handleSplit = async () => {
    if (!buf || !parsed || !parsed.ok || processing) return;
    setProcessing(true);
    setDoneMsg("");
    setResult(null);
    try {
      const src = await loadPdf(buf);
      const indices = parsed.pages.map((p) => p - 1);
      if (mode === "single") {
        const out = await PDFDocument.create();
        const copied = await out.copyPages(src, indices);
        for (const page of copied) out.addPage(page);
        const bytes = await out.save();
        setResult({ blob: new Blob([toBlobPart(bytes)], { type: "application/pdf" }), name: "split.pdf" });
        setDoneMsg(fmt(L("doneSingle", "Created split.pdf with {n} pages"), { n: parsed.pages.length }));
      } else {
        const files: Record<string, Uint8Array> = {};
        let i = 0;
        for (const pageIndex of indices) {
          i++;
          const single = await PDFDocument.create();
          const [page] = await single.copyPages(src, [pageIndex]);
          single.addPage(page);
          files["part-" + i + ".pdf"] = await single.save();
        }
        const zipped = zipSync(files);
        setResult({ blob: new Blob([toBlobPart(zipped)], { type: "application/zip" }), name: "pages.zip" });
        setDoneMsg(fmt(L("doneZip", "Created a ZIP with {n} one-page PDFs"), { n: parsed.pages.length }));
      }
    } catch {
      setDoneMsg(L("errCorrupt", "Could not read the PDF: it seems damaged"));
    } finally {
      setProcessing(false);
    }
  };

  const rangeFeedback = () => {
    if (!parsed) return null;
    if (parsed.ok) {
      if (parsed.pages.length === 0) {
        return <span className="text-sm text-amber-700 dark:text-amber-400">{L("errNoPages", "No valid pages selected")}</span>;
      }
      return (
        <span className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
          {fmt(L("previewPages", "{n} pages: {list}"), { n: parsed.pages.length, list: parsed.pages.join(", ") })}
        </span>
      );
    }
    return (
      <span className="text-sm text-red-600 dark:text-red-400">{fmt(L(parsed.key, RANGE_FALLBACK[parsed.key]), parsed.vars)}</span>
    );
  };

  return (
    <div className="space-y-6">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); void loadFile(e.dataTransfer.files[0]); }}
        className={"flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 text-center" + (dragging ? " border-blue-400 bg-blue-50 dark:bg-blue-950/40" : "")}
        style={inputStyle}
      >
        <button type="button" className="btn btn-primary text-sm" onClick={() => inputRef.current?.click()}>
          {L("chooseFile", "Choose a PDF")}
        </button>
        <p className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
          {fileName ? fileName : L("dropHint", "or drag and drop a PDF here")}
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) void loadFile(f); e.target.value = ""; }}
        />
      </div>

      {loadError && (
        <p className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
          {loadError === "notpdf"
            ? L("errNotPdf", "Only a PDF file is supported")
            : loadError === "encrypted"
              ? L("errEncrypted", "This PDF is password-protected: remove the protection first")
              : L("errCorrupt", "Could not read the PDF: it seems damaged")}
        </p>
      )}

      {buf !== null && pages > 0 && (
        <div className="space-y-4">
          <p className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
            {fmt(L("pageCount", "The document has {n} pages"), { n: pages })}
          </p>

          <div>
            <label htmlFor="pdf-split-range" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {L("rangeLabel", "Page ranges")}
            </label>
            <input
              id="pdf-split-range"
              type="text"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              placeholder={L("rangePlaceholder", "e.g. 1-3,5,8-10")}
              className="w-full rounded-lg border p-2.5 shadow-sm outline-none"
              style={inputStyle}
            />
          </div>

          <div>
            <p className="mb-1.5 text-sm font-medium text-slate-700 dark:text-slate-300">{L("previewLabel", "Selected pages")}</p>
            <div className="rounded-lg border p-3" style={inputStyle}>
              {rangeFeedback() ?? <span className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>{L("previewNone", "Type ranges to see the preview")}</span>}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {(["single", "zip"] as const).map((m) => (
              <button key={m} type="button" onClick={() => setMode(m)} className={"btn text-sm " + (mode === m ? "btn-primary" : "btn-secondary")}>
                {m === "single" ? L("modeSingle", "One PDF with the chosen pages (split.pdf)") : L("modeZip", "One file per page (ZIP)")}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {result ? (
              <button type="button" className="btn btn-primary text-sm" onClick={() => downloadBlob(result.blob, result.name)}>{"⬇ " + result.name}</button>
            ) : (
              <button
                type="button"
                className="btn btn-primary text-sm"
                disabled={!parsed || !parsed.ok || parsed.pages.length === 0 || processing}
                onClick={() => void handleSplit()}
              >
                {L("splitButton", "Split PDF")}
              </button>
            )}
            {processing && <span className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>{L("processing", "Splitting…")}</span>}
            {doneMsg && !processing && <span className="text-sm font-medium">{doneMsg}</span>}
          </div>
        </div>
      )}

      <p className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
        {L("note", "🔒 Splitting happens entirely in your browser with pdf-lib: the original file is never modified, nothing is uploaded and nothing is stored. Pick pages with the 1-3,5,8-10 syntax and download a single split.pdf or a ZIP of standalone pages.")}
      </p>
    </div>
  );
}

// ─────────── PDF Compressor ───────────

export function PdfCompressorClient() {
  const { locale } = useApp();
  const L = (key: string, fb: string) => tui("pdf-compressor", locale, key, fb);

  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState(0);
  const [buf, setBuf] = useState<ArrayBuffer | null>(null);
  const [loadError, setLoadError] = useState<"corrupt" | "encrypted" | "notpdf" | null>(null);
  const [dragging, setDragging] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [before, setBefore] = useState(0);
  const [after, setAfter] = useState(0);
  const [resultBlob, setResultBlob] = useState<Blob | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const loadFile = async (file: File) => {
    setResultBlob(null);
    setLoadError(null);
    setBuf(null);
    setBefore(0);
    setAfter(0);
    setFileName(file.name);
    setFileSize(file.size);
    if (!isPdfFile(file)) {
      setLoadError("notpdf");
      return;
    }
    try {
      const ab = await file.arrayBuffer();
      await loadPdf(ab);
      setBuf(ab);
    } catch (err) {
      setLoadError(isEncryptedPdfError(err) ? "encrypted" : "corrupt");
    }
  };

  const handleCompress = async () => {
    if (!buf || processing) return;
    setProcessing(true);
    setResultBlob(null);
    try {
      const src = await loadPdf(buf);
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, src.getPageIndices());
      for (const page of copied) out.addPage(page);
      const bytes = await out.save({ useObjectStreams: true });
      setBefore(fileSize);
      setAfter(bytes.length);
      setResultBlob(new Blob([toBlobPart(bytes)], { type: "application/pdf" }));
    } catch {
      setLoadError("corrupt");
    } finally {
      setProcessing(false);
    }
  };

  const pct = before > 0 ? Math.abs(Math.round(((after - before) / before) * 100)) : 0;

  return (
    <div className="space-y-6">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); void loadFile(e.dataTransfer.files[0]); }}
        className={"flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-8 text-center" + (dragging ? " border-blue-400 bg-blue-50 dark:bg-blue-950/40" : "")}
        style={inputStyle}
      >
        <button type="button" className="btn btn-primary text-sm" onClick={() => inputRef.current?.click()}>
          {L("chooseFile", "Choose a PDF")}
        </button>
        <p className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
          {fileName ? fileName + " · " + formatBytes(fileSize) : L("dropHint", "or drag and drop a PDF here")}
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) void loadFile(f); e.target.value = ""; }}
        />
      </div>

      {loadError && (
        <p className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300">
          {loadError === "notpdf"
            ? L("errNotPdf", "Only a PDF file is supported")
            : loadError === "encrypted"
              ? L("errEncrypted", "This PDF is password-protected: remove the protection first")
              : L("errCorrupt", "Could not read the PDF: it seems damaged")}
        </p>
      )}

      {buf !== null && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className="btn btn-primary text-sm" disabled={processing} onClick={() => void handleCompress()}>
              {L("compressButton", "Re-save and compress")}
            </button>
            {processing && <span className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>{L("processing", "Re-saving…")}</span>}
          </div>

          {resultBlob !== null && before > 0 && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border p-4 text-center" style={inputStyle}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: "rgb(var(--text-muted))" }}>{L("beforeLabel", "Before")}</p>
                  <p className="mt-1 text-lg font-semibold">{formatBytes(before)}</p>
                </div>
                <div className="rounded-lg border p-4 text-center" style={inputStyle}>
                  <p className="text-xs uppercase tracking-wide" style={{ color: "rgb(var(--text-muted))" }}>{L("afterLabel", "After")}</p>
                  <p className="mt-1 text-lg font-semibold">{formatBytes(after)}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium">
                  {pct + "% " + (after < before ? L("saved", "saved") : L("grew", "larger"))}
                </span>
                <button type="button" className="btn btn-primary text-sm" onClick={() => downloadBlob(resultBlob, "compressed.pdf")}>
                  {L("downloadCompressed", "Download compressed.pdf")}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <p className="text-sm" style={{ color: "rgb(var(--text-muted))" }}>
        {L("note", "🔒 Everything happens in your browser with pdf-lib: the PDF is re-saved with object streams and nothing is uploaded or stored. Honest expectations: most everyday PDFs shrink, but there is no guarantee — already optimized files barely change and scanned files with images can even grow. Images are never recompressed.")}
      </p>
    </div>
  );
}
