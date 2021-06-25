var ship, shipan;
var sea, seaim;
function preload(){
shipan= loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaim=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  sea=createSprite (200, 200, 10, 10);
 sea.scale=0.25;
  ship=createSprite (200, 200, 10, 10);
  sea.addImage("seas",seaim);
  sea.velocityX=-5;
  sea.x=sea.width/2;
  sea.y=sea.height/2;
  ship.addAnimation("ships", shipan);
  ship.scale=0.3;
}

function draw() {
  background("blue");
 if(sea.x < 0){
   sea.x=sea.width/2;
 }

  drawSprites();
}