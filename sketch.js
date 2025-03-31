let navbarImg;
let adbarImg;
let productImg;
let gnbImg;
let aiIconImg;
let greenImg;

let state = 0;

function preload(){
  navbarImg = loadImage('01_NavBar.png');
  adbarImg = loadImage('02_AdBanner.png');
  productImg = loadImage('03_Product.png');
  gnbImg = loadImage('04_GNB.png');
  aiIconImg = loadImage('05_ai_icon.png');
  greenImg = loadImage('06_green.png');
}

function setup() {
  createCanvas(393,852);
}

function draw() {
  background(255);
  if(state == 0){
    image(navbarImg, 0, 0, 393, 128);
    image(adbarImg, 0, 128, 393, 284);
    image(productImg, 0, 412, 393, 440);
    image(gnbImg, 0, 758, 393, 88);
    image(aiIconImg, 320, 685, 60, 60);
  }else if(state == 1){
    image(navbarImg, 0, 0, 393, 128);
    image(adbarImg, 0, 128, 393, 284);
    image(productImg, 0, 412, 393, 440);
    image(gnbImg, 0, 758, 393, 88);
    image(aiIconImg, 320, 685, 60, 60);
    image(greenImg, 0, 612, 393, 152);
  }
}

function mouseClicked(){
  if(mouseX >= 320 && mouseX <= 380){
    if(mouseY >= 685 && mouseY <= 745){
      if(state == 0){
        state = 1;
      }else if(state == 1){
        state = 0;
      }
    }
  }
}