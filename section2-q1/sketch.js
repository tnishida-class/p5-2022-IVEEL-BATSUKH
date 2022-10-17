// 小手調べ
function setup(){
  createcanvas (100, 100);
   
  for(let i = 0; i < 10; i++){
    if(i<5){
      stroke(255, 0, 0)
    }
    else{
      stroke(0, 0, 255)
    }
    let i=x + 10 * 11; 
    ellipse ( x, 0, 100);

  }
}
