let schlafdaten;


function loaded(data) {
    schlafdaten = data;
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    let url = "sleep_score.json";
    loadJSON(url, loaded);
    background(0, 0, 255);
    frameRate(1);
}

function draw() {

    for (let i = 0; i < schlafdaten.length; i++) {

        //Zahlen einer Nacht zusammengefasst
        let tag = (schlafdaten[i]);
        let oveScore = (schlafdaten[i].overall_score);
        let comScore = (schlafdaten[i].composition_score);
        let revScore = (schlafdaten[i].revitalization_score);
        let durScore = (schlafdaten[i].duration_score);
        console.log(oveScore);



        fill(255, 255, 255);
        stroke(255, 0, 0);
        rect(tag * 20, 20, 100, 10);
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