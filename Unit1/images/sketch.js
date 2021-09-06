let coffee, cookie, halloween ;

function setup() {
  createCanvas(500, 500);
  coffee = loadImage("assets/coffee.jpeg");
  cookie = loadImage("assets/cookie dough.jpeg");
  halloween = loadImage("assets/halloween.jpeg");
  imageMode(CENTER);
}

function draw() {
  background ('green');
  image(coffee, width/2,height/2,100,100);
  image(cookie, width/2,height/2-120, 100,100);
  image(halloween, width/2,height/2+120,100,100);
}
