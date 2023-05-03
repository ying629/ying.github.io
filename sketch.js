var canvas;
let  bg;

function setup() {
	canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');
  strokeWeight(0);
}

function draw() {

	//background
	const speed = 75;

	//random top pixels colors
	const topR = 100 * noise(frameCount / speed);
	const topG = 150 * noise(frameCount / speed);
	const topB = 150 * noise(frameCount / speed);
	//random bottom pixels colors -  always darker than top to make gradient
	const bottomR = 100 * noise(1000 + frameCount / speed);
	const bottomG = 150 * noise(1000 + frameCount / speed);
	const bottomB = 150 * noise(2000 + frameCount / speed);

	//create pixels with generated pixels
	const topColor = color(topR, topG, topB);
	const bottomColor = color(bottomR, bottomG, bottomB);

	//change color
	for(let y = 0; y < height; y++) {
		const lineColor = lerpColor(topColor, bottomColor, y / height);

		stroke(lineColor);
		line(0, y, width, y);
	}


	let teal = color(218, 255, 239);
	fill(teal);

	//boxes background
	strokeWeight(10)
	stroke(0,0,0)
  rect(window.innerWidth*.27,window.innerHeight*.15,220,220,90,30);

	//project 2
	rect(window.innerWidth*.58,window.innerHeight*.15,220,220,20,70);

	//project 3
		rect(window.innerWidth*.27,window.innerHeight*.50,220,220,90,30);

	//project 4
		rect(window.innerWidth*.58,window.innerHeight*.50,220,220,20,70);
}


// https://p5js.org/reference/#/p5/image
// https://stackoverflow.com/questions/39126139/is-there-a-way-to-load-and-clip-an-image-with-a-round-border-in-p5-js
