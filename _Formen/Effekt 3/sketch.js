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
    background(0);
    noFill();
    let val = slider.value();
    let data = schlafdaten[val];

    //duration
    for (let y = 0; y < 1; y++) {
        let dur = (schlafdaten[4].duration_score);
        for (let i = 0; i < dur * 100; i++) {
            let j = i;
            fill(255);
            stroke(255);
            strokeWeight(2);
            let l = random(0, window.innerWidth);
            let m = random(0, window.innerHeight);


            rect(l, m - j, 5, 5);
            rect(l, m - j - 100, 5, 5);
            rect(l, m - j - 19, 5, 5);
            rect(l, m - j - 40, 5, 5);
            rect(l, m - j - 40, 5, 5);
            rect(l, m - j - 40, 5, 5);
            rect(l, m - j - 200, 5, 5);
            rect(l, m - j - 70, 5, 5);
            rect(l, m - j - 33, 5, 5);
            rect(l, m - j - 100, 5, 5);
            rect(l, m - j - 20, 5, 5);
            rect(l, m - j - 60, 5, 5);
        }
    }



    for (let y = 0; y < 1; y++) {
        let rev = (schlafdaten[4].revitalization_score);
        for (let i = 0; i < rev * 100; i++) {
            let j = i;
            fill(0, 0, 255);
            stroke(0, 0, 255);
            strokeWeight(2);
            let l = random(0, window.innerWidth);
            let m = random(0, window.innerHeight);


            rect(l, m + j, 3, 3);
            rect(l, m + j + 100, 3, 3);
            rect(l, m + j + 19, 3, 3);
            rect(l, m + j + 40, 3, 3);
            rect(l, m + j + 40, 3, 3);
            rect(l, m + j + 40, 5, 5);
            rect(l, m + j + 200, 5, 5);
            rect(l, m + j + 70, 5, 5);
            rect(l, m + j + 33, 5, 5);
            rect(l, m + j + 100, 5, 5);
            rect(l, m + j + 20, 5, 5);
            rect(l, m + j + 60, 5, 5);
        }
    }

    for (let y = 0; y < 1; y++) {
        let composition = (schlafdaten[4].composition_score);

        for (let i = 0; i < composition * 100; i++) {
            let j = i;
            fill(255, 255, 0);
            stroke(255, 255, 0);
            strokeWeight(2);
            let l = random(0, window.innerWidth);
            let m = random(0, window.innerHeight);

            rect(l + j, m + j, 1, 1);
            rect(l + j + 20, m + j + 100, 1, 1);
            rect(l + j - 200, m + j - 19, 1, 1);
            rect(l + j + 30, m + j + 40, 1, 1);
            rect(l + j + 10, m + j + 40, 1, 1);
            rect(l + j - 50, m + j - 40, 1, 1);
            rect(l + j + 200, m + j + 200, 1, 1);
            rect(l + j + 80, m + j + 70, 1, 1);
            rect(l + j - 120, m + j - 33, 1, 1);
            rect(l + j + 10, m + j + 100, 1, 1);
            rect(l + j + 40, m + j + 20, 1, 1);
            rect(l + j - 70, m + j - 60, 1, 1);
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