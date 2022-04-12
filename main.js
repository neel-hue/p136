function setup(){
    y=createCanvas(400,400);
    y.position(550,350);
    p= createCapture(VIDEO);
    p.hide();
}

function preload(){

}

function draw(){
    image(p,0,0,500,500);
}
function start(){
    od = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
    }
    function modelloaded(){
        console.log("Model has been initialized;");
        status = true;
        v.loop();
        v.speed(1);
        v.volume(0);
    }