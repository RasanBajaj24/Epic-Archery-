const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,PlayerBase1,ComputerPlayerBase1;


function preload() {
  
 PlayerBase1Img = loadImage("./assets/base1.png");


}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create PlayerBase and ComputerPlayerBase 

   PlayerBase1 = new PlayerBase(300 , random(450 , height - 300) , 180 , 150);
   player = new Player(285 , PlayerBase1.body.position.y-153 , 50 , 150);
   ComputerPlayerBase1 = new ComputerPlayerBase(1200,random(450,height-300),180,150);
   computerPlayer = new ComputerPlayer(1185,ComputerPlayerBase1.body.position.y-153,50,150);



 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   PlayerBase1.display();
   ComputerPlayerBase1.display();



   //display Player and computerplayer
   player.display();
   computerPlayer.display();


}
