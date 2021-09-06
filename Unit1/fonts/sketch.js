let f1, f2;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/Halloween Night.otf");
  f2 = loadFont("assets/HeyNovember-eZZ2l.ttf");
  textAlign(CENTER);
  // hello
}

function draw() {
  background("orange");
  textFont(f1);
  textSize(48);
  text("Happy Halloween", width/2,100);

  textFont(f2);
  textSize(24);
  text("Stay Spooky", width/2,160);

}
