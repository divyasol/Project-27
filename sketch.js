var car,wall,car2,wall2,car3,car4,car5;
var weight,speed,thickness;

function setup() {
  createCanvas(1600,900);
  createSprite(400, 200, 50, 50);
  car = createSprite(50,200,50,10);
  car2 = createSprite(50,300,50,10);
  car3 = createSprite(50,400,50,10);
  car4 = createSprite(50,500,50,10);
  car5 = createSprite(50,600,50,10);
  wall = createSprite(1500,200,60,50);
  wall2 = createSprite(1500,300,60,50);
  wall3 = createSprite(1500,400,60,50);
  wall4 = createSprite(1500,500,60,50);
  wall5 = createSprite(1500,600,60,50);
  
  speed = random(55,90);
  weight = random(400,1500);
  wall.thickness = random(23,28);

  
}

function draw() {
  background(0);  

  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;
  car5.velocityX = speed;
  
  if(wall.x-car.x < (car.width+wall.width)){
    car.velocityX = 0;
    var deformation=0.5*width*speed*speed/22509;
  if(deformation>180)
  {
    car.shapeColor = color(255,0,0);
  }
  if(deformation<180&&deformation>100)
  {
    car.shapeColor = color(230,230,0);
  }
  if(deformation<100)
  {
    car.shapeColor = color(0,250,0);
  }
}

if(wall.x-car2.x < (car2.width+wall.width)){
  car2.velocityX = 0;
  var deformation=0.5*width*speed*speed/22509;
if(deformation>180)
{
  car2.shapeColor = color(255,0,0);
}
if(deformation<180&&deformation>100)
{
  car2.shapeColor = color(230,230,0);
}
if(deformation<100)
{
  car2.shapeColor = color(0,250,0);
}
}

if(wall.x-car3.x < (car3.width+wall.width)){
  car3.velocityX = 0;
  var deformation=0.5*width*speed*speed/22509;
if(deformation>180)
{
  car3.shapeColor = color(255,0,0);
}
if(deformation<180&&deformation>100)
{
  car3.shapeColor = color(230,230,0);
}
if(deformation<100)
{
  car3.shapeColor = color(0,250,0);
}
}

if(wall.x-car4.x < (car4.width+wall.width)){
  car4.velocityX = 0;
  var deformation=0.5*width*speed*speed/22509;
if(deformation>180)
{
  car4.shapeColor = color(255,0,0);
}
if(deformation<180&&deformation>100)
{
  car4.shapeColor = color(230,230,0);
}
if(deformation<100)
{
  car4.shapeColor = color(0,250,0);
}
}

if(wall.x-car5.x < (car5.width+wall.width)){
  car5.velocityX = 0;
  var deformation=0.5*width*speed*speed/22509;
if(deformation>180)
{
  car5.shapeColor = color(255,0,0);
}
if(deformation<180&&deformation>100)
{
  car5.shapeColor = color(230,230,0);
}
if(deformation<100)
{
  car5.shapeColor = color(0,250,0);
}
}

  drawSprites();
}