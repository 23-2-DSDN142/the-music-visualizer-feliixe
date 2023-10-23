let firstRun = true
let character;
let t = 0 //animation parameter
let lightColour;
let darkColour;
let sizeOfBlock = 600;


//vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  //background
  
  lightColor = color(179, 196, 252);// pastel blue
  darkColor = color(78, 102, 181);// purple
  noFill();

  for (let i = -100; i < sizeOfBlock; i++) {
    let gradientAmount = map(i, 0, sizeOfBlock, 0, 2);
    let strokeColor = lerpColor(color(179, 196, 252), color(78, 102, 181), gradientAmount);
    stroke(strokeColor);

    //ellipse(width / 2, height / 2, i);
    line(0, 100 + i, width*2, 100 + i );
  }
  
  
//aura
  push()

  let transparencyValues = [14, 11, 10, 5, 6, 4.7, 3, 2]; // Corresponding transparency values
  let auraX = 700
  let auraY = 270

  noStroke()

  // Loop through transparency values to draw ellipses

  // Choose color based on vocal value
  if (vocal > 50) {
      fill(240, 217, 46); // Solid yellow
  } else {
      fill(255, 255 / transparencyValues); // White with transparency
  }
  

  // Define aura colors and their corresponding transparency

  //fill(255, 255/ transparencyValues)
  let auraSizee = map(vocal,0, 100, 20,100)
  ellipse (auraX , auraY , auraSizee *14 , auraSizee *14)

  //fill(255, 255/ transparencyValues)
  let auraSize0 = map(vocal,0, 100, 20,100)
  ellipse (auraX , auraY , auraSize0 *12 , auraSize0 *12)

  //fill(255, 255/ transparencyValues)
  let auraSize1 = map(vocal,0, 100, 20,100)
  ellipse (auraX , auraY , auraSize1 *10.7 , auraSize1 *10.7)

  //fill(255, 225/ transparencyValues)
  let auraSize2 = map(vocal,0, 100, 20,70)
  ellipse (auraX , auraY , auraSize2 *10 , auraSize2 *10)

  //fill(255, 255/ transparencyValues)
  let auraSize3 = map(vocal,0, 100, 20,60)
  ellipse (auraX , auraY , auraSize3 *9.5 , auraSize3 *9.5)


  //fill(255, 255/ transparencyValues)
  let auraSize4 = map(vocal,0, 100, 20,50)
  ellipse (auraX , auraY , auraSize4 *9 , auraSize4 *9)

  //fill(255, 255/ transparencyValues)
  let auraSize5 = map(vocal,0, 100, 20,40)
  ellipse (auraX , auraY , auraSize5 *7.7 , auraSize5 *7.7)

  //fill(255, 255/ transparencyValues)
  let auraSize6 = map(vocal,0, 100, 20, 30)
  ellipse (auraX , auraY , auraSize6 *5.5 , auraSize6 *5.5)

  pop()




  //mountain
  push()

  //layer 1(behind)
  noStroke();
  fill(70, 141, 171); 
  for (let x = 0; x <= width; x += 20) {
    let y = map(noise(t + x * 0.01), 0, 1.5, 150, height); // Adjust the minimum y-value for the terrain
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  t += 0.009; // Increment animation parameter for movement


  //layer 2
  noStroke();
  fill(40, 102, 100); 
  beginShape();
  for (let x = 0; x <= width; x += 20) {
    let y = map(noise(t + x * 0.07), 0, 1, 200, height); // Adjust the minimum y-value for the terrain
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  t += 0.002; // Increment animation parameter for movement

  //layer 3
  noStroke();
  fill(40, 87, 122); 
  beginShape();
  for (let x = 0; x <= width; x += 20) {
    let y = map(noise(t + x * 0.007), 0, 1, 300, height); // Adjust the minimum y-value for the terrain
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  t += 0.001; // Increment animation parameter for movement

  //layer 4
  noStroke();
  fill(11, 55, 56); 
  beginShape();
  for (let x = 0; x <= width; x += 20) {
    let y = map(noise(t + x * 0.05), 0, 1, 500, height); // Adjust the minimum y-value for the terrain
    vertex(x, y);
  }
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  t += 0.0009; // Increment animation parameter for movement
  pop()
  

  
// character hair
  push()
  fill = color(175, 126, 214);
  fill = color(15, 36, 102);


  for (let i = -100; i < sizeOfBlock; i++) {
    let gradientAmount = map(i, 0, sizeOfBlock, 0, 2);
    let strokeColor = lerpColor(color(175, 126, 214), color(15, 36, 102), gradientAmount);
    stroke(strokeColor);

    ellipse(width / 2.246, height / 1.5, i/1.3, i/0.9);
    //line(0, 100 + i, width*2, 100 + i );
    //let hairSize = map(other,0, 100, 60,90)
  //ellipse (570 , 480 , hairSize *7, hairSize *9)
  }
  pop()


// character
  push()
  if(firstRun){
    rectMode(CENTER);
   character = loadImage('blue&you.png');

    firstRun = false

}

  character.resize (600, 600) 
  image (character, 400, 200)
  pop()


  // draw cloud
  push()
  noStroke()
  if (other > 0){
    fill (25, 35, 112)}//pastel blue

  else{
    fill (93, 138, 222)//
  }
  
  
 
//small cloud right 1

let cloudX = 1060
let cloudY = 300
//fill (255)//white
 
  let cloudSize = map(other,0, 100, 15, 30)
  ellipse (cloudX + 40 , cloudY + 15 , cloudSize +10 *0.80, cloudSize *0.52)//outer lbass
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


let cloudX3 = 760 //top right
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
  

  // smallest cloud - middle left
  let cloudX4 = 260
  let cloudY4 = 130
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

