let schlafdaten;


function loaded(data) {
    schlafdaten = data;
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "csvjson.json";
    loadJSON(url, loaded);
    background(0);
    frameRate(1);
}

function draw() {

    for (let i = 0; i < 21; i++) {
        let nummer = [i];
        let schlafdauer = (schlafdaten[i].MinutenGeschlafen);
        let wachdauer = (schlafdaten[i].MinutenWach);
        let wachanzahl = (schlafdaten[i].WieHaeufigAufgewacht);
        let bettzeit = (schlafdaten[i].ZeitImBett);
        let REMzeit = (schlafdaten[i].MinutenREMSchlaf);
        let leichterSchlaf = (schlafdaten[i].MinutenleichterSchlaf);
        let tiefSchlaf = (schlafdaten[i].MinutenTiefschlaf);


        let r = map(schlafdaten[i].MinutenWach, 0, 70, 0, 255);
        let g = map(schlafdaten[i].MinutenGeschlafen, 70, 500, 0, 255);
        let f = color(r, g, 100);
        let xkoordinate = 30 + [i] * 55;
        fill(f);
        rect(xkoordinate, 20, 55, REMzeit);
        rect(xkoordinate, REMzeit, 55, leichterSchlaf);
        rect(xkoordinate, REMzeit + leichterSchlaf, 55, tiefSchlaf);

    }










}