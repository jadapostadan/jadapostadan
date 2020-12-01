
let images;
let abbeyRdArray = [];
let imgArray = [];



function preload() {

	// for (let i = 0; i < 5; i++) {

	// 	imgArray[i] = loadImage('abbeyRd/abbeyRd' + i + '.png');

	// }

  	imgArray[0] = loadImage('images/abbeyRd/abbeyRd1.png');
  	imgArray[1] = loadImage('images/abbeyRd/abbeyRd2.png');
  	imgArray[2] = loadImage('images/abbeyRd/abbeyRd3.png');
  	imgArray[3] = loadImage('images/abbeyRd/abbeyRd4.png');
  	imgArray[4] = loadImage('images/abbeyRd/abbeyRd5.png');

}



function setup() {

	createCanvas(1100, 650);
	imageMode(CENTER);
	colorMode(RGB);

}



function draw() {
	
	background(235,226,210);
	
	for(let i = 0; i < abbeyRdArray.length; i++) {
		abbeyRdArray[i].display();
	}
	
}



function mousePressed() {
	
	let images = imgArray;
	let p = random(images);
	
	let newAbbeyRd = new AbbeyRd(p, mouseX, mouseY);
	abbeyRdArray.push(newAbbeyRd);
	
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