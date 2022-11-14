// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 100, 320, 25, 200, 150);
}

function balloon(t, x, y, color){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(color);
  rect(x, y, w + p*2  ,  h + p * 2 );
  triangle (x + 50, h + p * 2 + y, x+ 50, h + 40 + y,  x + 70, h + p * 2 + y ); 
  fill(200);
  text(t, p + x + 5 , h + p + y);
}

