let schlafdaten;



function loaded(data) {
    schlafdaten = data;
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    let url = "sleep_score.json";
    loadJSON(url, loaded);
    background(0, 0, 0);
    frameRate(1);

}


function draw() {


    for (let i = 0; i < 90; i++) {
        //Zahlen einer Nacht zusammengefasst
        let tag = (schlafdaten[i]);
        let overallScore = (schlafdaten[i].overall_score);
        let restlessness = (schlafdaten[i].restlessness);

        console.log(overallScore);


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