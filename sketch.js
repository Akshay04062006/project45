var spaceShip;
var spaceShipImage;
var bg,bgImage;
var astronaut,astronautImage,astronautGroup;
   

function preload(){
    spaceShipImage=loadImage("./spaceship.png")
    bgImage=loadImage("./spaceBG.jpg")
    astronautImage=loadImage("./Astronaut.png")
   
}

function setup(){
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(width/2,height/2,width,height);
  bg.addImage(bgImage);
  bg.velocityY=4

  spaceShip=createSprite(width/2,height-200);
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale=0.5
  

  astronautGroup=new Group()
  

   

  
}

function draw() {
  if (bg.y>height){
    bg.y=height/2
  }

  if (keyDown("left")&& spaceShip.x>0){
    spaceShip.x-=15

  }

  if (keyDown("right")&& spaceShip.x<width){
    spaceShip.x+=15

  }

  

  spawnAstronaut()
  
  drawSprites()
  
 
}


function spawnAstronaut(){
    var randomFrames=Math.round(random(100,200));
    if (frameCount%randomFrames==0){ 
        astronaut=createSprite(random(100,width-100),-50)
        astronaut.addImage(astronautImage)
        astronaut.velocityY=2;
        astronaut.lifetime=height/2
        astronaut.scale=0.2;
        astronautGroup.add(astronaut)
    }
    
}



