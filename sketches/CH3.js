// Present Future, Chapter Three

let ranges = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, random(1.1,1.7));
  smooth(2);
  background(0);
}

function draw() {
  background('#F1F3F4');
  noFill();
  strokeWeight(0.5);

  // Code adapted from Wenj
  for (let i = 0; i < ranges; i++) {
    stroke((1/5 + 0.75)%1, 1, 1, 1);
    beginShape();
    for (let x = -10; x < width + 11; x += 20) {
      let n = noise(x * 0.001, i * 0.008, frameCount * 0.005);
      let y = map(n*1.3, 0, 1, 0, height);
      vertex(x, y);
    }
    endShape();
  }
}

function mousePressed(){
  colorMode(HSB, random(1.1,1.7));
}