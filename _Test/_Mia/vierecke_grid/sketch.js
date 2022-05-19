var cols = 10;
var rows = 10;

var colors = [];

function setup() {
  createCanvas(300, 300);
}

function make2Darray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}



function draw() {
backgorund(51);

for (var i = 0; i < cols; i++) {
  for (var j = 0; j < rows; j++) {
    var x = i * 30;
    var y = j * 30;

    fill(colors[i][j]);
    stroke(0);
    fill(255);
    rect(x, y, 30, 30);

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