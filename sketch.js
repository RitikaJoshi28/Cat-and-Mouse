
var tom,tom_tom,tomImg;
var jerry,jerry_jerry,jerryImg;
function preload() {
    //load the images here
    
    tom_tom=loadImage("images/cat1.png");
    jerry_jerry=loadImage("images/mouse1.png");
    jerryImg=loadAnimation("images/car2.png","images/car3.png");
    tomImg=loadAnimation=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(450,400,20,20);
    tom.velocityX=-3;
    tom.addImage("cat",tom_tom);
    
    jerry=createSprite(550,400,20,20);
    jerry.addImage("mouse",jerry_jerry);
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(cat.width-jerry.width)/2)
    {
        tom.velocityX=0;
        jerry.velocityX=0;
    }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW)
  {
      jerry.addAnimation("mouseTeasing",mouseImg);
      jerry.changeAnimation("mouseTeasing");
      jerry.frameDelay=25;
      tom.addAniamtion("catRunning",catImg);
      tom.changeAnimation("catRunning");
      tom.frameDelay=25;
  }
  if(keyCode===RIGHT_ARROW)
  {
      jerry.addAnimation("mouseTeasing",mouseImg);
      jerry.changeAnimation("mouseTeasing");
      jerry.frameDelay=25;
      tom.addAniamtion("catRunning",catImg);
      tom.changeAnimation("catRunning");
      tom.frameDelay=25;
  }
  }


