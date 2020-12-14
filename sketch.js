var player;
var energyLevel = 0;
var boundary,boundary1,boundary2;
var apple, banana, coconut,soda,chips;
var applesGroup, appleImg;
var bananasGroup, bananaImg;
var coconutsGroup, coconutImg;
var sodaGroup, sodaImg;
var chipsGroup, chipsImg;
var playerImg1,playerImg2,playerImg3;
var cart, cartImg;
var blackBoy;
var tiles;
var back;
var turns = 0;
const START = 0;
const PLAY = 1;
const END = 2;
var distance = 0;
var button1, button2, button3, button4;
var gameState = START;
var restartImg;       
function preload() {
    appleImg = loadImage("apple.png");
    bananaImg = loadImage("banana.png");
    coconutImg = loadImage("coconut.png");
    sodaImg = loadImage("soda.png");
    chipsImg = loadImage("chips.png");
    playerImg1 = loadImage("boy.png");
    playerImg2 = loadImage("girlPlayer.jpg");
    playerImg3 = loadImage("robot.jpg");
    cartImg = loadImage("cart.png");
    blackBoy = loadAnimation("cart.png","robot.jpg");
    back = loadImage("tile3.jpg");
    restartImg = loadImage("restart.png")
}
function setup(){
    createCanvas(500,4000);
    player = createSprite(250,3900,10,20);
    boundary = createSprite(5,2000,10,4000);
    boundary1 = createSprite(495,2000,10,4000);
    boundary2 = createSprite(250,5,500,10);
    cart = createSprite(random(50,450),random(2000, 3800),50,50);
    cart.addImage(cartImg);
    cart.scale = 0.2;
    applesGroup = new Group();
    bananasGroup = new Group();
    coconutsGroup = new Group();
    sodaGroup = new Group();
    chipsGroup = new Group();
    boundaryGroup = new Group();
    //setup ends
    }
    
function draw(){

   background(0,0,0);
   
    if (gameState === START){
        if(mousePressedOver(button1)){
            player.addImage(playerImg1);
            gameState = PLAY;
           button1.shapeColor = color(0,0,0);
        }  if(mousePressedOver(button2)){
            player.addImage(playerImg2);
            gameState = PLAY;
            
        } if(mousePressedOver(button3)){
            player.addImage(playerImg3);
            gameState = PLAY;
           // button1.changeAnimate("boy",blackBoy);

        }
    }
   
    
 
    
        
  if (gameState === START){
      
    button1 = createSprite(200,200,50,50);
    button1.addImage(playerImg1);
    button1.addAnimation("boy",blackBoy)
     button2 = createSprite(200,300,50,50);
    button2.addImage(playerImg2);
 button3 = createSprite(200,400,50,50);
    button3.addImage(playerImg3);
  }
  else if(gameState === PLAY && turns === 0){
        button1.remove();
        button2.remove();
        button3.remove();

        if(player.y < 60){
            button4 = createSprite(200,200,50,50);
            button4.addImage(restartImg);
            gameState = END;
        }
        if(keyWentDown(LEFT_ARROW)){
            player.velocityX = -8;
        }
        if(keyWentUp(LEFT_ARROW)){
            player.velocityX = 0;
        }
        if(keyWentDown(RIGHT_ARROW)){
            player.velocityX = 8;
        }
        if(keyWentUp(RIGHT_ARROW)){
            player.velocityX = 0;
        }
        player.collide(boundary);
        player.collide(boundary1);
        player.collide(boundary2);
  
    textSize(30);
    


    for(var i =  0; i < 20; i++){
        apple = createSprite(random(50,450),random(100,3900),10,10);
        apple.addImage(appleImg);
        applesGroup.add(apple); 
    }
    for(var i =  0; i < 10; i++){
       banana = createSprite(random(50,450),random(100,3900),10,30);
       banana.addImage(bananaImg);
       banana.scale = 0.2;
       bananasGroup.add(banana); 
    }
    for(var i =  0; i < 7; i++){
        coconut = createSprite(random(50,450),random(100,3900),30,30);
        coconut.addImage(coconutImg);
        coconut.scale = 0.2;
        coconutsGroup.add(coconut); 
    }
    for(var i =  0; i < 10; i++){
        soda = createSprite(random(50,450),random(100,3900),30,50);
        soda.addImage(sodaImg);
        soda.scale = 0.2;
        sodaGroup.add(soda); 
    }
    for(var i =  0; i < 5; i++){
        chips = createSprite(random(50,450),random(100,3900),30,50);
        chips.addImage(chipsImg);
        chips.scale = 0.2;
        chipsGroup.add(chips); 
    }
    
    for (var i = 0; i < applesGroup.length; i++) 
     { 
        if (applesGroup.get(i).isTouching(player)||applesGroup.get(i).isTouching(cart)) {
            applesGroup.get(i).destroy(); 
            energyLevel = energyLevel+1;
        } 
       
    }
    for (var i = 0; i < bananasGroup.length; i++) 
     { 
        if (bananasGroup.get(i).isTouching(player)||bananasGroup.get(i).isTouching(cart)) {
            bananasGroup.get(i).destroy(); 
            energyLevel = energyLevel+3;
        }
         i
        
    }
    for (var i = 0; i < coconutsGroup.length; i++) 
     { 
        if (coconutsGroup.get(i).isTouching(player)|| coconutsGroup.get(i).isTouching(cart)) {
            coconutsGroup.get(i).destroy(); 
            energyLevel = energyLevel+10;
        }
         
    }
    for (var i = 0; i < sodaGroup.length; i++) 
    { 
       if (sodaGroup.get(i).isTouching(player) || sodaGroup.get(i).isTouching(cart) ) {
          sodaGroup.get(i).destroy(); 
           energyLevel = energyLevel-5;
       } 
    
   }
   for (var i = 0; i < chipsGroup.length; i++) 
   { 
      if (chipsGroup.get(i).isTouching(player) || chipsGroup.get(i).isTouching(cart)) {
         chipsGroup.get(i).destroy(); 
          energyLevel = energyLevel -15;
      } 
  }

    if(player.y < 60){
        text("FINISH",200,50)
        player.velocityY = 0;
        gameState = END;
        applesGroup.destroyEach();
         bananassGroup.destroyEach();
         coconutsGroup.destroyEach();
         chipsGroup.destroyEach();
         sodaGroup.destroyEach();
    }  

    player.velocityY = -8;

 cart.collide(boundary);
 cart.collide(boundary1);
 cart.collide(boundary2);

 if(cart.isTouching(player)){
    cart.velocityY = -5;
 } 

 turns = turns + 1;
}
else if (gameState === END){
    if(mousePressedOver(button4)){
        gameState = START;
      button1.remove();
        button2.remove();
        button3.remove();
    
        console.log("Works!!");
         }
}


    drawSprites();
   
    fill("blue");
    text("Energy Level: " + energyLevel, 200, 100);
    
}

