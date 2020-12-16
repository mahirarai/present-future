
// Present Future, Chapter Four
// Code adapted from Roni Kaufman

let kMax; 
let step = 0.01; 
let n = 100; 
let radius = 0; 
let inter = 0.05; 
let maxNoise = 500; 

let mX; 
let mY; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, random(1.1,1.7));
  angleMode(DEGREES);
  kMax = random(0.6, 1.0);
  noFill();
  noStroke();
  
  mX = width/2; 
  mY = height/2-100;
}

function draw() {
  background('#F1F3F4');
  
  let t = frameCount/100;
  for (let i = n; i > 0; i--) {
    let alpha = 1 - (i / n);
    fill((alpha/5 + 0.75)%1, 1, 1, alpha);
    let size = radius/5 + i * inter;
    let k = kMax * sqrt(i/n);
    let noisiness = maxNoise * (i / n);
    blob(size, mX, mY, k, t - i * step, noisiness);
  }
}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  let angleStep = 360 / 10;
  
  beginShape();
  for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep)
  {
    let r1, r2;
    r1 = cos(theta)+1;
    r2 = sin(theta)+1; 
    let r = size + noise(k * r1,  k * r2, t) * noisiness;
    let x = xCenter + r * cos(theta);
    let y = yCenter + r * sin(theta);
    curveVertex(x, y);
  }
  
  endShape();
}

function mousePressed(){
  clear(); 
  background('#F1F3F4');
  colorMode(HSB, random(1.1,1.7));
  mX = mouseX; 
  mY = mouseY; 
}