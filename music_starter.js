let firstRun = true
let character;
let t = 0 //animation parameter
let blueColour;
let greenColour;
let sizeOfBlock = 600;


//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //background(62, 88, 179)
  if (drum > 60){
    background (18, 31, 66)}//dark blue

  else{
    fill (42, 71, 150)//white
  }

  blueColor = color(0, 102, 204);
  greenColor = color(99, 166, 122);
  noFill();

  for (let i = -100; i < sizeOfBlock; i++) {
    let gradientAmount = map(i, 0, sizeOfBlock, 0, 1);
    let strokeColor = lerpColor(color(0, 102, 204), color(99, 166, 122), gradientAmount);
    stroke(strokeColor);

    //ellipse(width / 2, height / 2, i);
    line(0, 100 + i, width*2, 100 + i );
  }
  
  //let greenColour = colour(99, 166, 122)

  //strokeWeight(3)


  //let sizeOfBlock = 600
  
    //for(let i = 0; i < sizeOfBlock; i++){ // draws 100 times
    //let gradientAmount = map(i, 0, SizeOfBlock, 0, 1)
    //let strokeColour = lerpColour(blueColour, greencolour, gradientAmount)
  
    //stroke(blueColour)
    //ellipse(width/2, height/2, i)
    //line(0, 100+i, width, 100+1)
    //pop()


