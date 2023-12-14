function setup(){
    createCanvas(400,400);
    //Create a canvas of size 400*400 pixels
}

function draw(){
    background(255, 182, 193);
    //Set up background color to light pink

    rect(60,45,250,200);//face
    rect(110,150,150,60);//mouth
    ellipse(140,102,30,30);//left eye
    ellipse(220,102,30,30);//right eye
    rect(156,245,50,50);//neck

    // //unibrow - I don't understand...
    // line(220,220,270,270);
}
