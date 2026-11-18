import {cp,mkdir} from 'node:fs/promises';
const root=new URL('../',import.meta.url),target=new URL('dist/atlas-moth-bug/',root);await mkdir(target,{recursive:true});await cp(new URL('atlas-moth-bug/dist/',root),target,{recursive:true});console.log('Added independent /atlas-moth-bug/ entry to the site artifact');
