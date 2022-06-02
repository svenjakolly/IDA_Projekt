let slider;


function loaded(data) {
    schlafdaten = data;
    slider = createSlider(0, schlafdaten.length - 1, 0, 1);
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "sleep_score.json";
    loadJSON(url, loaded);
    background(255, 255, 255);
    frameRate(0.3);

}

function draw() {
    background(255);
    let t = map(mouseX, 0, width, 20, 300);
    noFill();
    let k = random(1000);
    // let val = slider.value();
    // let data = schlafdaten[val]

    //let k = 500;





    // for (let y = 0; y < schlafdaten.length; y++) {
    for (let y = 0; y < 1; y++) {
        let dur = (schlafdaten[3].duration_score);

        for (let i = 0; i < (dur * dur); i++) {
            //dichte der linien (abstand zwischen den linien)
            let j = i + t;
            fill(0, 0, 255),
                stroke(0, 0, 255);
            strokeWeight(2);
            let l = random(0, window.innerWidth);
            let m = random(0, window.innerHeight)
                //form zeichnen


            rect(l + j, m + j, 5, 5);
            // rect(l + j - 35, m + j - 35, 5, 5);
            // rect(l + j - 55, m + j - 55, 5, 5);
            // rect(l + j - 100, m + j - 75, 5, 5);
        }
    }

    // for (let y = 0; y < schlafdaten.length; y++) {
    for (let y = 0; y < 1; y++) {
        let composition = (schlafdaten[5].composition_score);

        let composition_map = map(17, 24, 0, 100);
        for (let i = 0; i < (composition - 16) * 2; i++) {
            //dichte der linien (abstand zwischen den linien)
            let j = 40 * i + t;
            //fill(255, 255, 255),
            noFill();
            stroke(255, 0, 0);
            strokeWeight(1.5);
            //form zeichnen
            beginShape();
            vertex(k, k - 300);
            vertex(k, j);
            vertex(k, 20 + j);
            curveVertex(230 + t + j, t + j)
            vertex(330, 200 + j);
            vertex(430, 20 + j);
            vertex(530, 100 + j + k);
            vertex(630, 20 + j);
            curveVertex(630 + t + j, t + k);
            vertex(730, 300 + j);
            vertex(830, 20 + j);
            vertex(930, 220 + j);
            vertex(1030, 20 + j + t);
            curveVertex(1030 + t, t)
            endShape();
        }
    }
}








//screenshot speichern
function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}