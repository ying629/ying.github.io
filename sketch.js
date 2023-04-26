var canvas;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	// canvas.position(0,0);
    strokeWeight(0);
}

function draw() {
    circle(30,30,30);
  	clear();
	background(color(164,195,178));

  let teal = color(218, 255, 239);
  fill(teal);
	//project 1
	strokeWeight(10)
	stroke(128,128,128)
  rect(window.innerWidth*.295,window.innerHeight*.18,150,150,20,20);

	//project 2
	rect(window.innerWidth*.60,window.innerHeight*.18,150,150,20,20);

	//project 3
		rect(window.innerWidth*.295,window.innerHeight*.53,150,150,20,20);

	//project 4
		rect(window.innerWidth*.60,window.innerHeight*.53,150,150,20,20);
}


// https://p5js.org/reference/#/p5/image
// https://stackoverflow.com/questions/39126139/is-there-a-way-to-load-and-clip-an-image-with-a-round-border-in-p5-js
