export function paintScene(){const $=s=>document.querySelector(s);
// No external assets or network requests.
const ctx=$('#scene').getContext('2d');
function rect(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h);}
rect(0,0,320,144,'#24383f');rect(0,58,320,50,'#35474a');
for(let i=0;i<55;i++){const x=(i*67+13)%320,y=(i*31+8)%65;rect(x,y,1,1,i%3?'#8d9d89':'#e2d4a0');}
rect(249,21,12,12,'#d6d8ad');rect(246,24,18,6,'#d6d8ad');rect(246,20,10,9,'#24383f');
for(let i=0;i<21;i++){const x=i*17,h=12+(i*13)%25;rect(x,101-h,15,h,'#1a2a30');rect(x+2,98-h,10,4,'#1a2a30');for(let j=0;j<3;j++)if((i+j)%3)rect(x+3+j*4,91,2,3,'#a89e70');}
for(let y=38;y<103;y+=3){const spread=(y-38)*.29;rect(107-spread,y,3,3,'#ab9e72');rect(107+spread,y,3,3,'#ab9e72');if(y%2===0)rect(107-spread,y,spread*2,1,'#7b8066');}rect(106,29,2,12,'#c4b17c');rect(96,71,25,3,'#c4b17c');rect(87,93,43,3,'#c4b17c');rect(99,91,17,12,'#24383f');
rect(0,104,320,40,'#20363d');for(let i=0;i<90;i++){rect((i*47)%320,108+(i*17)%36,3+(i%5)*3,1,i%4?'#3b5556':'#99976b');}
rect(0,101,320,3,'#657462');for(let i=0;i<6;i++){rect(27+i*59,78,2,27,'#121f24');rect(23+i*59,76,10,2,'#b9ac70');rect(25+i*59,78,6,3,'#d4c583');}
const moth=['110000011','111000111','122101221','123212321','012222210','001222100','001010100'];for(let y=0;y<moth.length;y++)for(let x=0;x<9;x++)if(moth[y][x]!=='0')rect(190+x*2,42+y*2,2,2,{'1':'#bdc58f','2':'#e5d59d','3':'#4b5650'}[moth[y][x]]);

}
