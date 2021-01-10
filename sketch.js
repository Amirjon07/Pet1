//Create variables here
var saddog, happydog
var dog,foodS,foodstock,database
function preload()
{ saddog=loadImage("images/dogImg.png")
 happydog=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(saddog)
  dog.scale=0.5
  foodstock=database.ref('food')
  foodstock.on("value",readstock)
  

}


function draw() {  
background("blue")
if(keyWentDown(UP_ARROW)){
  writestock(foodS)
  dog.addImage(happydog)
}
  drawSprites();
  //add styles here
textSize(20)
text("Press Up arrow to feed the dog",130,10,300,20)
text("Food Remaing"+foodS,170,200)
}

function readstock(data){
foodS=data.val()


}
function writestock(x){
  if(x<=0){
    x=0
  }
else{
  x=x-1
}
database.ref('/').update({
food:x})
}


