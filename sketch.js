var dog, dogImg, dogImg1;
var food, database

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  
  database = firebase.database();
  var food = database.ref("dog/food");
  food.on("value", readStock, showError);
  
  dog = createSprite(500,550,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

}


function draw() {  

  background(46, 138, 87); 

 
 if(keyDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(dogImg1);
}

  drawSprites();

  stroke("white");
  textSize(35);
    fill("white");
    text("Note: press UP_ARROW Key to feed Drago milk ",30,50)

}
function writeStock(x,y) {
  if(x<=0) {
    x=0;
  }
  else{
    x=x+1;
  }
  }


function readStock(data) {
  food = data.val();
  
}

function showError(error) {
  console.log(error);
}

