/*One element controlled by the mouse.
One element that changes over time, independently of the mouse.
One element that is different every time you run the sketch.
*/

let x,y,s,g,change;

function setup() {
  createCanvas(windowWidth, windowHeight)  
  // background(random(0,255));
  background(0,0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
} 

function draw() {
  //big square
  x=mouseX-width/2;  //rotation of the square controlled by mouse positions (relative to the center of canvas)
  y=mouseY-height/2;
  s=dist(width/2,height/2,mouseX,mouseY);  //size of the square controlled by mouse positions (relative to the center of canvas)
  push();
  translate(width/2,height/2);
  rotate(atan(y/x));
  noStroke();
  fill(map(s,0,width,0,255));
  rectMode(CENTER)
  rect(0,0,s,s);
  pop();
  
//   //small rects rotating over time 
//   push();
//   translate(width/5,height/5);
//   rotate(frameCount/150);
//   fill(random(0,50));
//   rectMode(CENTER)
//   rect(0,0,30,80);
//   pop();
  
//   push();
//   translate(width*4/5,height/5);
//   rotate(-frameCount/150);
//   noFill();
//   stroke(random(50,100));
//   rectMode(CENTER)
//   rect(0,0,30,80);
//   pop();
  
//   push();
//   translate(width/5,height*4/5);
//   rotate(-frameCount/150);
//   noFill();
//   stroke(random(100,150));
//   rectMode(CENTER)
//   rect(0,0,80,30);
//   pop();
  
//   push();
//   translate(width*4/5,height*4/5);
//   rotate(-frameCount/150);
//   noFill();
//   stroke(random(150,200));
//   rectMode(CENTER)
//   rect(0,0,80,30);
//   pop();
}
