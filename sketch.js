var bg, bgimg;
var player,playerimg;
var boy,boyImg;
var coinG,coin,coinImg;
var coneG,cone,coneImg;
var bananaG,banana,bananaImg;

var score;
function preload(){
 bgimg = loadImage("newbg.png");
 boyImg = loadAnimation("ibri.png","2bri.png");
 coinImg = loadImage("Coin.png")
 coneImg = loadImage("Cone.png")
 bananaImg =  loadImage("Bannana.png")
}

function setup(){
createCanvas(1200,700);
bg=createSprite(600,350);
bg.addImage(bgimg);
bg.scale = 2.15;

boy = createSprite(300,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.25;

coinG=new Group();
coneG=new Group();
 bananaG=new Group();


 
score = 0;
stroke("red");
fill("red");
textSize(20);
}


function draw(){
    background(0);

bg.velocityY = 2;
//boy.x = World.mouseX;


if (keyDown("UP_ARROW") && boy.y>= 450 ) {
    boy.velocityY = -1
  }
  if (keyDown("RIGHT_ARROW")) {
      boy.x+=12;

    }
  if (keyDown("LEFT_ARROW")) {
      boy.x-=12;
  } 
  if (keyDown("SPACE")) {
    boy.velocityY = -12;
} 


edges= createEdgeSprites();
boy.collide(edges);

if(bg.y >400){
bg.y = bg.height/2;
}

if(coinG.isTouching(boy)){
    coinG[0].destroy();
    
    score = score+25;
  }

  
if(coneG.isTouching(boy)){
    coneG[0].destroy();
    
    score = score-20;
  }


    
if(bananaG.isTouching(boy)){
    bananaG[0].destroy();
    
    score = score-30;
  }
  
createCoin();
createCone();
createBanana();

    drawSprites();
    text("Score: " + score, 300, 50);

}

function createCoin() {
    if (World.frameCount % 200 == 0) {
    var coin = createSprite(Math.round(random(50, 350),40, 10, 10));
    coin.addImage(coinImg);
    coin.scale=0.35;
    coin.velocityY = 3;
    coin.lifetime = 150;
    coinG.add(coin);
    }
  }
  

  function createCone() {
    if (World.frameCount % 400 == 0) {
    var cone = createSprite(Math.round(random(50, 1200),40, 10, 10));
    cone.addImage(coneImg);
    cone.scale=1;
    cone.velocityY = 3;
    cone.lifetime = 150;
    coneG.add(cone);
    }
  }


  function createBanana() {
    if (World.frameCount % 225 == 0) {
    var banana = createSprite(Math.round(random(50, 1200),40, 10, 10));
    banana.addImage(bananaImg);
    banana.scale=1;
    banana.velocityY = 3;
    banana.lifetime = 150;
    bananaG.add(banana);
    }
  }