import {mkdir, readFile, writeFile} from 'node:fs/promises';
const root = new URL('../', import.meta.url);
let html = await readFile(new URL('web/index.html',root),'utf8');
html = html.replace('<link rel="stylesheet" href="style.css">',`<style>${await readFile(new URL('web/style.css',root),'utf8')}</style>`).replace('<script type="module" src="app.js"></script>',`<script type="module">${(await readFile(new URL('web/game.js',root),'utf8')).replaceAll('export ','')}\n${(await readFile(new URL('web/app.js',root),'utf8')).replace(/^import .*;\n/,'')}</script>`);
await mkdir(new URL('dist/',root),{recursive:true});
for (const name of ['index.html','BUG_Game.html']) await writeFile(new URL('dist/'+name,root),html);
console.log('Built standalone dist/index.html and dist/BUG_Game.html');
