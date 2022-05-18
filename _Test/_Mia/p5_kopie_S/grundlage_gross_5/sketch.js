let schlafdaten;


function loaded(data) {
    schlafdaten = data;
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "sleep-2017-10-19.json";
    loadJSON(url, loaded);
    background(0, 0, 255);
    frameRate(1);

}

function draw() {

    for (let i = 0; i < 90; i++) {

        //Zahlen einer Nacht zusammengefasst
        let tag = (schlafdaten[0]);
        let minutenGesamtDeep = (schlafdaten[0].levels.summary.deep.minutes);
        let minutenGesamtWake = (schlafdaten[0].levels.summary.wake.minutes);
        let minutenGesamtLight = (schlafdaten[0].levels.summary.light.minutes);
        let minutenGesamtRem = (schlafdaten[0].levels.summary.rem.minutes);
        console.log(minutenGesamtWake);

        //Zahlen pro wach/deep/light/rem–phase
        let seconds = (schlafdaten[0].levels.data[i].seconds);
        let level = (schlafdaten[0].levels.data[i].level);
        let f = color(255, 0, 0);

        //Farbauszeichnung nach Art von Schlaf (wach/deep/light/rem)
        if (level == "wake") {
            fill(200, 10, 50);
            stroke(200, 10, 50);
        }

        if (level == "light") {
            fill(0, 150, 255);
            stroke(0, 150, 255);
        }
        if (level == "deep") {
            fill(0, 255, 255);
            stroke(0, 255, 255);
        }
        if (level == "rem") {
            fill(255, 255, 255);
            stroke(255, 255, 255);
             
        }

        // //darstellen auf screen
        // rect([i] * 100, 0, 100, seconds);

// //bezier
//         noFill();
//     // stroke(255, 102, 0);
//     // line(85, 20, 10, 10);
//     // line(90, 90, 15, 80);
//     // stroke(0, 0, 0);
//     strokeWeight(4.0);
//     bezier(85, 200, seconds, seconds, seconds, seconds, 1000, 80);

// // noFill();
// arc(500, 450, 500, 500, seconds, HALF_PI);
// arc(300, 250, 500, 500, 200, HALF_PI);
// // arc(500, 450, 500, 500, 100, HALF_PI);
// // arc(500, 450, 500, 500, 100, HALF_PI);
// describe(
//   'shattered outline of ellipse with a quarter of a white circle bottom-right'
// );
// // strokeWeight(3.0);

noFill();
let x1 = 850,
 x2 = 1000,
 x3 = 2000,
 x4 = 100;
let y1 = 700,
 y2 = 300,
 y3 = 200,
 y4 = 100;
bezier(x1, y1, x2, y2, x3, y3, x4, y4);
fill(255);
let steps = 70;
for (let i = 0; i <= steps; i++) {
  let t = i / steps;
  let x = bezierPoint(x1, x2, x3, x4, t);
  let y = bezierPoint(y1, y2, y3, y4, t);
  circle(x, y, 5);
}
quad(38, 31, 800, 200, 200, seconds, 30, 76);
describe('irregular white quadrilateral with black outline');


    }



}





















function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}

