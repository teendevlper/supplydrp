const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ball_options;
var helIMG,helicopter,ground,ball,supIMG,sup,sup_opt;
var ball_options;
function preload(){
 helIMG = loadImage("helicopter2.png");
 supIMG = loadImage("pixil-frame-0 (5).png");
}
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options ={
        isStatic: true
    }
   ball_options ={
        isStatic: false,
        restitution : 0.8
    }
    var sup_opt = {
        restitution : 0.5
    }
    
    helicopter = createSprite(-200,100,10,10);
    helicopter.addImage(helIMG,"helicopter2.png");
    helicopter.velocityX = 3;
    helicopter.scale = 0.5;
    
    sup = createSprite(-140,150,10,10);
    sup.addImage(supIMG,"pixil-frame-0 (5).png");
    
    sup.scale = 2;
    
    ball = Bodies.circle(200,200,10,ball_options);
    World.add(world,ball);
    
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    
    World.add(world,ground);
   
  
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
 //  ball.position.x = helicopter.x;
   // ball.position.y = helicopter.y;

    sup.x = ball.position.x;
    sup.y = ball.position.y;

    if(helicopter.x >= 530 ){
        helicopter.x = -200;
       
    }
     
    if(helicopter.x >=20){
        
    }
    if(keyDown("DOWN_ARROW")){
      //  ball.position.x =      
        ball.isStatic = true;
    }
    
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,30,30);
    
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

 drawSprites();
 console.log(ball.position.x);
}