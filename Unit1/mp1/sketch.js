let song1;
let f1;

function preload() {
  song1 = loadSound("assets/ghost.mp3");
  f1 = loadFont("assets/Halloween Night.otf");
}


function setup() {
  createCanvas(700, 500);
  song1.loop();
}


function draw() {
  if (mouseIsPressed) {
    background(136, 8, 8);
  } else {
    background(255, 95, 31);

  }
  //background


  //ellipse(mouseX, mouseY, 3, 3);
  //fill(0);
  //text(mouseX + "," + mouseY, 15, 15);
  //cursor

  if (mouseIsPressed) {
    noStroke();
    fill(255);
    ellipse(340, 140, 250, 250);
    rect(220, 120, 240, 300);
    triangle(220, 227, 126, 340, 220, 267);
    triangle(457, 227, 551, 340, 457, 267);
    //angry body top
    fill(255);
    triangle(220, 415, 220, 490, 415, 280);
    triangle(460, 415, 460, 490, 395, 415);
    triangle(285, 420, 335, 464, 400, 420);
    //angry body bottom
    translate(0, 50);
    fill(0);
    triangle(390, 35, 350, 80, 390, 80);
    triangle(290, 35, 290, 80, 330, 80);
    rect(280, 100, 120, 50);
    //angry ghost face

    fill(0);
    noStroke();

    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    translate(0, 100);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    translate(150, -50);
    //ellipse(50,50,60,50);
    //ellipse(80,40,60,50);
    //ellipse(130,50,60,50);
    //ellipse(70,70,60,50);
    //ellipse(110,65,60,50);
    //cloud group

    translate(300, -50);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    translate(0, 100);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    translate(150, -50);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group


  } else {
    noStroke();
    fill(255);
    ellipse(340, 180, 200, 200);
    rect(240, 180, 200, 150);
    triangle(240, 330, 240, 390, 285, 330);
    triangle(440, 330, 440, 390, 395, 330);
    triangle(285, 330, 335, 370, 395, 330);
    //happy ghost body

    fill(0);
    ellipse(310, 150, 25, 75);
    ellipse(370, 150, 25, 75);
    arc(340, 210, 110, 100, 0, PI);
    //happy ghost face

    fill(128, 128, 128);
    noStroke();

    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    translate(0, 100);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    translate(150, -50);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    //ellipse(130,50,60,50);
    ellipse(70, 70, 60, 50);
    //ellipse(110,65,60,50);
    //cloud group

    translate(300, -50);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    translate(0, 100);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    translate(150, -50);
    ellipse(50, 50, 60, 50);
    ellipse(80, 40, 60, 50);
    ellipse(130, 50, 60, 50);
    ellipse(70, 70, 60, 50);
    ellipse(110, 65, 60, 50);
    //cloud group

    textFont(f1);
    textSize(20);
    fill(0);
    text("Ghosty is a happy fella when it's Halloween time, but whenever he thinks about his favorite \nholiday being over it sends him into a haunting rage to keep the festivities alive in his heart",-580,400);

  }

  function touchStarted() {
  getAudioContext().resume();
}



}
