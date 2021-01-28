var canvas,background
var database
var gameState=0
var contestant,contestantCount,quiz

function setup(){
  canvas = createCanvas(850,600);
database=firebase.database();

quiz=new Quiz()
quiz.getState();
quiz.start();
}


function draw(){
  background("pink");

  
}
