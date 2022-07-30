var turn= 0;
var textx=0;
var texty=0;
function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("yellow");
    fill("#404040");
    rect(0, 0, width, 50);
    textAlign(CENTER);
    fill("White");
    textSize(18);
    text("TIC TAC TOE", width / 2, 33);
    fill("Black");

    createRow(150);
    createRow(250);
    createRow(350);
}

function createRow(y)
{
  for (x = 150; x < 450; x=x+100)
  {
      var b1= new Box(x, y, 100, 100); 
      b1.appear();   
  }  
}

function draw()
{

}

function mousePressed()
{
  if (mouseY < 250 && mouseX < 250 && mouseY > 150 && mouseX > 150) 
  {
    textx=200;
    texty=200;
  } 
  else if (mouseX < 350 && mouseY < 250) 
  {
    textx=300;
    texty=200;
  } 
  else if(mouseX < 450 && mouseY < 250) 
  {
    textx=400;
    texty=200;
  } 
  else if(mouseX < 250 && mouseY < 350) 
  {
    textx=200;
    texty=300;
  } 
  else if(mouseX < 350 && mouseY < 350) {
    textx=300;
    texty=300;
  } 
  else if(mouseX < 450 && mouseY < 350) 
  {
    textx=400;
    texty=300;
  } 
  else if(mouseX < 250 && mouseY < 450) 
  {
    textx=200;
    texty=400;
  } 
  else if(mouseX < 350 && mouseY < 450) 
  {
    textx=300;
    texty=400;
  }  
  else if(mouseX < 450 && mouseY < 450) 
  {
    textx=400;
    texty=400;
  }
  console.log(textx+","+ texty);
    
  if(turn%2==0)
    {
      text("O",textx,texty) ;
    }
    else
    {
      text("X",textx,texty);
    }
    turn=turn+1;
  
  
  if(turn==9)
  {
    background("yellow");
    turn=0;
  }
}

