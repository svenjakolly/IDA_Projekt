// Move the mouse left and right to see the curve change
function setup() {
    createCanvas(1000, 1000);
    noFill();
}

function draw() {
    background(255);
    let t = map(mouseX, 0, width, -5, 5);
    curveTightness(0);
    beginShape();
    curveVertex(10, 10);
    curveVertex(10, 10);
    curveVertex(60, 60);
    curveVertex(60, 60);
    curveVertex(110, 10);
    curveVertex(110, 10);
    curveVertex(400, 65);
    curveVertex(200, 65);
    endShape();
}
buttons
copy
reset
edit