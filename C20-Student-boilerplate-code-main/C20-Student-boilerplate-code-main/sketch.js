
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let wedge;
var ball, ball2;
var ground;
var platform;

function setup() {
  createCanvas(400,400);

  angle = 10;

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options = {
     isStatic: true
   };

   var platform_options = {
    isStatic: true
  };
  
   var ball2_options = {
    restitution: 0.95,
    frictionAir:0.01
  };

  wedge = Bodies.rectangle(100,200,100,20,platform_options);
  World.add(world,wedge);

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(300,10,20,ball2_options);
  World.add(world,ball2);

  platform = Bodies.rectangle(300,200,200,10, platform_options);
  World.add(world,platform);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(platform.position.x, platform.position.y, 200, 10);
  Matter.Body.rotate(wedge,angle);
  push();
  translate(wedge.position.x, wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle += 0.1; 
}

