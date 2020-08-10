var packageSprite,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	packageIMG=loadImage("paperball.png")
	dustbinIMG=loadImage("dustbingreen (1).png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paperSprite=createSprite(width/2, 80, 10,10);
	paperSprite.addImage(packageIMG);
	paperSprite.scale=0.2;
	paperBody = Bodies.circle(420 , 200 , 5 , {isStatic:true});
	World.add(world, paperBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	dustbinSprite=createSprite(width/2,630,10,10);
	dustbinSprite.addImage(dustbinIMG);
	dustbinSprite.scale=0.4;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperSprite.display();
  groundSprite.display();
  dustbinSprite.display();

  
  drawSprites();
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(paperBody,false);
}
}
