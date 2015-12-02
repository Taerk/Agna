var rotation = 0;
var rotate_speed = 5;
var yoffset = 50;

var compass_piece_a = new Image();
compass_piece_a.src = 'images/compass-piece-a.png';
var compass_piece_b = new Image();
compass_piece_b.src = 'images/compass-piece-b.png';

function drawOverlay() {
	agna.ctx.clearRect(0,0,1280,720);
	
	if (agna.loaded) {		
		var border_gradient;
		border_gradient = agna.ctx.createLinearGradient(0, agna.OVERLAY_HEIGHT - 20, 0, agna.OVERLAY_HEIGHT);
		border_gradient.addColorStop(0, "transparent");
		border_gradient.addColorStop(1, "rgba(0,0,0,0.4)");
		
		drawPlayers();
		
		agna.ctx.fillStyle = border_gradient;
		agna.ctx.beginPath();
		agna.ctx.rect(0, 0, 1280, 720);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		drawText();
		drawCompass();
	}
}

function drawText() {
	d = new Date();
	time_text = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear().toString().substr(2,2) + " - " + agna.twelveHour(d.getHours()) + ":" + agna.pad(d.getMinutes(), 2, 0);
	if (d.getHours() >= 12) {
		time_text += "p";
	} else {
		time_text += "a";
	}
	
	agna.ctx.fillStyle = '#444';
	agna.ctx.strokeStyle = 'black';
	agna.ctx.font = "bold small-caps 1.4em Zekton";
	agna.ctx.lineWidth = 3;
	
	agna.ctx.textAlign = 'left';
	// agna.ctx.strokeText(agna.getField('an'), 10, agna.OVERLAY_HEIGHT - 8);
	agna.ctx.fillText(agna.getField('an'), 10, agna.OVERLAY_HEIGHT - 8);
	
	agna.ctx.textAlign = 'right';
	// agna.ctx.strokeText(time_text, agna.OVERLAY_WIDTH - 10, agna.OVERLAY_HEIGHT - 8);
	agna.ctx.fillText(time_text, agna.OVERLAY_WIDTH - 10, agna.OVERLAY_HEIGHT - 8);
	
	agna.ctx.textAlign = 'center';
	// agna.ctx.strokeText(camera_name, agna.ctx.width / 2, agna.ctx.height - 10);
	// agna.ctx.fillText(camera_name, agna.ctx.width / 2, agna.ctx.height - 10);
	
	agna.ctx.fillStyle = '#eee';
	agna.ctx.font = "2.4em Zekton";
	agna.ctx.fillText(agna.cleanText(agna.getField(field_left), field_left), 355, 550 + yoffset, 440);
	agna.ctx.fillText(agna.cleanText(agna.getField(field_right), field_right), 925, 550 + yoffset, 440);
}

function drawCompass() {
	agna.ctx.drawImage(compass_piece_a, 590, 500 + yoffset, 100, 100);
	
	/* if (rotation < 360) {
		rotation += rotate_speed;
		rotate_speed += 5;
	} */
	// agna.ctx.save(); 
	// agna.ctx.translate(640, 550);
	// agna.ctx.rotate(rotation * Math.PI / 180);
	// agna.ctx.drawImage(compass_piece_b, -50, -50, 100, 100);
	// agna.ctx.restore();
	agna.ctx.drawImage(compass_piece_b, 590, 500 + yoffset, 100, 100);
}

function drawPlayers() {
	
	// Gray
	agna.ctx.fillStyle = '#666';
	agna.ctx.beginPath();
	agna.ctx.moveTo(100, 510 + yoffset);
	agna.ctx.lineTo(640, 510 + yoffset);
	agna.ctx.lineTo(640, 580 + yoffset);
	agna.ctx.lineTo(120, 580 + yoffset);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	// Red
	agna.ctx.fillStyle = '#a66';
	agna.ctx.beginPath();
	agna.ctx.moveTo(640, 510 + yoffset);
	agna.ctx.lineTo(1180, 510 + yoffset);
	agna.ctx.lineTo(1160, 580 + yoffset);
	agna.ctx.lineTo(640, 580 + yoffset);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = 0.4;
	agna.ctx.fillStyle = 'black';
	// agna.ctx.globalCompositeOperation = 's';
	agna.ctx.beginPath();
	agna.ctx.rect(0, 560 + yoffset, 1280, 720);
	agna.ctx.closePath();
	agna.ctx.fill();
	agna.ctx.globalAlpha = 1;
	
	agna.ctx.globalCompositeOperation = 'destination-in';
	
	agna.ctx.beginPath();
	agna.ctx.moveTo(100, 510 + yoffset);
	agna.ctx.lineTo(1180, 510 + yoffset);
	agna.ctx.lineTo(1160, 580 + yoffset);
	agna.ctx.lineTo(120, 580 + yoffset);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalCompositeOperation = 'source-over';
	
}