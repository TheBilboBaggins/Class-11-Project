
function preload(){
  player = loadAnimation("Runner-1.png","Runner-2.png") //pre-load im
  path = loadImage("path.png")
}
var player,Player
var path
function setup(){
  createCanvas(400,400);
  Path = createSprite(200,200)
  Path.addImage(path)
  Path.velocityY=4
 
  
  Player = createSprite(200,350)
  Player.addAnimation("Player", player)
  Player.scale = 0.10
  
}

function draw() {
  background(0);
  drawSprites()
  Player.x = mouseX
  if(Path.y > 400){
    Path.y = 300
    
    
  }
}
