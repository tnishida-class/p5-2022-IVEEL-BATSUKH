// 小手調べ
function setup(){
  createcanvas (100, 100);
   
  for(let i = 0; i < 10; i++){
    noFill(); 
    if(i<5){
      stroke(255, 0, 0)
    }
    else{
      stroke(0, 0, 255)
    }
    let i=x * 8 + 8; 
    ellipse ( 50, 50, x);

  }
}
