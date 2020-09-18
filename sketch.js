var angle= 0;
var slider;
function setup() {
    createCanvas(600, 600);
    slider= createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
    background(35);
    angle= slider.value();
    // stroke(random(255),random(255),random(255));
    // strokeWeight(2);
    translate(300,height);
    branch(180);
}
function branch(len){
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    line(0,0,0,-len);  
    translate(0,-len);
    
    if(len>4){
        push();
        rotate(angle);
        
        branch(len*0.67);
        pop();
        push();
        rotate(-angle);
        branch(len*0.67);
        pop();
    }

    //line(0,0,0,-len*0.67);
}