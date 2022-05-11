let history;
let count = 0;
let start = 0;
let zeile = 20; /* Versatz in der y Achse, soviel rutscht jeder Eintrag gegen unten*/
let step = 0.3; /* Um soviel Pixel wird der nächste Eintrag grösser */
let portion = 50;



function setup() {
    // put setup code here
    createCanvas(window.innerWidth, window.innerHeight);
    let url = "chrome_history.json";
    loadJSON(url, loaded);
    background(0);
    textSize(90);
    fill(255, 255, 255)
    textAlign(LEFT, BOTTOM);
    frameRate(1);
}

function draw() {
    // put drawing code here

    //let textGroesse = map(history[count].visitCount, 1, 20, 14, 36);
    //textSize(textGroesse);
    //text(history[count].title, width / 2, height / 2);
    //count = count + 1;
    for (let i = start; i < portion + start; i++) {
        textSize((i - start) * step);
        text(history[i].title, width / 2, (i - start - 1) * zeile);
    }
}

function loaded(data) {
    history = data;
    console.log(history[0].title);
}
let aktuellestunde = 15;
let deckungsgrad = map(aktuellestunde, 0, 23, 0, 255)

function keyReleased() {
    if (key == 's' || key == 'S') {
        let d = new Date();
        let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
        saveCanvas(now, 'png');
    }
}