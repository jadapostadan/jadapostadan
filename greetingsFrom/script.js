
let images;
let abbeyRdArray = [];
let imgArray = [];



function preload() {

  imgArray[0] = loadImage('abbeyRd_01.png');
  imgArray[1] = loadImage('abbeyRd_02.png');
  imgArray[2] = loadImage('abbeyRd_03.png');
  imgArray[3] = loadImage('abbeyRd_04.png');
  imgArray[4] = loadImage('abbeyRd_05.png');
  imgArray[5] = loadImage('abbeyRd_06.png');
  imgArray[6] = loadImage('abbeyRd_07.png');
  imgArray[7] = loadImage('abbeyRd_08.png');
  imgArray[8] = loadImage('abbeyRd_09.png');
  imgArray[9] = loadImage('abbeyRd_10.png');
  imgArray[10] = loadImage('abbeyRd_11.png');

}



function setup() {
	createCanvas(800, 500);
	imageMode(CENTER);
	colorMode(RGB);
}



function draw() {
	
	background(235,226,210);
	
	for(let i = 0; i < abbeyRdArray.length; i++) {
		abbeyRdArray[i].display();
	}
	
	// for(let i = 0; i < abbeyRdArray.length; i++) {
	// 	image(abbeyRdArray[i],x,y,200,200);	
	// }
	
}



function mousePressed() {
	
	let images = imgArray;
	let p = random(images);
	
	let newAbbeyRd = new AbbeyRd(p, mouseX, mouseY);
	abbeyRdArray.push(newAbbeyRd);
	
	// x = mouseX;
	// y = mouseY;
	
}



class AbbeyRd {

	constructor(p, x, y) {
		
		this.p = p;
		this.x = x;
		this.y = y;
		this.w1 = 200;
		
	}
	
	display() {
		
		// IMAGE
		
		for(let i = 0; i < imgArray.length; i++) {
			image(this.p,this.x,this.y,this.w1,this.w1);
		}
		
	}

}