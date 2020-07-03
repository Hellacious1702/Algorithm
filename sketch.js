var rect1 , rect2  , rect3 , rect4;

function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "green";
  
  rect2 = createSprite(500, 200, 50, 50);
  rect2.shapeColor = "green";
  
  rect3 = createSprite(200, 400, 50, 50);
  rect3.shapeColor = "green";
  rect3.velocityY = -2 ;
  
  rect4 = createSprite(200, 300, 50, 50);
  rect4.shapeColor = "green";
  rect4.velocityY = 2 ;
}

function draw() {
  background("black");  
  rect2.x = mouseX ;
  rect2.y = mouseY ;

  console.log(rect2.x - rect1.x) ;

  rect1.debug = true ;
  rect2.debug = true ;

  if(rect1.x - rect2.x <= rect1.width/2 + rect2.width/2 && rect2.x - rect1.x <= rect1.width/2 + rect2.width/2 && 
    rect1.y - rect2.y <= rect1.height/2 + rect2.height/2 && rect2.y - rect1.y <= rect1.height/2 + rect2.height/2 ){
    

      if(rect1.x - rect2.x <= rect1.width/2 + rect2.width/2 && rect2.x - rect1.x <= rect1.width/2 + rect2.width/2){
        rect1.shapeColor = "red";
        rect2.shapeColor = "red";
      }
      else{
        rect1.shapeColor = "yellow";
        rect2.shapeColor = "yellow";
      }

  }
  else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  if(rect3.y - rect4.y <= rect3.height/2 + rect4.height/2){
      rect3.velocityY = 2 ;
      rect4.velocityY = -2 ;
    }

    if(rect3.y > 400){
        rect3.velocityY = -2 ; 
    }

    if(rect4.y < 0){
      rect4.velocityY = 2 ; 
  }
  
    createEdgeSprites(); 
  
  drawSprites();
}