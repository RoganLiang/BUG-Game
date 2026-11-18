import {readFile,readdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {SCENARIO_DB,loadScenarioBatch} from '../data/scenarios.js';
const root=new URL('../',import.meta.url);
function assert(ok,message){if(!ok)throw new Error(message);}
for(const folder of ['js','data'])for(const file of await readdir(new URL(folder+'/',root))){if(!file.endsWith('.js'))continue;const path=new URL(folder+'/'+file,root);const result=spawnSync(process.execPath,['--check',path.pathname],{encoding:'utf8'});assert(result.status===0,result.stderr);const text=await readFile(path,'utf8');assert(!/\/\/\s*(TODO|add more|implement later)|蝴蝶|butterfl/iu.test(text),'未完成內容或意象不符');}
const html=await readFile(new URL('index.html',root),'utf8'),css=await readFile(new URL('css/glitch.css',root),'utf8'),readme=await readFile(new URL('README.md',root),'utf8');
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert(new Set(ids).size===ids.length,'重複HTML ID');for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g))assert(m[1].startsWith('./')||m[1].startsWith('data:'),'非相對資源');assert((css.match(/{/g)||[]).length===(css.match(/}/g)||[]).length,'CSS結構不符');
assert(!/breakout|mirror inversion|鏡像演算法|技能破局|反轉配對|真實技能|蝴蝶|butterfl/iu.test(html+readme+css),'公開文字含設計提示');assert(!/https?:\/\//.test(html+css),'不應依賴外站資產');assert(html.includes('min-height')===false,'樣式應在CSS');loadScenarioBatch(SCENARIO_DB);console.log('PASS: syntax, schema, relative paths, HTML IDs, CSS structure, public-copy checks; source inspection is not a secrecy guarantee');
