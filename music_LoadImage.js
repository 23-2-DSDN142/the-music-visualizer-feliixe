let firstRun = true
let testImg;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(firstRun){
    rectMode(CENTER);
    testImg = loadImage('DSDN 103.png');

    firstRun = false
  }

  background(62, 88, 179);
  
  image(testImg, drum,80)

}
