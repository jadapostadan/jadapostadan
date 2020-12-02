
let images;
let photoArray = [];
let imgArray = [];

var cnv;




function preload() {

  	imgArray[0] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre0.png');
  	imgArray[1] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre1.png');
  	imgArray[2] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre2.png');
  	imgArray[3] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre3.png');
  	imgArray[4] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre4.png');
  	imgArray[5] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre5.png');
  	imgArray[6] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre6.png');
  	imgArray[7] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre7.png');
  	imgArray[8] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre8.png');
  	imgArray[9] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre9.png');
  	imgArray[10] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre10.png');
  	imgArray[11] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre11.png');
  	imgArray[12] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre12.png');
  	imgArray[13] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre13.png');
  	imgArray[14] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/louvre/louvre14.png');

}



function centerCanvas() {

  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

}



function setup() {

	cnv = createCanvas(1050, 675);
  	centerCanvas();

	imageMode(CENTER);
	rectMode(CENTER);
	colorMode(RGB);

}



function windowResized() {
  centerCanvas();
}



function draw() {
	
	background(235,226,210,0);
	
	for(let i = 0; i < photoArray.length; i++) {
		photoArray[i].display();
	}

	noFill();
	stroke(242,234,223);
	strokeWeight(16);
	rect(width/2, height/2, 1050, 675);

}



function mousePressed() {
	
	let images = imgArray;
	let p = random(images);
	
	let newPhoto = new Photo(p, mouseX, mouseY);
	photoArray.push(newPhoto);
	
}



class Photo {

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

			stroke(235,226,210);
			strokeWeight(3);
			noFill();
			rect(this.x,this.y,this.w1,this.w1,4);

		}
		
	}

}