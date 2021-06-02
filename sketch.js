  const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;

var snow = [];

var bg,bgImg;
var engine,world

function preload()
 {
    
    bgImg   = loadImage("snow2.jpg");
 }

function setup()
 {

  createCanvas(800,400);
  engine = Engine.create();
  
  world = engine.world;


   bg = createSprite(400,200,800,400)
   bg.addImage(bgImg)
 
  
}

function draw() {
  

  Engine.update(engine)

  if(frameCount % 10 === 0){
   particle = new Snow(random(0,800),0,10);
   snow.push(particle);
  }

  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }

  drawSprites();
}