
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground1,bob1,bob2,bob3,bob4,bob5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground1 = new Ground(350,100,650,50)

bobDiameter = 40;

bob1 = new Bob(350,10,50,50);
bob2 = new Bob(250,10,50,50);
bob3 = new Bob(150,10,50,50);
bob4 = new Bob(450,10,50,50);
bob5 = new Bob(550,10,50,50);



var render = Render.create({
  element:document.body,
  engine:engine,
  options:{
    width:1200,
    height:700,
    wireframes:false
  }
})

rope1 = new Rope(bob1.body,ground1.body,-bob1Diameter*2,2);
rope2 = new Rope(bob2.body,ground1.body,-bob1Diameter*1,2);
rope3 = new Rope(bob3.body,ground1.body,0,0);
rope4 = new Rope(bob4.body,ground1.body,-bob1Diameter*1,2);
rope5 = new Rope(bob5.body,ground1.body,-bob1Diameter*2,2);

constraint1={
  bodyA: bob1.body,
  bodyB: ground1.body,
  pointB: {x:-bobDiameter*2, y:0}
}

constraint2={
  bodyA: bob2.body,
  bodyB: ground1.body,
  pointB: {x:-bobDiameter*1, y:0}
}

constraint3={
  bodyA: bob3.body,
  bodyB: ground1.body,
  pointB: {x:0, y:0}
}

constraint4={
  bodyA: bob4.body,
  bodyB: ground1.body,
  pointB: {x:-bobDiameter*1, y:0}
}

constraint5={
  bodyA: bob1.body,
  bodyB: ground1.body,
  pointB: {x:-bobDiameter*1, y:0}
}

var pendulum1 = Constraint.create(constraint1);
var pendulum2 = Constraint.create(constraint2);
var pendulum3 = Constraint.create(constraint3);
var pendulum4 = Constraint.create(constraint4);
var pendulum5 = Constraint.create(constraint5);

World.add(world,pendulum1);
World.add(world,pendulum2);
World.add(world,pendulum3);
World.add(world,pendulum4);
World.add(world,pendulum5);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if ( keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }
}

function drawline(constraint){
  bobpos = constraint.bodyA.position;
  groundpos = constraint.bodyB.position;

  groundconst = constraint.pointB;

  groundX = groundpos.x+groundconst.x;
  groundY = groundpos.y+groundconst.y;

  line(bobpos.x,bobpos.y,groundX.groundY);
}

