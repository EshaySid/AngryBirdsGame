const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var box1, box2, box3, box4, box5;
var piggy1, piggy2;
var plank1, plank2, plank3, plank4;
var bird1;
var bg;
var connection;
var platform;

function preload() {
  bg = loadImage("assets/bg.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600, 590, 1200, 10);
  //X= half of width of canvas, Y= height-10
  box1 = new Box(1100, 550, 70, 70);
  box2 = new Box(900, 550, 70, 70);
  box3 = new Box(1100, 450, 70, 70);
  box4 = new Box(900, 450, 70, 70);
  box5 = new Box(1000, 350, 70, 70);

  piggy1 = new Piggy(1000, 550, 70, 70);
  piggy2 = new Piggy(1000, 450, 70, 70);

  plank1 = new Plank(1000, 500, 20, 300, PI / 2);
  plank2 = new Plank(1000, 400, 20, 300, PI / 2);
  plank3 = new Plank(1050, 350, 20, 150, PI / -4); //right plank
  plank4 = new Plank(950, 350, 20, 150, PI / 4); //left plank

  bird1 = new Bird(200, 150, 50, 50);

  connection = new Link(bird1.bird, { x: 200, y: 150 });

  platform = new Ground(50, 450, 540, 300);
}

function draw() {
  background(bg);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  piggy1.display();
  piggy2.display();

  plank1.display();
  plank2.display();
  plank3.display();
  plank4.display();

  bird1.display();

  platform.display();

  connection.display();

  Engine.update(engine);
}

function mouseDragged() {
  Matter.Body.setPosition(bird1.bird, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  connection.break();
}