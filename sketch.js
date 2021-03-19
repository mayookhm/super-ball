const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,800);
    fill("white");
    engine = Engine.create();
    world = engine.world;
    
Pig = new pig(500,200,30,30);
    ground = new Ground(200,490,1200,10);
   
     box1 = new Box(150,300,50,50);
    box2 = new Box(240,100,50,50);
angerybird = new bird(300,100,30,30);
walL = new wall1(50,200,10,1200);
waLl = new wall12(650,50,10,1200);
Wall = new wall3(590,90,1200,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    Pig.display();
       ground.display();
        box2.display();
    box1.display();
    angerybird.display();
    walL.display();
    waLl.display();
    Wall.display();

}
