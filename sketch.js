
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treco1,treco2,treco3;

var engine,world;

var ball1,ball2,ball3,ball4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    var treco1_opition = {
    isStatic: true
	}
	var treco2_opition = {
	isStatic: true
	}
    var treco3_opition = {
    isStatic: true
	}
	var ball1_opition = {
	restitution:0.95
	frictionAir:0.01
	}
	


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
   treco1 = Bodies.rectangle(400,700,800,10,treco1_opition);
   fill("red");
   World.add(world,treco1);
   Engine.run(engine);
   treco2 = Bodies.rectangle(600,400,300,10,treco2_opition);
   fill("red");
   World.add(world,treco1);
   Engine.run(engine);   
   treco3 = Bodies.rectangle(200,400,300,10,treco3_opition);
   fill("red");
   World.add(world,treco1);
   Engine.run(engine); 
   
   ball1 = Bodies.circle(400,70,20,ball1_opition);
   World.add(world,ball1);
   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(100);
  
  rect(treco1.position.x,treco1.position.y,800,10);
  rect(treco2.position.x,treco2.position.y,300,10);
  rect(treco3.position.x,treco3.position.y,300,10);
  ellipse(ball1.position.x,ball1.position.y,20);
  drawSprites();
 
}



