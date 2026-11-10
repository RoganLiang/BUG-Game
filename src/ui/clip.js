// Original fictional clip reconstruction, not downloaded footage.
export function createClipPlayer(onUpdate=()=>{}){
 const canvas=document.querySelector('#scene'),ctx=canvas.getContext('2d');
 let frame=0,version='a',playing=false,interval=null;const found=new Set();
 function rect(x,y,w,h,color){ctx.fillStyle=color;ctx.fillRect(x,y,w,h);}
 function drawFrame(){
  ctx.setTransform(1,0,0,1,(frame%3)-1,0);
  rect(-2,0,324,180,'#182333');rect(0,0,320,42,'#263e4c');
  for(let i=0;i<10;i++){const x=i*36,h=45+(i*19)%36;rect(x,115-h,31,h,'#36434c');rect(x+2,115-h,27,3,'#637079');for(let row=0;row<4;row++)for(let col=0;col<3;col++)rect(x+5+col*8,120-h+row*12,3,5,(i+col+row)%4?'#81978c':'#b8b17e');}
  rect(0,116,320,64,'#131d2b');rect(0,116,320,3,'#6a7b7b');
  for(let i=0;i<9;i++)rect(i*42,151,24,2,'#8c9990');
  for(let i=0;i<7;i++)rect(100+i*18,129,10,12,'#bbbca9');
  rect(265,85,3,45,'#82928e');rect(260,77,13,19,'#09121b');rect(264,80,5,5,frame<7?'#a64750':'#8cb495');rect(264,88,5,5,frame<7?'#6e333e':'#c9dca0');
  const stopped=frame>=7&&frame<=12,walk=stopped?7:frame;
  for(let i=0;i<4;i++){const x=38+i*63+(walk*3)%28,y=111+(i%2)*20;rect(x,y-15,5,5,'#c9b59d');rect(x-2,y-10,9,12,['#8fb6ab','#b78680','#aebd8a','#8f9bbc'][i]);rect(x-2,y+2,3,6,'#65717e');rect(x+4,y+2,3,stopped?6:4+frame%3,'#65717e');}
  // Identical footage in both versions: only the repost caption changes.
  if(frame>=12){rect(202,95,12,5,'#d2c09d');rect(200,97,16,2,'#d2c09d');rect(206,94,4,8,'#7d988f');}
  rect(0,0,320,180,'#00000012');
  document.querySelector('#clip-clock').textContent=`00:${String(frame).padStart(2,'0')} / 00:17`;
  document.querySelector('#clip-caption').textContent=version==='a'?'PARIS · 08:16':'SEOUL · 07:58';
  document.querySelector('#clip-scrub').value=frame;
  document.querySelector('#clip-play').textContent=playing?'暫停重播':'播放17秒影像';
  for(const v of ['a','b'])document.querySelector('#version-'+v).setAttribute('aria-pressed',String(v===version));
  document.querySelector('#clip-state').textContent=stopped?'路人停止，鏡頭仍在移動。':frame>=13?'畫面繼續；原因未知。':'同一段畫面，兩個不同的說法。';
  onUpdate();
 }
 function pause(){playing=false;if(interval)clearInterval(interval);interval=null;drawFrame();}
 document.querySelector('#clip-play').onclick=()=>{if(playing){pause();return;}if(frame>=17)frame=0;playing=true;drawFrame();interval=setInterval(()=>{frame++;if(frame>=17)pause();else drawFrame();},1000);};
 document.querySelector('#clip-scrub').oninput=e=>{const requested=Number(e.target.value);pause();frame=requested;drawFrame();};
 for(const v of ['a','b'])document.querySelector('#version-'+v).onclick=()=>{version=v;found.add(v);document.querySelector('#clip-clue').textContent=found.size===2?'兩個版本的地點與時間都不同。你信哪一個？':'已切換版本。另一個版本說了什麼？';drawFrame();};
 document.addEventListener('visibilitychange',()=>{if(document.hidden)pause();});
 drawFrame();return {pause,reset(){frame=0;version='a';found.clear();document.querySelector('#clip-clue').textContent='切換 A／B，比對畫面上的時間與地點。';pause();}};
}
