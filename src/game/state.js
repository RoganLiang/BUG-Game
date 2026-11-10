export const GAME_VERSION='0.2.0';
export function fresh(runId=globalThis.crypto?.randomUUID?.()||`run-${Date.now()}-${Math.random().toString(36).slice(2)}`){
 return {gameVersion:GAME_VERSION,runId,currentNodeId:'home',gameTime:'08:17',birthplaceId:null,residenceId:'paris-11',age:30,worldState:{parisIntersection:'routine-at-0841',videoCause:'undetermined',rumorSpread:0},flags:{},knownFacts:[],rumors:[],relationships:{jiyoon:0},decisionHistory:[],visibleSignals:[],stats:{energy:70,insight:30,empathy:30,influence:10}};
}
export function minuteValue(time){const [h,m]=time.split(':').map(Number);return h*60+m;}
export function clockTime(minutes){return `${String(Math.floor(minutes/60)).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`;}

// Whitelist projection: renderers never receive simulation internals.
export function playerView(state){const {gameVersion,runId,currentNodeId,gameTime,birthplaceId,residenceId,age,flags,knownFacts,rumors,relationships,decisionHistory,visibleSignals,stats}=state;return structuredClone({gameVersion,runId,currentNodeId,gameTime,birthplaceId,residenceId,age,flags,knownFacts,rumors,relationships,decisionHistory,visibleSignals,stats});}