//aura
  push()
  let auraX = 500
  let auraY = 300

  noStroke()

  // Define aura colors and their corresponding transparency
  let auraColors = [255, 255, 255, 255, 255, 255, 255]; // Aura colors (white in this case)
  let transparencyValues = [15, 11, 9, 6, 4.7, 3, 2]; // Corresponding transparency values

  for (let i = 0; i < auraColors.length; i++) {
    let auraSize = map(vocal, 0, 100, 20, 90 - i * 10);
    let auraAlpha = auraColors[i] / transparencyValues[i];
    fill(auraColors[i], auraAlpha);
    ellipse(auraX, auraY, auraSize * (10 - i * 0.7), auraSize * (10 - i * 0.7));
  }
 
  //fill(255, 255/15)
  let auraSize0 = map(vocal,0, 100, 20,90)
  ellipse (auraX , auraY , auraSize0 *10 , auraSize0 *10)

  //fill(255, 255/11)
  let auraSize1 = map(vocal,0, 100, 20,80)
  ellipse (auraX , auraY , auraSize1 *8.7 , auraSize1 *8.7)

  //fill(255, 225/9)
  let auraSize2 = map(vocal,0, 100, 20,70)
  ellipse (auraX , auraY , auraSize2 *8 , auraSize2 *8)

  //fill(255, 255/6)
  let auraSize3 = map(vocal,0, 100, 20,60)
  ellipse (auraX , auraY , auraSize3 *7.5 , auraSize3 *7.5)


  //fill(255, 255/4.7)
  let auraSize4 = map(vocal,0, 100, 20,50)
  ellipse (auraX , auraY , auraSize4 *7 , auraSize4 *7)

  //fill(255, 255/3)
  let auraSize5 = map(vocal,0, 100, 20,40)
  ellipse (auraX , auraY , auraSize5 *5.7 , auraSize5 *5.7)

  //fill(255, 255/2)
  let auraSize6 = map(vocal,0, 100, 20, 30)
  ellipse (auraX , auraY , auraSize6 *3.5 , auraSize6 *3.5)

  pop()




  //mountain
  push()
  noStroke();
  fill(100, 140, 80); // Mountain color
  beginShape();
  for (let x = 0; x <= width; x += 20) {
    let y = map(noise(t + x * 0.01), 0, 1, 200, height); // Adjust the minimum y-value for the terrain
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  t += 0.01; // Increment animation parameter for movement
  pop()
  

  push()
  if(firstRun){
    rectMode(CENTER);
   character = loadImage('blue&you.png');

    firstRun = false

}

  character.resize (600, 600) 
  image (character, 400, 200)
  pop()

//land
   //fill(179, 181, 242)
   //rect(0, width/2, 1280, 700)
  

  // draw cloud
  push()
  noStroke()
  if (other > 70){
    fill (162, 181, 252)}//pastel blue

  else{
    fill (225, 229, 242)//white
  }
  
  
 
//small cloud right 1

let cloudX = 1060
let cloudY = 300
//fill (255)//white
 
  let cloudSize = map(other,0, 100, 15, 30)
  ellipse (cloudX + 40 , cloudY + 15 , cloudSize +10 *0.80, cloudSize *0.52)//outer left


  let cloudSize1 = map(other,0, 100, 10, 50)
  ellipse (cloudX + 50, cloudY + 10  , cloudSize1 *0.99, cloudSize1 *0.69)//miidle left
  
  let cloudSize2 = map(other,0, 100, 15, 45)
  ellipse (cloudX + 68 , cloudY +10 , cloudSize2+10 *0.30, cloudSize2+10 *0.20)//center

  let cloudSize3 = map(other,0, 100, 10, 50)
  ellipse (cloudX + 90 , cloudY + 10 , cloudSize3+15 *0.99, cloudSize3 *0.69)//midle right


  let cloudSize4 = map(other,0, 100, 15, 30)
  ellipse (cloudX + 110 , cloudY + 15 , cloudSize4 +10 *0.80, cloudSize4 *0.52)//outer right
  


  // large cloud 2 (bottom )
let cloudX1 = 30
let cloudY1 = 300
//fill(106, 186, 121)//green

  let cloudSize5 = map(other,0, 100, 25, 30)
  ellipse (cloudX1 + 30 *2, cloudY1 + 15 *2, cloudSize5 +30 *2, cloudSize5 *2)//outer left


  let cloudSize6 = map(other,0, 100, 30, 50)
  ellipse (cloudX1 + 50 *2, cloudY1 + 10 *2, cloudSize6 *2, cloudSize6 *2)//miidle left
  

  let cloudSize7 = map(other,0, 100, 40, 55)
  ellipse (cloudX1 + 78 *2, cloudY1 , cloudSize7 *2.8 , cloudSize7 *2.5)//center

  let cloudSize8 = map(other,0, 100, 30, 40)
  ellipse (cloudX1 + 110 *2, cloudY1 + 10 *2, cloudSize8 *2.5, cloudSize8 *2)//midle right


  let cloudSize9 = map(other,0, 100, 25, 30)
  ellipse (cloudX1 + 130 *2, cloudY1 + 15 *2, cloudSize9 + 20 *2, cloudSize9 *2)//outer right
  


  // small cloud (top left)
  let cloudX2 = 30
  let cloudY2 = 100
  //fill(180, 86, 204)//pink
   
    let cloudSize10 = map(other,0, 100, 10, 25)
    ellipse (cloudX2 + 30 , cloudY2 + 15 , cloudSize10 *1.4, cloudSize10 *1)//outer left
  
    let cloudSize11 = map(other,0, 100, 15, 45)
    ellipse (cloudX2 + 50 * 1, cloudY2 + 10  , cloudSize11 * 1.6, cloudSize11 *1.2)//miidle left
    
    let cloudSize12 = map(other,0, 100, 25, 45)
    ellipse (cloudX2 + 78 , cloudY2  , cloudSize12 *1.5, cloudSize12 * 1.4)//center
  
    let cloudSize13 = map(other,0, 100, 20, 50)
    ellipse (cloudX2 + 110 , cloudY2 + 10 , cloudSize13 *1.2, cloudSize13 * 1.1)//midle right
  
  
    let cloudSize14 = map(other,0, 100, 10, 25)
    ellipse (cloudX2 + 130 , cloudY2 + 15 , cloudSize14 *1., cloudSize14 *0.9)//outer right
    


    // large cloud 3


let cloudX3 = 760
let cloudY3 = 80
//fill (171, 109, 104)//red

  let cloudSize15 = map(other,0, 100, 15, 30)
  ellipse (cloudX3 + 30 *2, cloudY3 + 15 *2, cloudSize15 +30 *2, cloudSize15 *2)//outer left


  let cloudSize16 = map(other,0, 100, 20, 50)
  ellipse (cloudX3 + 50 *2, cloudY3 + 10 *2, cloudSize16 *2, cloudSize16 *2)//miidle left
  

  let cloudSize17 = map(other,0, 100, 30, 55)
  ellipse (cloudX3 + 78 *2, cloudY3 , cloudSize17 *2.8 , cloudSize17 *2.5)//center

  let cloudSize18 = map(other,0, 100, 20, 40)
  ellipse (cloudX3 + 110 *2, cloudY3 + 10 *2, cloudSize18 *2.5, cloudSize18 *2)//midle right


  let cloudSize19 = map(other,0, 100, 15, 30)
  ellipse (cloudX3 + 130 *2, cloudY3 + 15 *2, cloudSize19 + 20 *2, cloudSize19 *2)//outer right
  

  // smallest cloud
  let cloudX4 = 260
  let cloudY4 = 170
  //fill (255)
   
    let cloudSize20 = map(other,0, 100, 15, 30)
    ellipse (cloudX4 + 40 , cloudY4 + 15 , cloudSize20 +10 *0.80, cloudSize20 *0.52)//outer left
  
  
    let cloudSize21 = map(other,0, 100, 10, 50)
    ellipse (cloudX4 + 50, cloudY4 + 10  , cloudSize21 *0.99, cloudSize21 *0.69)//miidle left
    
    let cloudSize22 = map(other,0, 100, 15, 45)
    ellipse (cloudX4 + 68 , cloudY4 +10 , cloudSize22+10 *0.30, cloudSize22+10 *0.20)//center
  
    let cloudSize23 = map(other,0, 100, 10, 50)
    ellipse (cloudX4 + 90 , cloudY4 + 10 , cloudSize23+15 *0.99, cloudSize23 *0.69)//midle right
  
  
    let cloudSize24 = map(other,0, 100, 15, 30)
    ellipse (cloudX4 + 110 , cloudY4 + 15 , cloudSize24 +10 *0.80, cloudSize24 *0.52)//outer right
    
  

  pop()



}

