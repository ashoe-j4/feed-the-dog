var dog,sadDog,happyDog;
var feedButton, foodButton
var foodObj

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed=createButton("Feed your pet!")
  feed.position(700,95);
  feed.mousePressed(feedDog);

  feed=createButton("Add more food!")
  feed.position(700,95);
  feed.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  drawSprites();
  display()
}

  function feedDog(){
    dog.addImage(happyDog);
    if(foodObj.getFoodStock()<= 0){
      foodObj.updateFoodStock(foodObj.getFoodStock()*0)
    }else{
      foodObj.updateFoodStock(foodObj.getFoodStock()-1)
    }
  }

  function addFoods(){
    foodS++;
    database.ref('/').update({
      Food:foodS
    })
  }

  function display(){
    var x = 80, y = 100;

    imageMode(CENTER);
    image(this.image,720,220,70,70);

    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
        if(i%10==0){
        x=80;
        y=y+50;
        }
        image(this.image,x,y,50,50);
        x=x+30
      }
    }
    }
