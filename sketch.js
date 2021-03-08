const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var blocks = []
var gameState ="onSling"
var score = 0;

function setup(){
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  //var render = Matter.Render.create({ element:document.body, engine: engine, options: { width: 1200,
   //  height: 600, 
    // showAngleIndicator: true, wireframes:false, }, }); Matter.Render.run(render);
  ground = new Ground(600,590,1200,20);
  base1 = new Ground(500,470,230,20);
  base2 = new Ground(950,300,300,20);

  //level one
  block1 = new Box(410,450);
  block2 = new Box(440,450);
  block3 = new Box(470,450);
  block4 = new Box(500,450);
  block5 = new Box(530,450);
  block6 = new Box(560,450);
  block7 = new Box(590,450);
 
  block8 = new Box(440,380);
  block9 = new Box(470,380);
  block10 = new Box(500,380);
  block11 = new Box(530,380);
  block12 = new Box(560,380);


  polygon1 = new polygon(150,520);
   for( var i = 820; i<1080; i= i+30){
    blocks.push(new Box(i,250))
    
}

for( var i = 850; i<1045; i= i+30){
  blocks.push(new Box(i,220))
  
}
for( var i = 880; i<1005; i= i+30){
  blocks.push(new Box(i,190))
  
}
for( var i = 910; i<985; i= i+30){
  blocks.push(new Box(i,150))
  
}
block13 = new Box(940,120)

for( var i = 470; i<550; i= i+30){
  blocks.push(new Box(i,350))
  
}
block14 = new Box(500,300);

 var options = {
   bodyA :polygon1.body,
   pointB : { x:150, y: 500}
 }
 attachment =Matter.Constraint.create(options)
World.add(world, attachment)
 
bg = "white";
getTime();
}

function draw(){
  background(bg);
  Engine.update(engine);
  line(150, 500, polygon1.body.position.x,polygon1.body.position.y )
  ground.display();
  base1.display();
  base2.display();
  fill("white");
  block1.display();
  block1.score();
  block2.display();
  block2.score();
  block3.display();
  block3.score();
  block4.display();
  block4.score();
  block5.display();
  block5.score();
  block6.display();
  block6.score();
  block7.display();
  block7.score();
  
  block8.display();
  block8.score();
  block9.display();
  block9.score();
  block10.display();
  block10.score();
  block11.display();
  block11.score();
  block12.display();
  block12.score();
  block13.display();
  block13.score();
  polygon1.display();
 
  block14.display();
  block14.score();

  text("score:"+ score, 200,100);

  for(var i = 0; i<blocks.length; i++){
    blocks[i].display();
    blocks[i].score();
 }

 fill("yellow");
  text("x: " + mouseX+ "y: " + mouseY, mouseX, mouseY);
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
 attachment.bodyA = null 
  gameState = "launched";
}

function keyPressed(){
 if(keyCode== 32){
   gameState = "onSling"
   attachment.bodyA = polygon1.body
 }
}
async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>=06 && hour<=19){
      bg = "red";
  }
  else{
      bg = "black";
  }
}