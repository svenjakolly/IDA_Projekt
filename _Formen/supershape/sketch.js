var globe = [];
var total = 75;

var offset = 0;

var m = 0;
var mchange = 0;
function setup(){
  createCanvas(600, 600, WEBGL);
  colorMode(HSB);
  globe = new Array((total+1)*(total+1));
}
