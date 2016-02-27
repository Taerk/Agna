overlay_image = new Image();
overlay_image.src = 'polarity-overlay-fgc.png';

function drawOverlay() {	
	// Clear screen
	agna.ctx.clearRect(0, 0, agna.ctx.width,agna.ctx.height);
	
	// Draw the overlay image
	agna.ctx.drawImage(overlay_image, 0, 0);
	
	agna.ctx.font = "small-caps 1.5em Zekton";
	agna.ctx.textAlign = 'center';
	
	// Player Names
	agna.ctx.fillStyle = '#000';
	agna.ctx.fillText(agna.getField('p1'), 290, 38);
	agna.ctx.fillText(agna.getField('p2'), 990, 38);
	
	// Player Scores
	agna.ctx.fillStyle = '#444';
	agna.ctx.font = "small-caps 1.3em Zekton";
	agna.ctx.fillText(agna.getField('s1'), 100, 36);
	agna.ctx.fillText(agna.getField('s2'), 1180, 36);
	
	// Round #
	agna.ctx.fillStyle = '#eee';
	agna.ctx.font = "small-caps 1.0em Myriad Pro";
	agna.ctx.fillText(agna.getField('ma'), 640, 62);
}