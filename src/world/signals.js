import {cities} from './cities.js';
export function projectSignals(state){
 const known=new Set(state.knownFacts);const out=[];
 if(known.has('clip'))out.push({cityId:'paris',publicStatus:'影片聲稱在巴黎・未證實',lastUpdated:'08:17',unlockedAt:'08:17',source:'社群轉貼',verificationStatus:'未證實'});
 if(known.has('friend'))out.push({cityId:'seoul',publicStatus:'朋友回報影片正在流傳',lastUpdated:'08:29',unlockedAt:'08:29',source:'知允的私人訊息',verificationStatus:'流傳回報・事件未知'});
 for(const [fact,cityId,time]of [['tokyo','tokyo','08:37'],['ny','new-york','08:38']])if(known.has(fact))out.push({cityId,publicStatus:'標註此地的帳號轉貼影片',lastUpdated:time,unlockedAt:time,source:'公開討論串',verificationStatus:'未證實・無現場證據'});
 if(known.has('window'))out[0]={cityId:'paris',publicStatus:'住所窗外未見影片中的停頓',lastUpdated:'08:41',unlockedAt:'08:41',source:'你的親眼觀察',verificationStatus:'僅限第11區一個路口'};
 return out;
}
export function signalCards(state){return cities.map(city=>({city,...(state.visibleSignals.find(s=>s.cityId===city.id)||{publicStatus:'尚未取得可接觸的訊號',lastUpdated:null,source:'未解鎖',verificationStatus:'未知'})}));}
