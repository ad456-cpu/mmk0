var gameState = "start"
var coin;
var coins;
var score;
var arrow;
var strikerImg,striker;
var coinImg;
var arrowImg;
var obstacleImg;
var obstacle;
var y;
var x;

//making a function for loading images and sounds
function preload(){
  //loading the striker image
  strikerImg = loadImage("bow.png")
  //loading the arrow image
 arrowImg = loadImage("arrow.png")
  //loading the obstacle image
  obstacleImg = loadImage("obstacle.png")
  //loading the coin image
  coinImg = loadImage("coin.jpg")
}
function setup() {
  createCanvas(750, 650);
  // creating the striker sprite
  striker = createSprite(360,560,10,10);
 // x=striker.position.x;
 // console.log(x);
  striker.addImage(strikerImg);
  striker.scale=0.3;
  striker.debug = true
  
  obstaclesGroup = new Group();
  coinsGroup = new Group();
  arrowsGroup = new Group();
  
  score = 0;
}

function draw() {
  background(' black');
  drawSprites();
  
  edges = createEdgeSprites();
  striker.bounceOff(edges)
  textSize(20)
  text("SCORE:"+ score, 50,100)
  textSize(20)
  text("Coins:"+ coin,100,200)
  
  if(gameState==="start"){
    if(keyDown("left")){
    striker.x= striker.x-10;
    }
    
    if(keyDown("right")){
        striker.x= striker.x+10;
      
    }
    
    if(keyDown("space")){
      arrows();
    }
}
  spawnObstacles();
  spawnCoins();
}

// making the function for obstacles to fall
function spawnObstacles(){
  if(frameCount%100===0){
    obstacle = createSprite(375,0,30,30);
    obstacle.x=Math.round(random(10,740))
    //console.log(obstacle.x);
    obstacle.velocityY=3;
    obstacle.addImage(obstacleImg);
    obstacle.scale=0.1;
    
  }
}

function spawnCoins(){
  if(frameCount%500===0){
    coin = createSprite(200,0,30,30);
    coin.x=Math.round(random(10,740))
    coin.velocityY=3;
    coin.addImage(coinImg);
    coin.scale=0.1;
    
  }
  
}

function arrows(){
  arrow = createSprite(striker.position.x,striker.position.y,30,10);
  arrow.velocityY= -1;
  arrow.addImage(arrowImg);
  arrow.lifetime=600;
  arrow.scale=0.2;
  arrowsGroup.add(arrow);
}