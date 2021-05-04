var fixedRect,mmovingRect;
function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(600, 200, 50, 80);
 fixedRect.shapeColor="yellow";
 fixedRect.debug=true;

 movingRect=createSprite(400,400,80,50);
 movingRect.shapeColor='yellow';
movingRect.debug=true

}

function draw() {
  background(blue);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect-fixedRect.y<fixedRect.height/2+movingRect.height/2){
      fixedRect.shapeColor="red";
      movingRect.shapeColor="red";
    }
else {
  fixedRect.shapeColor="yellow";
  movingRect.shapeColor="yellow";
}

  drawSprites();
}