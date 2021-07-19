const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas,comBase,Computerplayer;
var Playerbase,player;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  comBase = new ComputerBase(width-200,700,350,250);
  Playerbase = new PlayerBase(200,700,350,250);
  player = new Player(200,500,80,250);
  Computerplayer= new ComputerPlayer(width-200,500,80,250);


 }

function draw() {

  background(180);

  Engine.update(engine);

  comBase.display()
  Playerbase.display()
  player.display()
  Computerplayer.display()

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   

   //display Player and computerplayer


}
