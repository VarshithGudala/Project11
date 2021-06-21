var path, pathimg,runner1,runner2;
var Runner1img,Runner2img;
var Edges;
function preload(){
  pathimg = loadImage("path.png");
  Runner = loadAnimation("Runner-1.png", "Runner-2.png");
  //Runner1img = loadImage("Runner-1.png");
  //Runner2img = loadImage("Runner-2.png");

  //pre-load images
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200, 200,50,50);
  path.addImage(pathimg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner1=createSprite(220,50,20,10);
  runner1.addAnimation("normal",Runner); //.addImage(Runner1img);
  runner1.velocityY = 1;
  runner1.scale = 0.1;
  //create sprites here
}

function draw() {
  background(0);
  if(path.y >400){
    path.y = 200;
  }
  drawSprites();
  Edges = createEdgeSprites();

  //bottom edge
  if(runner1.y < Edges[3].y-80)
          {
           }else{
            runner1.y = runner1.y -3;
          }
  
  if (isKeyPressed) {
    console.log(keyCode);
    
    if(keyCode==38){
      console.log("Edges[0].y="+Edges[0].y);
      console.log("runner1.y="+runner1.y);
    
      if(runner1.y > Edges[0].y-140)
          {
            runner1.y=  runner1.y-3;
          }else{
            runner1.y = runner1.y +1;
          }

      
    }else if(keyCode==37){
      console.log("Edges[1].x="+Edges[1].x);
      console.log("runner1.x="+runner1.x);
          if (Edges[1].x+40 == runner1.x) 
          {
            runner1.x = runner1.x +2;
        
          }else{
            runner1.x=  runner1.x-1;
          }
    }else if(keyCode==39){
      
        if (runner1.x<Edges[2].x+100) 
          {
            console.log("runner not touching");
            runner1.x=  runner1.x+1;
            

          }else{
            console.log("runner touching");
            runner1.x = runner1.x -2;

          }
    }else if(keyCode==40){
      console.log("Edges[3].y="+Edges[3].y);
      console.log("runner1.y="+runner1.y);
      
        if(runner1.y < Edges[3].y-80)
          {
            runner1.y=  runner1.y+1;
          }else{
            runner1.y = runner1.y -3;
          }
    }
    
  }
}
