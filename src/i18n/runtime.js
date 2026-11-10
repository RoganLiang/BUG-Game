import {catalog} from './catalog.js';
export const supportedLanguages=[['zh-Hant','繁體中文'],['en','English'],['ja','日本語'],['ko','한국어'],['es','Español'],['fr','Français']];
const sourceTexts=new WeakMap(),sourceAttributes=new WeakMap();
let activeLanguage='zh-Hant';
const dictionaries=new Map(supportedLanguages.map(([code],column)=>[code,new Map(catalog.map(row=>[row[0],row[column]]))]));
const pattern=new RegExp(catalog.map(row=>row[0]).sort((a,b)=>b.length-a.length).map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
export function language(){return activeLanguage;}
export function setLanguage(code){activeLanguage=supportedLanguages.some(([id])=>id===code)?code:'zh-Hant';return activeLanguage;}
export function translateText(text,code=activeLanguage){if(code==='zh-Hant')return text;const dictionary=dictionaries.get(code);if(!dictionary)return text;return dictionary.get(text)||text.replace(pattern,source=>dictionary.get(source)||source);}
export function localizeDOM(root=document.body){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()){
  const node=walker.currentNode;
  if(node.parentElement?.closest('script,style,[data-no-translate]'))continue;
  if(!sourceTexts.has(node))sourceTexts.set(node,node.textContent);
  node.textContent=translateText(sourceTexts.get(node));
 }
 for(const element of root.querySelectorAll('[aria-label],[title]')){
  if(element.closest('[data-no-translate]'))continue;
  if(!sourceAttributes.has(element))sourceAttributes.set(element,Object.fromEntries(['aria-label','title'].filter(a=>element.hasAttribute(a)).map(a=>[a,element.getAttribute(a)])));
  for(const [attribute,value]of Object.entries(sourceAttributes.get(element)))element.setAttribute(attribute,translateText(value));
 }
 document.documentElement.lang=activeLanguage;
 document.title=translateText('皇蛾效應 BUG｜巴黎的17秒');
}
