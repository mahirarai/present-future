// Present Future, Chapter One

let cubeSize = 600;
let blockSize = 20;

let expand = false;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, random(1.1,1.7));
}

function mousePressed(){
  colorMode(HSB, random(1.1,1.7));
}

function draw() {
  background('#F1F3F4');
  noFill();
  strokeWeight(1);
  stroke((1/5 + 0.75)%1, 1, 1, 1);
  
  // Code adapted from Jason Labbe - jasonlabbe3d.com
  rotateX(radians(map(mouseY, 0, height, 90, -90)));
  rotateY(radians(map(mouseX, 0, width, -90, 90)));
  
  for (let x = 0; x < cubeSize; x+=blockSize) {
    for (let z = 0; z < cubeSize; z+=blockSize) {
      let n = noise((frameCount + x + z * 200) * 0.01);
      let d = max(dist(cubeSize / 2, cubeSize / 2, x, z) * 0.0075, 0.25);
      let squash = map(n, 0, 1, 3, -1.5);
      let stretch = map(n, 0, 1, -5, 10 / d);
      
      push();
      translate(x - cubeSize / 2, 0, z - cubeSize / 2);
      rotate(radians(map(n, 0, 1, -135, 135)));
      scale(squash, stretch, squash);
      box(blockSize * 0.8);
      pop();
    }
  }
  
  if(!expand){
    cubeSize--;
    if(cubeSize <= 10){
      expand = true;
    }
  }
  if(expand){
    cubeSize++; 
    if(cubeSize >= 600){
      expand = false;
    }
  }
  
}