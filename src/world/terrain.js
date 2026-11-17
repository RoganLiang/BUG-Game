// Authored gameplay presets, not GIS, historical boundaries or measured climate data.
export const terrainKinds={
 plain:{label:'平原',icon:'·',color:'#77915d',resource:'food'},
 forest:{label:'森林',icon:'♣',color:'#375f47',resource:'wood'},
 river:{label:'淡水',icon:'≈',color:'#426f91',resource:'water'},
 hill:{label:'丘陵',icon:'▲',color:'#8d8770',resource:'stone'},
 coast:{label:'海水',icon:'≋',color:'#294c6e',resource:null},
 dry:{label:'乾地',icon:'▫',color:'#a59162',resource:'stone'}
};
export const landProfiles={
 temperate:{label:'溫帶河谷',weights:['plain','forest','forest','hill','river'],hazard:'rain',farmYield:3},
 wet:{label:'濕潤沿海',weights:['plain','forest','forest','river','coast'],hazard:'rain',farmYield:4},
 tropical:{label:'熱帶林地',weights:['forest','forest','plain','river','coast'],hazard:'rain',farmYield:4},
 dry:{label:'乾燥流域',weights:['dry','dry','plain','hill','river'],hazard:'dry',farmYield:2},
 cold:{label:'寒冷高地',weights:['hill','hill','forest','plain','river'],hazard:'cold',farmYield:2},
 mild:{label:'溫和丘地',weights:['plain','plain','forest','hill','river'],hazard:'dry',farmYield:3}
};
const stationBiomes={tokyo:'temperate',seoul:'temperate',shanghai:'wet','hong-kong':'wet',singapore:'tropical',manila:'tropical',ulaanbaatar:'cold',santiago:'dry',rio:'tropical',boston:'temperate',vancouver:'wet',alaska:'cold',montreal:'cold',canberra:'mild',wellington:'mild',jakarta:'tropical',bangkok:'tropical',penang:'tropical','new-delhi':'dry',berlin:'temperate',london:'temperate',istanbul:'mild',cairo:'dry',madagascar:'tropical',vatican:'mild'};
export function landProfile(id){return landProfiles[stationBiomes[id]||'temperate'];}
export function landNeighbors(index){const x=index%6,y=Math.floor(index/6);return [x>0?index-1:-1,x<5?index+1:-1,y>0?index-6:-1,y<5?index+6:-1].filter(i=>i>=0);}
export function makeLandMap(id){let seed=[...id].reduce((a,c)=>(Math.imul(a,31)+c.charCodeAt(0))>>>0,17);const p=landProfile(id);const map=Array.from({length:36},(_,index)=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return {index,kind:p.weights[seed%p.weights.length],stock:9,building:null};});
 // Same accessible tutorial patch for every start; the rest varies by region.
 for(const [index,kind]of [[7,'plain'],[8,'plain'],[9,'plain'],[13,'forest'],[14,'plain'],[15,'river'],[20,'plain'],[21,'hill']])map[index]={index,kind,stock:9,building:null};
 return map;
}
