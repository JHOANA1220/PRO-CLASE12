var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png");
  //loadAnimation de boy (niño)
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino)
 path = createSprite(200,150,20,50);
//agregar imagen de path
 path.addImage("path",pathImg);
path.scale=2;

//crear sprite de boy (niño)
boy = createSprite(200,250,20,50)
//agregar animación para boy
boy.addAnimation("boy",boyImg);
boy.scale=0.9;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false;
}

function draw() {
  background("blue");
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
