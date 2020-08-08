var mr, fr;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50); 
  mr.shapeColor = "blue";
  fr = createSprite(600,200,50,50);
  fr.shapeColor = "blue";
  mr.debug = true;
  fr.debug = true;
  mr.velocityX = 5;
  fr.velocityX = -5;
}

function draw() {
  background(255,255,255);  
  if((fr.x - mr.x < fr.width /2 + mr.width/2) 
  && (mr.x - fr.x < fr.width /2 + mr.width/2 )){
    mr.velocityX = mr.velocityX*(-1);
    fr.velocityX = fr.velocityX*(-1);
  }
  if((fr.y - mr.y< fr.width /2 + mr.width/2) 
  && (mr.y - fr.y < fr.width /2 + mr.width/2 )){
    mr.velocityY = mr.velocityY*(-1);
    fr.velocityY = fr.velocityY*(-1);
  }
  drawSprites();
}