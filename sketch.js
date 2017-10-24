var half_width, day_width, old_second, old_hour, today, date, mills;

function setup() {
    //devicePixelScaling(false)
    createCanvas(windowWidth, windowHeight);

    
}//end setup


function draw() {
    half_width = windowWidth/2;

    background(100,170,150);
    //translate origin to center
    translate(width/2, height/2);
    
    fill (0);
    ellipse (0,0,windowWidth/1.5,windowWidth/1.5);
    
    if(second() != old_second){
        mills = millis();
        old_second = second();
    }


    //second
    fill("#b71824");
    noStroke();
    arc(0,0,half_width+windowWidth/6, half_width+windowWidth/6, -PI/2, TWO_PI*((second()+((millis()-mills)/1000)-15)/60), OPEN);
    fill(255);
    noStroke();
    ellipse(0,0,half_width, half_width)

    //minute
    fill("#f9dcd0");
    //stroke("#f9dcd0");
    arc(0,0,half_width, half_width, -PI/2,TWO_PI*((minute()+(second()/60)-15)/60));
    fill(15);
    noStroke();
    ellipse(0,0,half_width-windowWidth/6, half_width-windowWidth/6)

    //hour
    fill("#4c6e93");
    //stroke("#4c6e93");
    arc(0,0,half_width-windowWidth/6, half_width-windowWidth/6, -PI/2,TWO_PI*((hour()+(minute()/60)-3)/12), OPEN);
    fill(15);
    noStroke();
    ellipse(0,0,half_width-windowWidth/3, half_width-windowWidth/3)

    //translate back to corner
    translate(-width/2, -height/2);


}//end loop


//if the window is resized, resize the canvas to fit the new window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}//end windowResized