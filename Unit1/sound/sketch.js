let song1;

function preload() {
  song1 = loadSound("assets/sportpercussion.mp3");
}


function setup() {
  createCanvas(500, 500);
  song1.loop();
}

function draw() {

  createCanvas(500, 500);
  background("orange");

  //if the song is playing and someone clicked,
  //then stop the song, otherwise start the song

}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.loop();
  }

}



function touchStarted() {
  getAudioContext().resume();
}
