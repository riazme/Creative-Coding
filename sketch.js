let r,g,b,x,y,z,c1,c2,c3;
let w, h;

let mw;

function setup() {
  w = window.innerWidth;
  h = window.innerHeight; 
  mw = w/3;
  createCanvas(w,h);
  frameRate(2);
}
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let fs = fullscreen();
    fullscreen(!fs);
   
  }
}
function draw() {
  background(255);
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  c1 = color(r,g,b,255)
  x = random(0,255);
  y = random(0,255);
  z = random(0,255);
  c2 = color(x,y,z,255)

  
  strokeWeight(10);
  stroke (255);
  
  fill(c1);
  rect(0,0,mw, h);
  
  fill(lerpColor(c1,c2,0.5));
  rect(mw,0, mw,h);
  
  fill(c2);
  rect(mw*2, 0, mw, height); 
}