var  wall,bullet;
var thickness,weight,speed;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = "orange";

  wall = createSprite(1200, 200, thickness, 200);
  wall.shapeColor = "blue";
}

function draw() {
  background(180);  

  if(wall.x - bullet.x <=bullet.width/2+wall.width/2){
    bullet.velocityX = 0;

    var damage =  (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}