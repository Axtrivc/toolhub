import assert from 'node:assert/strict'
import fs from 'node:fs'
import ts from 'typescript'
import { createRequire } from 'node:module'
const module = { exports: {} }
new Function('require', 'module', 'exports', ts.transpileModule(fs.readFileSync('lib/json-repair.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText)(createRequire(import.meta.url), module, module.exports)
const { repairJson } = module.exports
const cases = [
 ['{"message":"undefined",}', {message:'undefined'}],
 ['{"message":",}",}', {message:',}'}],
 ['{message:"It is Ada\'s code",}', {message:"It is Ada's code"}],
 ['{"message":"{bare: undefined}",}', {message:'{bare: undefined}'}],
 ['{a:undefined,b:NaN,c:Infinity,d:-Infinity}', {a:null,b:null,c:null,d:null}],
 [String.raw`{message:'Ada\'s "code"',}`, {message:`Ada's "code"`}],
 ['```json\n{"a":1,}\n```', {a:1}],
 ['{"a":[1,2', {a:[1,2]}],
 ['{ "name": "Ada", tags: [\'math\',}', {name:'Ada',tags:['math']}],
 ['{"message":"“quoted” undefined,}"}', {message:'“quoted” undefined,}'}],
]
for (const [input, expected] of cases) {const r=repairJson(input); assert.equal(r.ok,true,`${input}: ${r.log}`); assert.deepEqual(JSON.parse(r.output),expected,input)}
assert.equal(repairJson('{"a": ???}').ok,false)
console.log(`JSON repair: ${cases.length + 1} regression cases passed`)
