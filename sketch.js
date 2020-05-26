var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 300, 50, 50);
  movingRect = createSprite(400,100,100,40);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  movingRect.velocityY = 3;
  fixedRect.velocityY = -3;
}

function draw() {
  background(0);  

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 )
    {
      movingRect.velocityX = movingRect.velocityX*(-1);
      fixedRect.velocityX = fixedRect.velocityX*(-1);
    }
    
    
    if(fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2) {
     // fixedRect.shapeColor = "red";
     // movingRect.shapeColor = "red";
      movingRect.velocityY = movingRect.velocityY*(-1);
      fixedRect.velocityY = fixedRect.velocityY*(-1);

    }


  


  drawSprites();
}