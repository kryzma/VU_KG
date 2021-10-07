canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');

function draw(){
	drawBorder()
	drawFractal(5)
}

function drawFractal(num){
	if (num == 0){
		draw_r();
	} else {
		num = num - 1

		ctx.save();
		transformF1();
		drawFractal(num);
		ctx.restore();
		

		ctx.save();
		transformF2();
		drawFractal(num);
		ctx.restore();
		

		ctx.save();
		transformF3();
		drawFractal(num);
		ctx.restore();
		

		ctx.save();
		transformF4();
		drawFractal(num);
		ctx.restore();
	}
}

function transformF1(){
	
	var scale = 0.5 ;
	var alpha = Math.PI / 2;
	
	ctx.fillStyle = '#000000';
	ctx.transform(scale * Math.cos(alpha), scale * Math.sin(alpha), scale * (-Math.sin(alpha)), scale * Math.cos(alpha), 350, 0);
	
}

function transformF2(){

	var scale = 0.5;

	ctx.fillStyle = '#FF0000';
	ctx.transform(scale, 0, 0, scale, 350, 0);
	
}

function transformF3(){
		
	var scale1 = 0.25;
	var scale2 = -0.25;
	var alpha = -Math.PI / 2;
	
	ctx.fillStyle = '#00FF00';
	ctx.transform(scale1 * Math.cos(alpha), scale1 * (-Math.sin(alpha)),scale2 * Math.sin(alpha), scale2 * Math.cos(alpha), 0, 350);
	
}

function transformF4(){
	
	var scale1 = 0.5;
	var scale2 = -0.5;

	ctx.fillStyle = '#0000FF';
	ctx.transform(scale1, 0, 0, scale2, 350, 700 );
	
}

function drawBorder(){
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(700, 0);
	ctx.lineTo(700, 700);
	ctx.lineTo(0, 700);
	ctx.closePath();
	ctx.fillStyle = '#F0F0F0';
	ctx.fill();
	ctx.restore();
}

function draw_r(){
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(700, 0);
	ctx.lineTo(700, 700);
	ctx.lineTo(350, 700);
	ctx.lineTo(350, 350);
	ctx.lineTo(0, 350);
	ctx.fill();
}

draw();