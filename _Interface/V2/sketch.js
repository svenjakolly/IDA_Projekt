var slider;
let krungthep;

function loaded(data) {
    schlafdaten = data;
    slider = createSlider(0, schlafdaten.length - 1, 0, 1);
    slider.position(10, windowHeight / 1.03);
    slider.addClass("mysliders");
}

function preload() {
    krungthep = loadFont('krungthep.ttf');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "sleep_score.json";
    loadJSON(url, loaded);
    background(255);
    frameRate(60);
    textFont(krungthep);
}

function draw() {
    randomSeed(3);
    background(0, 0, 255);
    noFill();
    let val = slider.value();
    let data = schlafdaten[val];
    let datum = (schlafdaten[val].timestamp.split('T')[0]);

    //datum
    fill(255);
    noStroke();
    textSize(32);
    text(datum, 10, 40);

    //revitalization
    let rev = (schlafdaten[val].revitalization_score);
    const mini = 14;
    const maxi = 24;
    let loopi = map(rev, mini, maxi, 0, 100);
    for (let i = 0; i < loopi; i++) {

        let j = i;
        fill(255);
        stroke(0);
        strokeWeight(2);
        let l = random(0, window.innerWidth);
        let m = random(0, window.innerHeight);
        let n = random(0, 300);

        triangle(n + pow(rev - 14, 3.2), m, l, 560, 81, 560);
    }

    //composition

    let comp = (schlafdaten[val].composition_score);
    const minim = 11;
    const maxim = 24;
    let loopin = map(comp, minim, maxim, 0, 25);
    for (let i = 0; i < loopin; i++) {

        fill(0);
        noStroke();
        let l = random(0, window.innerWidth);

        rect(l, 200, 3, 70);
    }


    //duration
    let dur = (schlafdaten[val].duration_score);
    const min = 21
    const max = 47
    let loop = map(dur, min, max, 20, 1000)
    for (let i = 0; i < loop; i++) {

        let j = i;
        fill(0);
        stroke(0);
        strokeWeight(1);
        let l = random(0, window.innerWidth);
        let m = random(0, window.innerHeight);
        for (let z = 0; z < 5; z++) {
            let p = random(0, 300);
            let s = random(0, 400);
            rect(l + p, m + s, 1, 1);
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