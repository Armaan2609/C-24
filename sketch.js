
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var side1,side2,side3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:false,
		restitution:0.3,
		frition:0.5,
		density:1.2
	}

	//Create the Bodies Here.
	ground1= new Ground(500,650,1000,20);
	paper1 = new Paper(100, 300, 20);

	
side1=createSprite(790,630,200,20);
side1.shapeColor="white"
side2=createSprite(690,540,20,200);
side2.shapeColor="white"
side3=createSprite(890,540,20,200);
side3.shapeColor="white"

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display();
  drawSprites();
 
}


function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{
			x:65,y:-65
		});
	}
}



