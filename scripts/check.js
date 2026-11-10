import {readdir,readFile,writeFile,mkdtemp,rm} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
async function files(dir){return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(e=>e.isDirectory()?files(join(dir,e.name)):[join(dir,e.name)]))).flat();}
for(const path of [...await files('src'),...await files('scripts'),...await files('tests')].filter(f=>f.endsWith('.js'))){const r=spawnSync(process.execPath,['--check',path],{encoding:'utf8'});if(r.status!==0)throw new Error(r.stderr);}
const html=await readFile('dist/index.html','utf8'),code=html.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1];
if(!code||html.includes('src="app.js"')||html.includes('PLACEHOLDER_CSS')||!html.includes('lang="zh-Hant"'))throw new Error('Invalid standalone build');
const temp=await mkdtemp(join(tmpdir(),'bug-check-'));try{const script=join(temp,'bundle.mjs');await writeFile(script,code);const result=spawnSync(process.execPath,['--check',script],{encoding:'utf8'});if(result.status!==0)throw new Error(result.stderr);}finally{await rm(temp,{recursive:true});}
// Structural CSS sanity; browser tests separately validate CSSOM and rendered layout.
const css=await readFile('web/style.css','utf8');if((css.match(/{/g)||[]).length!==(css.match(/}/g)||[]).length)throw new Error('Unbalanced CSS braces');
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);if(new Set(ids).size!==ids.length)throw new Error('Duplicate HTML IDs');
console.log('PASS: source/bundle JS syntax, standalone references, unique static HTML IDs, CSS brace balance');
