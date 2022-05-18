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
        let tag = (schlafdaten[i]);
        let minutenGesamtDeep = (schlafdaten[i].levels.summary.deep.minutes);
        let minutenGesamtWake = (schlafdaten[i].levels.summary.wake.minutes);
        let minutenGesamtLight = (schlafdaten[i].levels.summary.light.minutes);
        let minutenGesamtRem = (schlafdaten[i].levels.summary.rem.minutes);
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

        //darstellen auf screen
        rect([i] * 100, 0, 100, seconds);


    }


}




function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}