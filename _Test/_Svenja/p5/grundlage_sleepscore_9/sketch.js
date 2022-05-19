function preload() {
    let url = "sleep_score.json";
    loadJSON(url, loaded);
}

function loaded(data) {
    schlafdaten = data;
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    frameRate(10);

}

function draw() {
    background(0);

    for (let i = 0; i < data.length; i++) {

        stroke(0);
        strokeWeight(1);
        nummer = (data[i])

    }
    fill(255);
    rect(0, 0, 20, 20)
}