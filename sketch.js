function setup() {
  createCanvas(600, 400);
}

function draw() {
 stroke(mouseX,0,mouseY);  
strokeWeight(2);
  line(0,0,mouseX,mouseY);
    line(600,400,mouseX,mouseY);
  line(600,0,mouseX,mouseY);
  line(0,400,mouseX,mouseY);

}