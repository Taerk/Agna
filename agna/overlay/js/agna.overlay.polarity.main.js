var silhouette = false;
var image_transparency = 1;

overlay_image = new Image();
overlay_image.src = 'polarity-overlay-modern.png';

overlay_image_an = new Image();
overlay_image_an.src = 'polarity-overlay-modern-an.png';

overlay_image_gr = new Image();
overlay_image_gr.src = 'polarity-overlay-modern-grid.png';

overlay_image_sec = new Image();
overlay_image_sec.src = 'polarity-overlay-modern-sections-sub.png';

var character1 = null;
var character2 = null;
var tempimage = new Image();

function drawOverlay() {
	agna.changeDrawInterval(2000);
	
	// Clear screen
	agna.ctx.clearRect(0, 0, agna.ctx.width,agna.ctx.height);
	
	// Color gradients
	// agna.ctx.drawImage(overlay_image_gr, 0, 0);
	
	/* agna.ctx.globalCompositeOperation = 'color';
	var gradient1 = agna.ctx.createLinearGradient(0, 270, 238.5, agna.ctx.height);
	gradient1.addColorStop(0, agna.getPlayerColor(1, 0.5));
	gradient1.addColorStop(0.8, agna.getPlayerColor(1, 0));
	gradient1.addColorStop(1, agna.getPlayerColor(1, 0));
	
	agna.ctx.fillStyle = gradient1;
	agna.ctx.beginPath();
	agna.ctx.rect(0,270,238.5,500);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	var gradient2 = agna.ctx.createLinearGradient(1280, 270, 1280 - 238.5, agna.ctx.height);
	gradient2.addColorStop(0, agna.getPlayerColor(2, 0.8));
	gradient2.addColorStop(0.8, agna.getPlayerColor(2, 0));
	gradient2.addColorStop(1, agna.getPlayerColor(2, 0));
	
	agna.ctx.fillStyle = gradient2;
	agna.ctx.beginPath();
	agna.ctx.rect(1280, 270, 1280 - 238.5, 500);
	agna.ctx.closePath();
	agna.ctx.fill(); */
	
	agna.ctx.globalCompositeOperation = 'source-over';
	agna.ctx.globalAlpha = 1;
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
	agna.ctx.drawImage(overlay_image_sec, 0, 0);
	
	if (agna.cleanText(agna.getField('an'), 'an') != "") {
		agna.ctx.drawImage(overlay_image_an, 0, 0);
	}
	
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
	agna.ctx.fillText(agna.cleanText(agna.getField('ev'), 'ev'), 450, 27);
	agna.ctx.fillText(agna.cleanText(agna.getField('ma'), 'ma'), 830, 27);
	
	// Bottom bar
	
	// Bottom bar -- Time
	d = new Date();
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var dd = (months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear());
	var dt = agna.twelveHour(d.getHours()) + ":" + agna.pad(d.getMinutes(), 2, 0);
	dt = (d.getHours() >= 12 ? dt += "p" : dt += "a");
	
	if (agna.cleanText(agna.getField('an'), 'an') != "") {
		agna.ctx.font = "1.3em Zekton";
		agna.ctx.fillText(agna.cleanText(agna.getField('an'), 'an'), 640, 713);
	} else {
		agna.ctx.font = "small-caps bold 1.2em Zekton";
		agna.ctx.fillStyle = '#aaa';
		agna.ctx.fillText("p o l a r i t y . g g", 640, 713);
		agna.ctx.font = "1.3em Zekton";
		agna.ctx.fillStyle = 'white';
	}
	
	agna.ctx.fillText(dt, 970, 713);
	
	agna.ctx.fillText(dd, 320, 713);
	
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
			case 'fox-laser':
				dim = 350;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 100, 280, dim * imgratio, dim);
				break;
			case 'fox-shine':
				dim = 340;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 70, 260, dim * imgratio, dim);
				break;
			case 'fox-taunt':
				dim = 300;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 10, 280, dim * imgratio, dim);
				break;
			case 'ganondorf':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 40, 260, dim * imgratio, dim);
				break;
			case 'iceclimbers':
				dim = 290;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 50, 300, dim * imgratio, dim);
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
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 70, 260, dim * imgratio, dim);
				break;
			case 'marth-fair':
				dim = 500;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 60, 260, dim * imgratio, dim);
				break;
			case 'marth-utilt':
				dim = 440;
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) - 90, 300, dim * imgratio, dim);
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
				agna.ctx.drawImage(img, -player_offset + (img.width / -5) + 100, 200, dim * imgratio, dim);
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
			// agna.ctx.fill();
			
			// Cut out main screen section
			agna.ctx.globalCompositeOperation = 'destination-out';
			agna.ctx.globalAlpha = 1;
			agna.ctx.fillStyle = '#533';
			agna.ctx.beginPath();
			agna.ctx.rect(238.5, 0, 1280 - (238.5 * 2), 720);
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