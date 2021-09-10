var PLAY=1
var END=0
gamestate=PLAY

var pl,st,plus,stone;


var kid,sayen,mui,ground,ball
var groundImg,kidI,si,mi,b
function preload(){
groundImg=loadImage("background.png")
kidI=loadAnimation("goku.png")
si=loadAnimation("ssj1.png")
mi=loadAnimation("ultra.png")
b=loadImage("ball.png")
pl=loadImage("plus.png")
st=loadAnimation("stone.png")
}

function setup() {
    createCanvas(1000,600)
    ground=createSprite(200,200);
    ground.addImage(groundImg);
    ground.scale=1.25

 kid=createSprite(140,200) ;
 kid.addAnimation("flying",kidI) ;
 kid.scale=0.7 ;
kid.debug=true;
kid.setCollider("circle",-100,0,50);

ballg=new Group();
pg=new Group();
sg=new Group();



    }

function draw() {
background("0")

if(gamestate === PLAY){


kid.y=World.mouseY

createEnergy()
createplus()
createstone()


if (pg.isTouching(kid)){

 kid.addAnimation("running",si);
 kid.changeAnimation("running");
kid.scale=0.5;

}

if (sg.isTouching(kid)){

    kid.addAnimation("walking",mi);
    kid.changeAnimation("walking");
   kid.scale=0.5;
   
   }


if (ballg.isTouching(kid)){
  
   gamestate=END
   
   }

else if(gamestate===END){
ballg.destroyEach()
pg.destroyEach()
kid.setVelocityYEach=0

}





}


















drawSprites()


}


function createEnergy(){

    if (World.frameCount % 100000 == 0) {
        var ball = createSprite(600,Math.round(random(0, 600)));
        ball.addImage(b);
        ball.scale=0.5;
        ball.velocityX =-6;
        ball.lifetime = 800;
        ballg.add(ball);
        }
}


function createplus(){

    if (World.frameCount % 700 == 0) {
        var plus = createSprite(600,Math.round(random(0, 600)));
        plus.addImage(pl);
        plus.scale=0.2;
        plus.velocityX =-6;
        plus.lifetime = 85;
        pg.add(plus);
        }
}

function createstone(){

    if (World.frameCount % 2000 == 0) {
        var stone = createSprite(600,Math.round(random(0, 600)));
        stone.addImage(st);
        stone.scale=0.5;
        stone.velocityX =-6;
    stone.lifetime = 85;
        ballg.add(stone);
        }
}


