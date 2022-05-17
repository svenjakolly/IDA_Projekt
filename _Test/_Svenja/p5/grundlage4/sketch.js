let schlafdaten;


function loaded(data) {
    schlafdaten = data;
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "csvjson.json";
    loadJSON(url, loaded);
    background(0, 0, 255);
    frameRate(1);

}

function draw() {

    for (let i = 0; i < 90; i++) {
        let nummer = [i];
        let schlafdauer = (schlafdaten[i].MinutenGeschlafen);
        let wachdauer = (schlafdaten[i].MinutenWach);
        let wachanzahl = (schlafdaten[i].WieHaeufigAufgewacht);
        let bettzeit = (schlafdaten[i].ZeitImBett);
        let REMzeit = (schlafdaten[i].MinutenREMSchlaf);
        let leichterSchlaf = (schlafdaten[i].MinutenleichterSchlaf);
        let tiefSchlaf = (schlafdaten[i].MinutenTiefschlaf);

        let a = map(schlafdaten[i].ZeitImBett, 0, 1000, 0, 255)
        let r = map(schlafdaten[i].MinutenWach, 0, 70, 0, 255);
        let g = map(schlafdaten[i].MinutenGeschlafen, 70, 500, 0, 255);
        let f = color(255, 0, 0);
        let f2 = color(255, 255, 255)
        let h = map(REMzeit, 0, 100, 0, 500)
        let xstartkoordinate = 30 + [i] * 55;
        let xkoordinate = 30 + [i] * 55 - tiefSchlaf;
        let ykoordinate = schlafdauer;
        let xkoordinate2 = xkoordinate + REMzeit;
        let ykoordinate2 = ykoordinate + REMzeit;
        let d = map(schlafdaten[i].ZeitImBett, 0, 4000, 0, 50);
        let b = 10 * [i];
        let c = map(schlafdaten[i].ZeitImBett, 0, 100, 0, 10);



        fill(f);
        stroke(f);
        strokeWeight(2);
        rect(b, 0, d, 5000);
        fill(f2);
        rect(0, b, 5000, d);
        rect(0, b + 400, 5000, d);
        line(xkoordinate, ykoordinate, xkoordinate2, ykoordinate2);


        strokeWeight(2);
        rect(ykoordinate, xkoordinate, 10, 10);





    }


}

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}