var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottom = createSprite(400, 650, 100, 20);
	bottom.shapeColor = ("red");

	rightWall = createSprite(350, 610, 20, 100);
	rightWall.shapeColor = ("red");

	leftWall = createSprite(450, 610, 20, 100);
	leftWall.shapeColor = ("red");


	engine = Engine.create();
	world = engine.world;

	packageBody_options = {
		restitution : 1
	}

	packageBody = Bodies.circle(width/2 , 200 , 5, packageBody_options);
	World.add(world, packageBody);

	Matter.Body.setStatic(packageBody,true);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	bottomBody = Bodies.rectangle(bottom.position.x, bottom.position.y, 100, 20, {isStatic:true})
	World.add(world, bottomBody);

	leftBody = Bodies.rectangle(leftWall.position.x, leftWall.position.y, 20, 100, {isStatic:true})
	World.add(world, leftBody);

	rightBody = Bodies.rectangle(rightWall.position.x, rightWall.position.y, 20, 100, {isStatic:true})
	World.add(world, rightBody);

	Engine.run(engine);
  
}



function draw() {
	Engine.update(engine);
  	rectMode(CENTER);
	background(0);
	  
  	packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y

	bottom.x = bottomBody.position.x
	bottom.y = bottomBody.position.y

	leftWall.x = leftBody.position.x
	leftWall.y = leftBody.position.y

	rightWall.x = rightBody.position.x
	rightWall.y = rightBody.position.y

	keyPressed();   
  	drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
  }
}
