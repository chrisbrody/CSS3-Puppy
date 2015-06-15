$(document).ready( function () {
	
	var elem = document.getElementById('doodle');
	var two = new Two({fullscreen: true}).appendTo(elem);
	
	var position = new Two.Vector(two.width/2, two.height/2);

	var head, 
		nose, 
		eyeLeft, 
		pupilLeft, 
		earLeft,
		eyeRight, 
		pupilRight, 
		earRight,
		tongue;

	head = two.makeCircle(position.x, position.y, 100);
	head.fill = '#52C5DC';
	head.noStroke();

	nose = two.makeCircle(position.x, position.y+30, 32);
	nose.fill = '#EFB8D2';
	nose.noStroke();

	eyeLeft = two.makeCircle(position.x+42, position.y-26, 32);
	eyeLeft.fill = '#FFFFFF';
	eyeLeft.noStroke();

	pupilLeft = two.makeCircle(position.x+42, position.y-26, 20);
	pupilLeft.fill = '#7FC35E';
	pupilLeft.noStroke();

	earLeft = two.makeEllipse(position.x-100, position.y-80, 26, 46);
	earLeft.fill = '#52C5DC';
	earLeft.noStroke();
	earLeft.rotation = Math.PI / 4;

	eyeRight = two.makeCircle(position.x-42, position.y-26, 32);
	eyeRight.fill = '#FFFFFF';
	eyeRight.noStroke();

	pupilRight = two.makeCircle(position.x-42, position.y-26, 20);
	pupilRight.fill = '#7FC35E';
	pupilRight.noStroke();

	earRight = two.makeEllipse(position.x+100, position.y-80, 26, 46);
	earRight.fill = '#52C5DC';
	earRight.noStroke();
	earRight.rotation = -Math.PI / 4;


	tongue = two.makePolygon(0,0,  100,0,  100,0,  90,58,  50,80,  10,58,  0,0);
	tongue.curved = true;
	tongue.fill = '#EE3E36';
	tongue.noStroke();
	tongue.translation.x = position.x-40;
	tongue.translation.y = position.y+86;
	tongue.scale = 0.4;
	tongue.rotation = Math.PI / 5;

	two.update();

	
});


// BLUE CIRCLE
	// var dot = two.makeCircle(120, 120, 100);
	// dot.fill = '#52C5DC';
	// dot.noStroke();

// GREEN RECTANGLE
	// var rect = two.makeRectangle(160,120, 210,100);
	// rect.fill = '#6cbf58';
	// rect.stroke = '#ffffff';
	// rect.linewidth = 5;
    
// RED LINE
	// var line = two.makeLine(20,20, 210,700);
	// line.stroke = '#ff4c22';
	// line.linewidth = 18;
