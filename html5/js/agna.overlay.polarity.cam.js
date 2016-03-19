var compass_piece_a = new Image();
compass_piece_a.src = 'images/compass-piece-a.png';
var compass_piece_b = new Image();
compass_piece_b.src = 'images/compass-piece-b.png';

var com_back = new Image();
com_back.src = 'polarity-overlay-camera-bottom.png';

var com_left = new Image();
com_left.src  = 'polarity-overlay-camera-left.png';

var com_right = new Image();
com_right.src  = 'polarity-overlay-camera-right.png';

function drawOverlay() {
	agna.ctx.clearRect(0,0,1280,720);
	
	if (agna.loaded) {		
		var border_gradient;
		border_gradient = agna.ctx.createLinearGradient(0, agna.OVERLAY_HEIGHT - 20, 0, agna.OVERLAY_HEIGHT);
		border_gradient.addColorStop(0, "transparent");
		border_gradient.addColorStop(1, "rgba(0,0,0,0.2)");
		
		agna.ctx.fillStyle = border_gradient;
		agna.ctx.beginPath();
		agna.ctx.rect(0, 0, 1280, 720);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		drawBottom();
		if (agna.getField(field_left).trim() != '') {
			drawLeft();
		}
		if (agna.getField(field_right).trim() != '') {
			drawRight();
		}
		drawText();
	}
}

function drawText() {
	var yoffset = 0;
	
	/**
	 * CLOCK
	 */
	d = new Date();
	time_text = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear().toString().substr(2,2) + " - " + agna.twelveHour(d.getHours()) + ":" + agna.pad(d.getMinutes(), 2, 0);
	if (d.getHours() >= 12) {
		time_text += "p";
	} else {
		time_text += "a";
	}
	
	agna.ctx.fillStyle = '#444';
	agna.ctx.strokeStyle = 'black';
	agna.ctx.font = "bold small-caps 1.2em Zekton";
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
	
	agna.ctx.font = "1.6em Zekton";
	agna.ctx.fillStyle = '#333';
	agna.ctx.fillText(agna.cleanText(agna.getField(field_left), field_left), 285, 635 + yoffset, 300);
	agna.ctx.fillText(agna.cleanText(agna.getField(field_right), field_right), 995, 635 + yoffset, 300);
}

function drawBottom() {
	agna.ctx.drawImage(com_back, 0, 0);
}

function drawLeft() {
	agna.ctx.drawImage(com_left, 0, 0);
}

function drawRight() {
	agna.ctx.drawImage(com_right, 0, 0);
}