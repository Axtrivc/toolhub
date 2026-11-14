/**
 * 极小 STORE-only ZIP 写入器(无第三方依赖)。
 *
 * 设计:
 * - compression method 0(store):条目原样存放,符合「不重压缩」语义,也足够小;
 * - CRC-32(IEEE 多项式 0xEDB88320)校验和;
 * - UTF-8 文件名:general purpose bit 11 + EFS,跨平台解压不乱码;
 * - local file header + central directory + EOCD,DataView little-endian;
 * - 不支持 ZIP64:单文件 ≥ 4 GiB 直接抛错(浏览器拆分场景不会出现)。
 *
 * 独立校验:scripts 之外可用任意标准解压器(Expand-Archive / unzip)读取,
 * 解包即验证 CRC 与目录结构,不依赖本模块自读。
 */

// CRC-32 查表(IEEE,多项式 0xEDB88320)
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c >>> 0;
  }
  return table;
})();

export function crc32(data: Uint8Array): number {
  let crc = 0xffffffff;
  for (let i = 0; i < data.length; i++) {
    crc = CRC_TABLE[(crc ^ data[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

export interface ZipEntry {
  name: string;
  data: Uint8Array;
}

// DOS 日期时间(本地时区,精度 2 秒)
function dosDateTime(d: Date): { time: number; date: number } {
  const time =
    ((d.getHours() & 0x1f) << 11) | ((d.getMinutes() & 0x3f) << 5) | ((d.getSeconds() >> 1) & 0x1f);
  const date =
    (((d.getFullYear() - 1980) & 0x7f) << 9) |
    (((d.getMonth() + 1) & 0x0f) << 5) |
    (d.getDate() & 0x1f);
  return { time, date };
}

/**
 * 把条目打成 ZIP(STORE)。返回完整字节流。
 * 空条目数组得到合法的空 ZIP(仅 EOCD)。
 */
export function buildZip(entries: ZipEntry[]): Uint8Array {
  const encoder = new TextEncoder();
  const now = dosDateTime(new Date());
  const locals: Uint8Array[] = [];
  const centrals: Uint8Array[] = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBytes = encoder.encode(entry.name);
    const size = entry.data.length;
    if (size >= 0xffffffff || offset >= 0xffffffff) {
      throw new Error("ZIP64 is not supported: entry too large");
    }
    const crc = crc32(entry.data);
    const flags = 0x0800; // bit 11: UTF-8(EFS)

    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true); // local file header signature
    local.setUint16(4, 20, true); // version needed
    local.setUint16(6, flags, true);
    local.setUint16(8, 0, true); // method: store
    local.setUint16(10, now.time, true);
    local.setUint16(12, now.date, true);
    local.setUint32(14, crc, true);
    local.setUint32(18, size, true); // compressed size = raw
    local.setUint32(22, size, true);
    local.setUint16(26, nameBytes.length, true);
    local.setUint16(28, 0, true); // extra length

    const localBytes = new Uint8Array(30 + nameBytes.length + size);
    localBytes.set(new Uint8Array(local.buffer), 0);
    localBytes.set(nameBytes, 30);
    localBytes.set(entry.data, 30 + nameBytes.length);

    const central = new DataView(new ArrayBuffer(46));
    central.setUint32(0, 0x02014b50, true); // central directory signature
    central.setUint16(4, 20, true); // version made by
    central.setUint16(6, 20, true); // version needed
    central.setUint16(8, flags, true);
    central.setUint16(10, 0, true); // method: store
    central.setUint16(12, now.time, true);
    central.setUint16(14, now.date, true);
    central.setUint32(16, crc, true);
    central.setUint32(20, size, true);
    central.setUint32(24, size, true);
    central.setUint16(28, nameBytes.length, true);
    central.setUint16(30, 0, true); // extra
    central.setUint16(32, 0, true); // comment
    central.setUint16(34, 0, true); // disk number
    central.setUint16(36, 0, true); // internal attrs
    central.setUint32(38, 0, true); // external attrs
    central.setUint32(42, offset, true); // local header offset

    const centralBytes = new Uint8Array(46 + nameBytes.length);
    centralBytes.set(new Uint8Array(central.buffer), 0);
    centralBytes.set(nameBytes, 46);

    locals.push(localBytes);
    centrals.push(centralBytes);
    offset += localBytes.length;
  }

  const centralSize = centrals.reduce((sum, c) => sum + c.length, 0);
  const eocd = new DataView(new ArrayBuffer(22));
  eocd.setUint32(0, 0x06054b50, true); // EOCD signature
  eocd.setUint16(4, 0, true); // disk
  eocd.setUint16(6, 0, true); // central dir disk
  eocd.setUint16(8, entries.length, true);
  eocd.setUint16(10, entries.length, true);
  eocd.setUint32(12, centralSize, true);
  eocd.setUint32(16, offset, true); // central dir offset
  eocd.setUint16(20, 0, true); // comment length

  const total = offset + centralSize + 22;
  const out = new Uint8Array(total);
  let pos = 0;
  for (const l of locals) { out.set(l, pos); pos += l.length; }
  for (const c of centrals) { out.set(c, pos); pos += c.length; }
  out.set(new Uint8Array(eocd.buffer), pos);
  return out;
}
