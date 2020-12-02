
let images;
let photoArray = [];
let imgArray = [];

var cnv;




function preload() {

  	imgArray[0] = loadImage('images/eiffelTower/eiffelTower0.png');
  	imgArray[1] = loadImage('images/eiffelTower/eiffelTower1.png');
  	imgArray[2] = loadImage('images/eiffelTower/eiffelTower2.png');
  	imgArray[3] = loadImage('images/eiffelTower/eiffelTower3.png');
  	imgArray[4] = loadImage('images/eiffelTower/eiffelTower4.png');
  	imgArray[5] = loadImage('images/eiffelTower/eiffelTower5.png');
  	imgArray[6] = loadImage('images/eiffelTower/eiffelTower6.png');
  	imgArray[7] = loadImage('images/eiffelTower/eiffelTower7.png');
  	imgArray[8] = loadImage('images/eiffelTower/eiffelTower8.png');
  	imgArray[9] = loadImage('images/eiffelTower/eiffelTower9.png');
  	imgArray[10] = loadImage('images/eiffelTower/eiffelTower10.png');
  	imgArray[11] = loadImage('images/eiffelTower/eiffelTower11.png');
  	imgArray[12] = loadImage('images/eiffelTower/eiffelTower12.png');
  	imgArray[13] = loadImage('images/eiffelTower/eiffelTower13.png');
  	imgArray[14] = loadImage('images/eiffelTower/eiffelTower14.png');

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
			rect(this.x,this.y,this.w1,this.w1);

		}
		
	}

}