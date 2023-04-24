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

  let white = color(218, 255, 239);
  fill(white);
	//project 1
  rect(window.innerWidth*.29,window.innerHeight*.22,150,150,20,20);

	//project 2
	rect(window.innerWidth*.59,window.innerHeight*.22,150,150,20,20);

	//project 3
		rect(window.innerWidth*.29,window.innerHeight*.63,150,150,20,20);

	//project 4
		rect(window.innerWidth*.59,window.innerHeight*.63,150,150,20,20);
}


// https://p5js.org/reference/#/p5/image
// https://stackoverflow.com/questions/39126139/is-there-a-way-to-load-and-clip-an-image-with-a-round-border-in-p5-js
