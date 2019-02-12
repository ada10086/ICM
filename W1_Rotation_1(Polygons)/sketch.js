function setup() {
  createCanvas(windowWidth, windowHeight)  
  //createCanvas(400, 400);
  //background(0);
  background(0,0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  push();
  translate(width / 2, height / 2);

  //rotating polygon #1 
  rotate(frameCount / -50.0);
  stroke(random(0, 255));
  fill(255, 255, 255, 20);
  //heptagon
  polygon(0, 0, 300 * sin(frameCount / 50), 7);

  //rotating polygon #2 
  rotate(frameCount / -100.0);
  stroke(50);
  fill(255, 255, 255, 100);
  //triangle
  polygon(0, 0, 300 * cos(frameCount / 50), 3);

  pop();
}

//polygon function declarat ion
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}