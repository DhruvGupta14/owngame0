const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mySnow = [];
var index = 0;

var engine, world;
var backgroundImg, ground;
var bg, Hour;
var snow = [];
var snow1;
var maxSnow = 100;

function preload() {
  getbackgroundImg();
}
function setup() {
  createCanvas(900, 600);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 500, 900, 20);
}

function draw() {
  if (backgroundImg) background(backgroundImg);

  Engine.update(engine);

  if (frameCount % 50 === 0) {
    index = index + 1;
    snow2 = new Snowfall(
      random(100, 500),
      random(0, 20),
      random(20, 50),
      index
    );
    console.log(frameCount, snow2.body.position);
    mySnow[index] = snow2;
  }

  for (var i in mySnow) {
    mySnow[i].display();
  }

  drawSprites();
}

async function getbackgroundImg() {
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  console.log(response);

  var responseJSON = await response.json();
  console.log(responseJSON);

  currentdatetime = responseJSON.currentDateTime;
  Hour = currentdatetime.slice(11, 13);
  console.log(Hour);

  if (Hour >= 20 && Hour < 4) {
    bg = "snow2.jpg";
    console.log(bg);
  } else if (Hour >= 4 && Hour < 12) {
    bg = "snow1.jpg";
  } else if (Hour >= 12 && Hour < 20) {
    bg = "snow3.jpg";
  }

  backgroundImg = loadImage(bg);
}
