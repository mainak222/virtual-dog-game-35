var dog ;
var happyDog ; 
var database ; 
var foodS ;
var foodStock ; 
var dogImg1;
var dogImg;



function preload(){
  dogImg = loadImage("images/dogimg.png");
  dogImg1 = loadImage("images/dogimg1.png");

}
function setup(){
  database = firebase.database();
  createCanvas(1000,800);

foodStock = database.ref('Food');
foodStock.on("value",readStock);




  var canvas = createCanvas(500,500);
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

}
function draw(){
  background(46,139,87);
  //dog.display();
  //happyDog.display();
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(dogImg1);
  }
  drawSprites()
  textSize(15);
fill ("black");
stroke ("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);


}
function readStock(data){
  foodS= data.val()
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}
