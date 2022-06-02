// Move the mouse left and right to see the curve change
function setup() {
    createCanvas(2000, 2000);
    noFill();
    frameRate(1)

}
//IDEE 1
// function draw() {
//     background(255);
//     let t = map(mouseX, 0, width, -5, 5);
//     curveTightness(t);
//     beginShape();
//     curveVertex(10, 10);
//     curveVertex(10, 10);
//     curveVertex(60, 500);
//     curveVertex(60, 500);
//     curveVertex(110, 10);
//     curveVertex(110, 10);
//     curveVertex(160, 500);
//     curveVertex(160, 500);
//     curveVertex(210, 10);
//     curveVertex(210, 10);
//     endShape();
// }

// //IDEE 2
// function draw() {
//     background(255);
//     let t = map(mouseX, 0, width, 20, 300);
//     //curveTightness(t);
//     noFill();
//     for (let i = 0; i < 10; i++) {
//         let j = 50 * i + t;
//         let k = random(10000);
//         beginShape();
//         vertex(30, k);
//         vertex(130, 300 + j);
//         vertex(k, 20 + j);
//         curveVertex(230 + t + j, t + j)
//         vertex(330, 200 + j);
//         vertex(430, 20 + j);
//         vertex(530, 100 + j + k);
//         vertex(630, 20 + j);
//         curveVertex(630 + t + j, t + k);
//         vertex(730, 300 + j);
//         vertex(830, 20 + j);
//         vertex(930, 220 + j);
//         vertex(1030, 20 + j);
//         curveVertex(1030 + t, t)
//         endShape();
//         beginShape();
//     }
// }

// IDEE 3



function draw() {
    background(255);
    let t = map(mouseX, 0, width, 20, 300);
    //curveTightness(t);
    noFill();
    let k = random(1000);
    for (let i = 0; i < 10; i++) {
        let j = 50 * i + t;



        beginShape();
        vertex(3, 10 - j);
        vertex(100, 300 * j / 10);
        vertex(k, 100);
        vertex(400, 300 * j / 10);
        vertex(k, 400 * j / 10);
        curveVertex(100, 300);
        vertex(k, 400);
        vertex(400, 500 * j / 10);

        endShape();

        beginShape();
        vertex(150 + k + j, 710);
        vertex(1510, 100);
        vertex(1520, 710);
        vertex(1550 + k, 5 * j);
        vertex(1000, 3 * j);
        vertex(2000, 800);
        vertex(2000, j * 2);
        vertex(k + 3 * j, j * 2);
        vertex(k + 10 * j, j * 2);
        vertex(k - 10 * j, 200 + k);
        vertex(1000, 200 + k);


        endShape();

    }
}