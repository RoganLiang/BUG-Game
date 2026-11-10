import {replaySave} from '../game/engine.js';
export const SAVE_KEY='moth-effect-bug-v2';
export function loadSave(storage){
 let raw;try{raw=storage.getItem(SAVE_KEY);}catch{return {state:null,message:'無法讀取本機存檔；仍可遊玩'};}
 if(!raw)return {state:null,message:'進度僅儲存在此瀏覽器'};
 try{const state=replaySave(JSON.parse(raw));return {state,message:state?'找到可繼續的本機進度':'存檔版本不相容或已損毀；可安全開始新旅程'};}catch{return {state:null,message:'存檔已損毀；可安全開始新旅程'};}
}
export function persistSave(storage,state){try{storage.setItem(SAVE_KEY,JSON.stringify(state));return '已儲存於此瀏覽器';}catch{return '無法存檔；本次仍可遊玩';}}
