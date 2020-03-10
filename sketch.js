let slider1;

function setup(){
    createCanvas(windowWidth,windowHeight);
    slider1=createSlider(0,255);
}

function draw(){
    background(slider1.value(),0,0);
    
}


