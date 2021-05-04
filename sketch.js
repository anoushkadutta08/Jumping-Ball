var canvas;
var music;
var surface1, surface2,surface3,surface4;
var box
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(0,580,360,30)
    surface1.shapeColor="Blue"
    surface2=createSprite(290,580,200,30)
    surface2.shapeColor="Red"
    surface3=createSprite(510,580,200,30)
    surface3.shapeColor="Yellow"
    surface4=createSprite(750,580,220,30)
    surface4.shapeColor="Green"


    //create box sprite and give velocity
    box=createSprite(400,300,50,50)
    box.velocityX=4
    box.velocityY=6
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites()
    box.bounceOff(edges)

    if (surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor="Blue"
        music.play();
    }

    if (surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor="Red"
        music.play();
        box.velocityX=0
        box.velocityY=0
    }

    if (surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor="Yellow"
        music.play();
    }

    if (surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor="Green"
        music.play();
    }




    //add condition to check if box touching surface and make it box
    drawSprites();
}
