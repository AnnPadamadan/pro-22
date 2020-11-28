var helicopterImg, heli;
var packageSprite, packageImg;
var packageBody,ground;
var db1, db2, db3;
var db1s, db2s, db3s;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
helicopterImg = loadImage("helicopter.png");
packageImg = loadImage("package.png");
}


function setup() {
	createCanvas(800, 700);

	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2, 80 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageImg);
	packageSprite.scale = 0.1;

	heli = createSprite(width/2, 80, 10, 10);
	heli.addImage(helicopterImg);
	heli.scale = 0.5;

	
	
	db1s=createSprite(200, 650, 20, 100);
	db1s.shapeColor = "red";
	db2s=createSprite(400,600, 200,20);
	db2s.shapeColor = "red";
	db3s=createSprite(200, 650, 20, 100);
	db3s.shapeColor = "red";
	


	db1 = Bodies.rectangle(500, 560, 20, 100,{isStatic:true});
	World.add(world, db1);
	db2 = Bodies.rectangle(400,600, 200, 20,{isStatic:true});
	World.add(world, db2);
	db3 = Bodies.rectangle(300, 560,20, 100,{isStatic:true});
	World.add(world, db3);
	

	

	
	
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	text(mouseX+" "+mouseY, mouseX, mouseY);

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  db1s.x= db1.position.x
  db2s.x= db2.position.x
  db3s.x= db3.position.x
  db1s.y= db1.position.y
  db2s.y= db2.position.y
  db3s.y= db3.position.y
keyPressed()
  drawSprites();
 
  
 
}

function keyPressed(){
	if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(packageBody, false);
}
}





