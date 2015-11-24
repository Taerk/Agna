var silhouette = false;
var image_transparency = 1;

overlay_image = new Image();
overlay_image.src = 'polarity-overlay-smash4-bottom.png';

overlay_image2 = new Image();
overlay_image2.src = 'polarity-overlay-smash4-top.png';

overlay_image3 = new Image();
overlay_image3.src = 'polarity-overlay-smash4-top2.png';

var character1 = null;
var character2 = null;
var tempimage = new Image();

function drawOverlay() {
	// Clear screen
	agna.ctx.clearRect(0, 0, agna.ctx.width,agna.ctx.height);
	
	// Camera Borders
	agna.ctx.drawImage(overlay_image3, 0, 0);
	
	// Color things
	agna.ctx.globalCompositeOperation = 'hue';
	agna.ctx.fillStyle = agna.getPlayerColor(1);
	agna.ctx.beginPath();
	agna.ctx.rect(0,500,600,220);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalCompositeOperation = 'hue';
	agna.ctx.fillStyle = agna.getPlayerColor(2);
	agna.ctx.beginPath();
	agna.ctx.rect(680,500,600,220);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalCompositeOperation = 'destination-in';
	agna.ctx.drawImage(overlay_image3, 0, 0);
	
	// Overlay sections
	agna.ctx.globalCompositeOperation = 'destination-over';
	agna.ctx.drawImage(overlay_image2, 0, 0);
	
	// Draw the overlay image
	agna.ctx.globalCompositeOperation = 'destination-over';
	// agna.ctx.drawImage(overlay_image, 0, 0);
	
	
	agna.ctx.globalCompositeOperation = 'source-over';
	drawCharacter(1);
	drawCharacter(2);	
	
	drawText();
}

function drawText() {
	agna.ctx.fillStyle = 'white';
	agna.ctx.textAlign = 'center';
	
	// Player Names
	agna.ctx.font = "small-caps 1.5em Zekton";
	agna.ctx.fillText(agna.cleanText(agna.getField('p1'), 'p1'), 120, 705, 230);
	agna.ctx.fillText(agna.cleanText(agna.getField('p2'), 'p2'), 1160, 705, 230);
	
	// Player Scores
	agna.ctx.font = "small-caps 2.4em Zekton";
	agna.ctx.fillText(agna.cleanText(agna.getField('s1'), 's1'), 65, 558, 200);
	agna.ctx.fillText(agna.cleanText(agna.getField('s2'), 's2'), 1220, 558, 200);
	
	// Top bar
	agna.ctx.font = "small-caps 1.8em Zekton";
	agna.ctx.fillText(agna.cleanText(agna.getField('ev'), 'ev'), 380, 29);
	agna.ctx.fillText(agna.cleanText(agna.getField('ma'), 'ma'), 900, 29);
	
	// Bottom bar
	agna.ctx.font = "0.8em Zekton";
	
	// Bottom bar -- Time
	agna.ctx.fillStyle = '#aaa';
	d = new Date();
	var dd = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear().toString().substr(2,2);
	var dt = agna.twelveHour(d.getHours()) + ":" + agna.pad(d.getMinutes(), 2, 0);
	dt = (d.getHours() >= 12 ? dt += "p" : dt += "a");
	agna.ctx.fillText(dt, 640, 713);
	
	agna.ctx.textAlign = 'right';
	agna.ctx.fillText(dd, 810, 713);
	
	agna.ctx.textAlign = 'left';
	agna.ctx.fillText(agna.cleanText(agna.getField('an'), 'an'), 465, 713);
	
	// Commentators
	agna.ctx.font = "1.3em Zekton";
	// agna.ctx.fillText(agna.getField('co1'), 145, 535, 155);
	// agna.ctx.fillText(agna.getField('co2'), 145, 591, 155);
	
	agna.ctx.font = "bold 0.8em Calibri";
	agna.ctx.fillStyle = 'black';
	agna.ctx.globalAlpha = 0.8;
	// agna.ctx.fillText(agna.cleanText(agna.getField('tw1'), 'tw1'), 145, 553, 155);
	// agna.ctx.fillText(agna.cleanText(agna.getField('tw2'), 'tw2'), 145, 609, 155);
	
	agna.ctx.globalAlpha = 1;
}

img1 = new Image();
img2 = new Image();
prev_src = {};
prev_src[1] = "";
prev_src[2] = "";

function drawCharacter(player) {
	if (typeof agna.getImage(player).src != 'undefined' && agna.getImage(player).src != 'undefined') {
		img = (player == 1 ? img1 : img2);
		
		
		if (prev_src[player] != agna.getImage(player).src) {
			prev_src[player] = agna.getImage(player).src;
			get_img_src = 'images/' + agna.getImage(player).src.replace(/\\/g, "/");
			img.src = get_img_src;
		}
		
		switch (player) {
			case 1:
				agna.ctx.drawImage(img, 35, 465);
				break;
			case 2:
				agna.ctx.drawImage(img, 1250 - img.width, 465);
				break;
		}
	}
}