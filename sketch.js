var wall,car;
function setup() {
  createCanvas(800,400);
  wall= createSprite(200, 200, 50, 80);
  car= createSprite(400, 200, 80, 30);

}

function draw() {
  background(255,255,255);  
  car.x=World.mouseX;
  car.y=World.mouseY;
  console.log(car.x-wall.x)
if(car.x-wall.x<wall.width/2+car.width/2
   &&car.y-wall.y<wall.height/2+car.width/2
   &&wall.x-car.x<car.width/2+wall.width/2
   &&wall.y-car.y<car.height/2+wall.width/2)
  {car.shapeColor="red";
  wall.shapeColor="red";
}
else{car.shapeColor="green";
walll.shapeColor="green";


}
  drawSprites();
}
