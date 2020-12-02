
let images;
let photoArray = [];
let imgArray = [];

var cnv;




function preload() {

  	imgArray[0] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley0.png');
  	imgArray[1] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley1.png');
  	imgArray[2] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley2.png');
  	imgArray[3] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley3.png');
  	imgArray[4] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley4.png');
  	imgArray[5] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley5.png');
  	imgArray[6] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley6.png');
  	imgArray[7] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley7.png');
  	imgArray[8] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley8.png');
  	imgArray[9] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley9.png');
  	imgArray[10] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley10.png');
  	imgArray[11] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley11.png');
  	imgArray[12] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley12.png');
  	imgArray[13] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley13.png');
  	imgArray[14] = loadImage('https://jadapostadan.github.io/jadapostadan/greetingsFrom/images/monumentValley/monumentValley14.png');

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


// OPEN & CLOSE OVERLAY
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
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