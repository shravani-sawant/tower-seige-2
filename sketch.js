const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, stand1, stand2
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var box17, box18, box19, box20, box21, box22, box23, box24, box25
var polygon, polygonImg
var slingshot

function preload(){

    polygonImg = loadImage("polygon.png");
}

function setup(){ 
    createCanvas(800, 600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground (400,580,1000,20)
    stand1 = new Ground (590, 250, 220, 20)
    stand2 = new Ground (315, 450, 250 ,20)

    box1 = new Box (225,425,30,30)
    box2 = new Box1 (255, 425,30,30)
    box3 = new Box (285,425,30,30)
    box4 = new Box1 (315,425,30,30)
    box5 = new Box (345,425,30,30)
    box6 = new Box1 (375,425,30,30)
    box7 = new Box (405,425,30,30)
    box8 = new Box (255,395,30,30)
    box9 = new Box1 (285,395,30,30)
    box10 = new Box (315,395,30,30)
    box11 = new Box1 (345,395,30,30)
    box12 = new Box (375,395,30,30)
    box13 = new Box (285,365,30,30)
    box14 = new Box1 (315,365,30,30)
    box15 = new Box (345,365,30,30)
    box16 = new Box (315,335,30,30)

    box17 = new Box1 (530,225,30,30)
    box18 = new Box (560,225,30,30)
    box19 = new Box1 (590,225,30,30)
    box20 = new Box (620,225,30,30)
    box21 = new Box1 (650,225,30,30)
    box22 = new Box1 (560,195,30,30)
    box23 = new Box (590,195,30,30)
    box24 = new Box1 (620,195,30,30)
    box25 = new Box1 (590,165,30,30)

    polygon = Bodies.circle(80,350,20)
    World.add(world,polygon)

    slingshot = new Slingshot(polygon,{x:150, y:250})

    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background("#FFABAB");

    ground.display();
    stand1.display();
    stand2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    slingshot.display();

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y,50,50);

    drawSprites()
}

function mouseDragged(){
    Matter.Body.setPosition(polygon,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
 
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon)
    }
}





