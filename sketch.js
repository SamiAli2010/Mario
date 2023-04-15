var marioImg,mario
var path,pathImg
var coin,coinImg
var goomba,goombaImg
var star,starImg
var shell,shellImg
var Mario_Music
var coinsGroup
var score=0
function preload(){
marioImg=loadAnimation("mario1.png","mario2.png","mario3.png")
pathImg=loadImage("mario_bg.png")
starImg=loadImage("star.png")
goombaImg=loadAnimation("goomba.gif")
coinImg=loadAnimation("coin.gif")
shellImg=loadAnimation("shell.gif")
Mario_Music=loadSound("./download/Mario_Music.mp3")
coinsGroup=new Group()
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 path=createSprite(100,150);
 path.addImage(pathImg);
 path.velocityX = -5;
 mario=createSprite(100,620)
 mario.addAnimation("running",marioImg)
 mario.scale=0.3
 mario.x=250

 ground=createSprite(100,680,1500,10)
 ground.visible=false
 
}

function draw() {
background(0);
//Mario_Music.play();  
drawSprites();
text("score:"+score,600,200)
if(path.x < 0 ){
    path.x = width/2;
  }
  if(keyDown("SPACE")&&mario.y>=500){
mario.velocityY=-16                 
  }
  mario.velocityY=mario.velocityY+0.5
  mario.collide(ground)
  if(mario.isTouching(coinsGroup)){
    coinsGroup[0].destroy()
  }
spawnStars()
spawnCoins()
spawnGroundCoins()
spawnGoomba()
spawnShell()
}
function spawnStars(){
  if(frameCount%500===0){


  star=createSprite(450,300,40,10)
  star.addImage(starImg)
  //star.x=250
  star.scale=0.1
  star.velocityX=-3
  }
}

function spawnCoins(){
  if(frameCount%100===0){


  coins=createSprite(600,400,40,10)
  coins.addAnimation("coin",coinImg)
  coinsGroup.add(coins)
  coins.scale=0.3
  coins.velocityX=-3
  coins.lifetime=500
  }
}

function spawnGroundCoins(){
  if(frameCount%250===0){


    Groundcoins=createSprite(600,600,40,10)
    Groundcoins.addAnimation("Groundcoin",coinImg)

    Groundcoins.scale=0.2
    Groundcoins.velocityX=-3
    Groundcoins.lifetime=500
    }
  }

  function spawnGoomba(){
    if(frameCount%300===0){
  
  
      Goomba=createSprite(650,640,40,10)
      Goomba.addAnimation("Goomba",goombaImg)
      Goomba.scale=0.2
      Goomba.velocityX=-5
      Goomba.lifetime=500
      }
    }
  
    function spawnShell(){
      if(frameCount%550===0){
    
    
        shell=createSprite(650,640,40,10)
        shell.addAnimation("Shell",shellImg)
        shell.scale=0.15
        shell.velocityX=-30
        shell.lifetime=500
        }
      }
      