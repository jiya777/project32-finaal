const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png";

function preload() {
    getBackgroundImg();
    // create getBackgroundImg( ) 
    

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   
}

function draw(){

    if(backgroundImg){
    background(backgroundImg);
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responsejson=await response.json();
var datetime=responsejson.datetime;
var hour=datetime.slice(11,13);
console.log(hour);

if(hour>=04&&hour<=6){
    bg="sunrise1.png"
}else if(hour>=06&&hour<=08){
    bg="sunrise2.png";
}else if(hour>=23&&hour==0){
    bg="sunset10.png";
}else if(hour==0&&hour<=3){
    bg="sunset11.png";
   
}else{
    bg="sunset12.png"
}
backgroundImg=loadImage(bg)
}








    

