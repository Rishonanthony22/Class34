const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1,box2,box3,box4,box5;
var rope,ball;

  



function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
  
    

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
   



    box5 = new Box(810,160,70,70);
    

    ball = new Ball(200,50);

   
    rope= new Rope(ball.body,{x:200, y:50});
}

function draw(){
        background("teal");
    
     
    
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();

    

    box5.display();
    

    ball.display();
   
    rope.display();    
}

function mouseDragged(){
 
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}



