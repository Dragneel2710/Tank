const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var tank,tankg,tankt,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;

    tank = new Tank(350,150,50,50);
    tankg = new Tank(340,140,80,10);
    tankt = new Tank(350,130,70,50);

    ground = new Ground(390,200,1200,10);

}
function draw() {
  background(255,255,255);

  Engine.update(engine);

  tank.display();
  tankg.display();
  tankt.display();

  ground.display();
}