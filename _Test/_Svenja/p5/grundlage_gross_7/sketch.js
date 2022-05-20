let slider;

function preload() {
    let url = "sleep-2017-10-19.json";
    loadJSON(url, loaded);
}

function loaded(data) {
    schlafdaten = data;
    slider = createSlider(0, schlafdaten.length - 1, 0, 1)
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    frameRate(10);

}


function draw() {
    background(0, 0, 0);
    let val = slider.value();
    let data = schlafdaten[val].levels.data


    for (let i = 0; i < data.length; i++) {
        let seconds = data[i].seconds;
        let level = data[i].level;
        let f = color(255, 0, 0);


        //Farbauszeichnung nach Art von Schlaf (wach/deep/light/rem)
        if (level == "wake") {
            fill(50, 100, 255);
            stroke(50, 100, 255);
        }

        if (level == "light") {
            fill(0, 0, 0);
            stroke(0, 0, 0);
        }
        if (level == "deep") {
            fill(255, 255, 255);
            stroke(255, 255, 255);
        }
        if (level == "rem") {
            fill(255, 200, 20);
            stroke(255, 200, 20);
        }

        //maps
        let a = map(seconds, 0, 2000, 0, 360)


        //fill(255, 255, 255);
        //stroke(255, 0, 0);
        //stroke(0, 0, 0);
        rotateX(a);
        rotateY(a);
        box(300);
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