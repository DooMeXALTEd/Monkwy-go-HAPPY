
var monkey , monkey_running, ground, banana;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  
monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
 background("white");
  
  if(keyDown("space") && monkey.Y>10 ){
      monkey.velocityY = -12;
  }

 monkey.velocityY = monkey.velocityY + 0.8;

 survivalTime = Math.ceil(frameCount/frameRate());  
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1)
    bananaGroup.setLifetimeEach(-1);
    monkey.velocityY = 0;
    ground.velocityX = 0;
  }
   
  
  
  ground.velocityX = -4;
  
  if (ground.x<0){
    ground.x = ground.width / 2;
  
  }
  if (keyDown("space")){
    monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
    
  spawnObstacle();
  spawnBanana();
  drawSprites();
}
function spawnBanana(){
  if(frameCount % 80===0){
    banana = createSprite(400,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}
  
  function spawnObstacle(){
  if(frameCount % 200===0){
    obstacle = createSprite(400,310,40,10);
  
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
  }
  
  
  
  
  
  
  
  
  
  
  






