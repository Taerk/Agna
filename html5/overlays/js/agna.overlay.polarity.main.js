var silhouette = false;
var image_transparency = 1;

overlay_image = new Image();
overlay_image.src = 'polarity-overlay-modern.png';

overlay_image2 = new Image();
overlay_image2.src = 'polarity-overlay-modern-sections.png';

var character1 = null;
var character2 = null;
var tempimage = new Image();

function drawOverlay() {
	// Clear screen
	agna.ctx.clearRect(0, 0, agna.ctx.width,agna.ctx.height);
	
	drawCharacter(1);
	drawCharacter(2);
	
	// Draw the overlay image
	agna.ctx.drawImage(overlay_image, 0, 0);
	
	agna.ctx.globalCompositeOperation = 'source-over';
	
	// Player Bars
	agna.ctx.fillStyle = agna.getPlayerColor(1);
	agna.ctx.beginPath();
	agna.ctx.rect(0,180,238.5,30);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.fillStyle = agna.getPlayerColor(2);
	agna.ctx.beginPath();
	agna.ctx.rect(1041.5,180,238.5,30);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	// Overlay sections
	agna.ctx.drawImage(overlay_image2, 0, 0);
	
	drawText();
}

function drawText() {
	agna.ctx.fillStyle = 'white';
	agna.ctx.textAlign = 'center';
	
	// Player Names
	agna.ctx.font = "small-caps 1.4em Zekton";
	agna.ctx.fillText(agna.cleanText(agna.getField('p1'), 'p1'), 119, 202, 230);
	agna.ctx.fillText(agna.cleanText(agna.getField('p2'), 'p2'), 1161, 202, 230);
	
	// Player Scores
	agna.ctx.font = "small-caps 1.8em Zekton";
	agna.ctx.fillText(agna.cleanText(agna.getField('s1'), 's1'), 119, 249, 200);
	agna.ctx.fillText(agna.cleanText(agna.getField('s2'), 's2'), 1161, 249, 200);
	
	// Top bar
	agna.ctx.font = "small-caps 1.6em Zekton";
	agna.ctx.fillText(agna.cleanText(agna.getField('ev'), 'ev'), 450, 28);
	agna.ctx.fillText(agna.cleanText(agna.getField('ma'), 'ma'), 830, 28);
	
	// Bottom bar
	agna.ctx.font = "1.3em Zekton";
	
	// Bottom bar -- Time
	d = new Date();
	var dd = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear().toString().substr(2,2);
	var dt = agna.twelveHour(d.getHours()) + ":" + agna.pad(d.getMinutes(), 2, 0);
	dt = (d.getHours() >= 12 ? dt += "p" : dt += "a");
	agna.ctx.fillText(dt, 640, 713);
	
	agna.ctx.fillText(dd, 970, 713);
	
	agna.ctx.fillText(agna.cleanText(agna.getField('an'), 'an'), 320, 713);
	
	// Commentators
	agna.ctx.font = "1.3em Zekton";
	agna.ctx.fillText(agna.getField('co1'), 145, 535, 155);
	agna.ctx.fillText(agna.getField('co2'), 145, 591, 155);
	
	agna.ctx.font = "bold 0.8em Calibri";
	agna.ctx.fillStyle = 'black';
	agna.ctx.globalAlpha = 0.8;
	agna.ctx.fillText(agna.cleanText(agna.getField('tw1'), 'tw1'), 145, 553, 155);
	agna.ctx.fillText(agna.cleanText(agna.getField('tw2'), 'tw2'), 145, 609, 155);
	
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
		
		if (player == 2) {
			agna.ctx.scale(-1, 1);
		}
		
		if (prev_src[player] != agna.getImage(player).src) {
			prev_src[player] = agna.getImage(player).src;
			get_img_src = 'images/' + agna.getImage(player).src.replace(/\\/g, "/");
			img.src = get_img_src;
		}
		
		player_offset = (player == 2 ? 1280 : 0);
		imgratio = img.width / img.height;
		switch (img.src.split("/")[img.src.split("/").length - 1].replace(".png", "")) {
			case 'bowser':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -2) + 50, 260, dim * imgratio, dim);
				break;
			case 'kirby':
				dim = 200;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 90, 300, dim * imgratio, dim);
				break;
			case 'captainfalcon':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 20, 260, dim * imgratio, dim);
				break;
			case 'drmario':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 120, 260, dim * imgratio, dim);
				break;
			case 'ganondorf':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 25, 260, dim * imgratio, dim);
				break;
			case 'jigglypuff':
				dim = 290;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 80, 300, dim * imgratio, dim);
				break;
			case 'mario':
				dim = 450;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 50, 280, dim * imgratio, dim);
				break;
			case 'marth':
				dim = 600;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 90, 280, dim * imgratio, dim);
				break;
			case 'mewtwo':
				dim = 450;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 90, 280, dim * imgratio, dim);
				break;
			case 'gameandwatch':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 100, 260, dim * imgratio, dim);
				break;
			case 'pichu':
				dim = 250;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5), 340, dim * imgratio, dim);
				break;
			case 'samus':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 50, 280, dim * imgratio, dim);
				break;
			case 'sheik':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 50, 240, dim * imgratio, dim);
				break;
			case 'yoshi':
				dim = 400;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 60, 280, dim * imgratio, dim);
				break;
			case 'younglink':
				dim = 350;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 90, 370, dim * imgratio, dim);
				break;
			case 'zelda':
				dim = 450;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 80, 270, dim * imgratio, dim);
				break;
			default:
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5), 260, dim * imgratio, dim);
				break;
		}
		
		if (player == 2) {
			agna.ctx.scale(-1, 1);
			
			if (silhouette) {
				agna.ctx.globalCompositeOperation = 'source-in';
			} else {
				agna.ctx.globalCompositeOperation = 'destination-in';
			}
			agna.ctx.globalAlpha = 1;
			agna.ctx.fillStyle = '#222';
			agna.ctx.beginPath();
			agna.ctx.rect(0,270,1280,720);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.globalCompositeOperation = 'destination-out';
			agna.ctx.globalAlpha = 1;
			agna.ctx.fillStyle = '#533';
			agna.ctx.beginPath();
			agna.ctx.rect(238.5, 270, 1280 - (238.5 * 2), 720);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.globalCompositeOperation = 'destination-out';
			agna.ctx.globalAlpha = (1 - image_transparency);
			agna.ctx.fillStyle = '#533';
			agna.ctx.beginPath();
			agna.ctx.rect(0, 270, 1280, 720);
			agna.ctx.closePath();
			agna.ctx.fill();
		}
		
		agna.ctx.globalCompositeOperation = 'destination-over';
		agna.ctx.globalAlpha = 1;
		
	}
}