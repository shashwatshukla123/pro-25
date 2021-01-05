var ground,box1,box2,box3,ball1,dustbin1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground=createSprite(width/2, 668,1000,10);
	ground.shapeColor=color(230,230,0)

	box1=createSprite(700,650,200,20);
	box1.shapeColor=color(255)

	box2=createSprite(590,610,20,100);
	box2.shapeColor=color(255)

	box3=createSprite(790,610,20,100);
	box3.shapeColor=color(255) 

    dustbin1 = new dustbin(690,540);
 
	ball1=new ball(50,630,22)

	ground= Bodies.rectangle(width/2, 658, 1000, 10 , {isStatic:true});
	World.add(world,ground); 

	box1 = Bodies.rectangle(width/2, 648, width, 10 , {isStatic:true} );
	World.add(world, box1);

	box2 = Bodies.rectangle(width/2, 648, width, 10 , {isStatic:true} );
	World.add(world, box2);
	
	box3 = Bodies.rectangle(width/2, 648, width, 10 , {isStatic:true} );
	World.add(world, box3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball1.display();
  dustbin1.display();
  drawSprites();
 }

function keyPressed (){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
}
}