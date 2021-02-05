
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ; 

var roof1;
var back,backImage;
var bob1,bob2,bob3,bob4,bob5,bob6;
var havana, havanaSound;
function preload()
{
backImage = loadImage("Picture1.gif.png");
//havanaSound = loadSound("havana.mp3");
}

function setup() {
	createCanvas(781, 512);

    

    back = createSprite(390,288);
	back.addImage(backImage);
	back.scale = 1.3

	engine = Engine.create();
	world = engine.world;

	roof1 = new roof(400,40);

	bob1 = new bob(245,300,60);
	rope1 = new rope(bob1.body,roof1.body,-80*2,0);

	bob2 = new bob(300,300,60);
	rope2 = new rope(bob2.body,roof1.body,-50*2,0);

	bob3 = new bob(345,300,60);
	rope3 = new rope(bob3.body,roof1.body,-20*2,0);

	bob4 = new bob(409,300,60);
	rope4 = new rope(bob4.body,roof1.body,10*2,0);

	bob5 = new bob(445,300,60);
	rope5 = new rope(bob5.body,roof1.body,40*2,0);

	bob6 = new bob(500,300,60);
	rope6 = new rope(bob6.body,roof1.body,70*2,0);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //havanaSound.play();
  
  drawSprites();

  roof1.display();

  bob1.display();
  rope1.display();

  bob2.display();
  rope2.display();

  bob3.display();
  rope3.display();

  bob4.display();
  rope4.display();

  bob5.display();
  rope5.display();

  bob6.display();
  rope6.display();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-250,y:-250}); } 
} 
