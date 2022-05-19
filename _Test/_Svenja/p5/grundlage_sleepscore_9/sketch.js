let schlafdaten;


function loaded(data) {
    schlafdaten = data;
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "sleep_score.json";
    loadJSON(url, loaded);
    background(0, 0, 255);
    frameRate(1);
}

function draw() {

    let r = random(window.innerWidth);
    let r2 = random(window.innerHeight);
    for (let y = 0; y < schlafdaten.length; y++) {
        for (let i = 0; i < schlafdaten[y].overall_score - 70; i++) {









            fill(255, 255, 255)
            stroke(255, 0, 0);
            strokeWeight(0.1);
            //if (y == 10 || y == 20) {
            // rect(i * 30, y * 10, 5, 5)
            // } else {
            rect(i * 15, y * 10, 10, 10)
                //}


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