//draw a grid of red dots
var colorList = ['#ff8080',
                 '#ff4d4d',
                 '#990000',
                 '#ffe6e6'];

function setup() {
  createCanvas(425, 425);

frameRate(5);



}



function draw() {



    if (mouseIsPressed) {
      background(255) }
      else {
        background(random()*255, 0, 0) ;
      }

  //cerchi sotto
    for(var x = 25; x < 425; x += 25) {
      for(var y = 25; y < 425; y += 25) {

        noStroke();
        fill(floor(255*random()), 0 ,0);






        ellipse(x, y, 25);
      }
    }

  //cerchi sopra
  for(var x = 37.5; x < 400; x += 50) {
    for(var y = 37.5; y < 400; y += 50) {

      stroke(255);
      fill(255, 0, 0);
    noStroke();

    if (mouseX < random()*400){
    //if (mouseX<250 && mouseX>200) {
fill(255,255,255);

    };
      ellipse(x, y, 25);
    }
  }










}
