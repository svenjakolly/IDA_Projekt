let x;
let y;
let outsideRadius = 150;
let insideRadius = 100;

function setup() {
    // put setup code here
    createCanvas(900, 900);
    background(0);
    x = width / 2;
    y = height / 2;
}

function draw() {
    // put drawing code here
    background(255, 50);
    ellipse(mouseX, mouseY, 35, 35);
    fill('rgb(0,0,255)');
    stroke('rgb(255,255,255)');
    strokeWeight(1);

}