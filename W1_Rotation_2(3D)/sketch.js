var s,a;   //scale and rotate angle
function setup(){
  createCanvas(windowWidth, windowHeight,WEBGL)  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawQuad(s,a){
	push();
  translate(0, -50);
  scale(s);
  let r = map(mouseX,0,windowWidth,2*PI,-2*PI);
  rotateY(a+r);
  fill(0, 0, 0, 80);
  beginShape();
  vertex(0, 0);
  vertex(0 + 300, -150);
  vertex(0 + 240, +300);
  vertex(0 + 30, +240);
  vertex(0, 0);
  endShape();
  pop();
}

function draw() {
  background(255,0);
  noStroke();
	//arc
  push();
  translate(0,-50);
  let b = map(mouseX,0,windowWidth,0,2*PI);
  rotateZ(b)
  fill(234, 233, 202,200);
  arc(0, 0, 300, 300, 0.9*PI, 1.6 * PI);
  pop();
  
  //quad
  for(let i =0; i <15; i++){
  	drawQuad(1-0.04*i,0.3+0.2*i)
  }


  //crossing line
  strokeWeight(2);
  stroke(40);
  push();
  translate(0,-50);
  let q = map(mouseX,0,windowWidth,-2*PI,2*PI)
  rotateX(q)
  line(0, 0, 0, -100, 300, -500);
	pop();
}