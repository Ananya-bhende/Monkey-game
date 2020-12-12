
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadAnimation("banana.png");
  obstaceImage = loadAnimation("obstacle.png");
 
}

function setup() {
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocity = -4;
  ground.x = ground.width/2;
  
  var survivalTime = 0;
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);
  
  //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();

}


function draw() {
  background(225);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.VelocityY+ 0.8;
  
  monkey.collide(ground);
  
  function Banana(){
  if(World.frameCount%80===0){
    position = Math.round(random(1,2));
    Banana=createSprite(400,200,20,20);
    console.log(position)
    
     //using random variable change the position of fruit, to make it more challenging
    
    if(position==1)
    {
    fruit.x=400;
    fruit.velocityX=-(7+(score/4));
    }
    else
    {
      if(position==2){
      fruit.x=0;
      
  //Increase the velocity of Banana after score 4 or 10
      Banana.velocityX= (7+(score/4));
      }
    }
    
    Banana.scale=0.2;
    
     Banana.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
       Banana.addImage(banana.png);
    } else if (r == 2) {
      fruit.addImage(banana.png);
    } else if (r == 3) {
      fruit.addImage(banana.png);
      
       //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
     }
      
       //add gravity
         monkey.velocityY = monkey.velocityY + 0.8
      
      //spawn obstacles on the ground
        spawnObstacles();
    
      if(obstaclesGroup.isTouching(monkey)){
        //monkey.velocityY = -12;
        gameState = END;
      }      
  
  
  drawSprites();
}











