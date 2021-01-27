var runner;
var runnerImg;
var background;
var backgrondImg;

function preload(){

    runnerImg = loadImage("dead runner.png");
    backgroundImg = loadImage("background.jpg.jpg");
}

function setup() {
    createCanvas(400,400);

 var background = createSprite(100,200,20,200);
 background.addImage("background",backgroundImg)
 background.scale = 0.15;


 var runner = createSprite(200,200,10,20);
 runner.addImage("runner",runnerImg);
 runner.scale = 0.05;

 //background.velocityX = 3;

  
 // runner.y = World.mouseY;

  
   
 
 
}

function draw() {
background("white");
  if (background.x < 0){
    background.x = background.width/2;
  }

  if(keyDown(LEFT_ARROW)){
    runner.x = -3;
  
}

if(keyDown(RIGHT_ARROW)){
   runner.x = +3;
}
 drawSprites();
}