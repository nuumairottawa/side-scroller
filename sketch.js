var man;

function setup() {
  createCanvas(640, 360);
	man=new Person();
}

var x;
x=-100;
function draw() {
	background(200);
  if(mouseIsPressed){
  var force = createVector(-0.01,0);
  man.applyForce(force);
  }
	translate(-man.pos.x,0);
	man.update();
	man.display();
	
	fill(0,0,0);
	rect(350,height-50,50,70);
}
	
