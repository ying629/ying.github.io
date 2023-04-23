//stable pastel colors
//mouse over "pulse" and changes colors


var canvas;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	// canvas.position(0,0);
    strokeWeight(0);
}

function draw() {
	clear();
	background(color('white'));
}



// https://p5js.org/reference/#/p5/image
// https://stackoverflow.com/questions/39126139/is-there-a-way-to-load-and-clip-an-image-with-a-round-border-in-p5-js
