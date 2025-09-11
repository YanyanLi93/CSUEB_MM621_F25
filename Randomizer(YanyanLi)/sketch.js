let hairStyle = 0;
let bgColor;
let font;

function preload(){
  font = loadFont("Mogra-Regular.ttf");
}

function setup() {
  createCanvas(500, 600);
  bgColor = color(150,200,215); 
  textSize(30);
}

function draw() {
  background(bgColor);
  textFont(font);
  text('Press H/h to Change Hairstyle.', 30, 30);
  text('Click to Change bg Color.', 30, 60);
  
  noStroke();
   if (hairStyle === 2) {
    fill(153, 0, 153);
    rect(50,100,400,350,150,150,0,0);
  } else if (hairStyle == 3) {
    fill(191);
    ellipse(width/2, 300, 450, 450);
  }

  // body
  noStroke();
  fill(0);
  rect(100, 480, 300, 150, 40);
  fill(255, 222, 214);
  rect(200, 350, 100, 180, 50);

  // head
  
  strokeWeight(5);
  ellipse(width/2, 300, 280, 250);
 

  // hair (different styles)
  fill(80, 50, 20);
  if (hairStyle === 0) {
    ellipse(width/2, 220, 150, 100);
    //mouth
    noFill();
    strokeWeight(4);
    stroke(0);
    arc(width/2, 350, 30, 20, 0, PI);
  } else if (hairStyle == 1) {
    fill(0, 153, 204);
    ellipse(130, 90, 40, 40);
    ellipse(370, 90, 40, 40);
    ellipse(150, 120, 50, 50);
    ellipse(350, 120, 50, 50);
    ellipse(180, 160, 60, 60);
    ellipse(320, 160, 60, 60);
    ellipse(width/2, 220, 200, 100);
    //mouth
    noFill();
    strokeWeight(4);
    stroke(0);
    arc(width/2, 350, 30, 20, 0, PI);
  } else if (hairStyle == 2) {
    fill(153, 0, 153);
    rect(120, 170, 260, 100);
    //mouth
    noFill();
    strokeWeight(4);
    stroke(0);
    arc(width/2, 350, 30, 20, 0, PI);
  } else if (hairStyle == 3) {
    fill(255, 153, 204);
    ellipse(width/2, 360, 30, 50);
    fill(185, 116, 150);
    ellipse(width/2, 360, 3, 30);
    fill(191);
    rect(215,330,70,30);
  } else if (hairStyle == 4) {
    strokeWeight(2);
    stroke(0);
    line(140,230,144,233);
    line(180,180,185,195);
    line(233,170,234,183);
    line(263,170,270,181);
    line(360,210,350,215);
    //mouth
    noFill();
    strokeWeight(4);
    stroke(0);
    arc(width/2, 350, 30, 20, PI, 0);
  }
  // eyes
  fill(0);
  noStroke();
  ellipse(175, 300, 20, 30);
  ellipse(325, 300, 20, 30);
}

function keyPressed() {
  if (key === 'h' || key === 'H') {
    hairStyle = int(random(5)); // pick random style
  }
}

function mousePressed() {
  bgColor = color(random(255), random(255), random(255)); 
}
