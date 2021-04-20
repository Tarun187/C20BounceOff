var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 80, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800, 100, 40);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=-5
  fixedRect.velocityY=5
}

function draw() {
  background(0);  
 

  if(fixedRect.y - movingRect.y <=  movingRect.height/2 + fixedRect.height/2&&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2){
    fixedRect.velocityY=fixedRect.velocityY*-1
    movingRect.velocityY=movingRect.velocityY*-1
  }
  
  if( movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2){
    fixedRect.velocityX=fixedRect.velocityX*-1
    movingRect.velocityX=movingRect.velocityX*-1
  }
 





  drawSprites();
}