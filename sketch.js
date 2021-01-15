
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var box1;
var box2;
var ground1;

function setup(){

  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  box1 = new Box(120,300,50,50);
  box2 = new Box(145,200,50,50);
  ground1 = new Ground(200,380,400,10);

}

function draw(){
  background(250);
  Engine.update(engine);
  box1.display();
  ground1.display();
  box2.display();
}