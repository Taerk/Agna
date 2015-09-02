/*
*  Name: Smackdown
*  Version: 1.1.1
*  Updated: 9/2/2015
*  Author: Taerk
*/

/* Design settings */
design = {}

design.sections = {};
design.sections.border 		= true;
design.sections.topbar 		= true;
design.sections.sidebar 	= true;
design.sections.commentator = true;
design.sections.music 		= true;
design.sections.player_1	= true;
design.sections.player_2	= true;
design.sections.clock 		= true;

design.topbar 				= 1; // 0 - Standard; 1 - CFL Smackdown
design.sidebar 				= {};
design.sidebar.width 		= 280;
design.sidebar.padding 		= 5;
design.sidebar.position 	= 1; // [BROKEN] -1 - left side; 0 - center; 1 - right side
design.commentary			= {};
design.commentary.enabled 	= true;
design.commentary.height 	= 25;
design.commentary.icon	 	= 0; // 0 - Headset; 1 - Mic
design.ticker 				= {};
design.ticker.enabled 		= true;
design.ticker.height 		= 25;
design.music_switch_section = 0;
design.music_switch_time = 0;
design.music_switch_time_max = 0;

design.stage_x = -1;
design.stage_w = -1;
design.stage_c = -1;
design.stage_e = -1;
design.sidebar_w = -1;

design.border = {};
design.border.center_sidebar = true;

design.border.game = {};
design.border.game.t = 35; // CFL - 35
design.border.game.b = 25; // CFL - 25
design.border.game.l = 10; // CFL - 20
design.border.game.r = 10; // CFL - 20

design.border.camera = {};
design.border.camera.t = 5; // CFL - 5
design.border.camera.b = 0; // CFL - 0
design.border.camera.l = 0; // CFL - 0
design.border.camera.r = 10; // CFL - 20

function drawTop() {	
	if (agna.getPlayerColor(1) > 0 && agna.getPlayerColor(2) > 0) {
		// Tournament bar outline
		agna.ctx.fillStyle = agna.colors.outline.color;
		agna.ctx.globalAlpha = agna.colors.outline.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_x + 40, 0);
		agna.ctx.lineTo(design.stage_x + 78, 44);
		agna.ctx.lineTo(design.stage_x + 105, 44);
		agna.ctx.lineTo(design.stage_x + 110, 47);
		if (design.topbar == 1 || design.topbar == 3) {
			agna.ctx.lineTo(design.stage_c - 77, 47);
			agna.ctx.lineTo(design.stage_c - 80, 67);
			agna.ctx.lineTo(design.stage_c + 54, 67);
			agna.ctx.lineTo(design.stage_c + 68, 54);
			agna.ctx.lineTo(design.stage_c + 70, 47);
		}
		agna.ctx.lineTo(design.stage_e - 110, 47);
		agna.ctx.lineTo(design.stage_e - 105, 44);
		agna.ctx.lineTo(design.stage_e - 78, 44);
		agna.ctx.lineTo(design.stage_e - 40, 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// ev
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_x + 78, 0);
		agna.ctx.lineTo(design.stage_x + 110, 40);
		agna.ctx.lineTo(design.stage_x + (design.stage_w / 2), 40);
		agna.ctx.lineTo(design.stage_x + (design.stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_x + 108, 0);
		agna.ctx.lineTo(design.stage_x + 140, 40);
		agna.ctx.lineTo(design.stage_x + (design.stage_w / 2), 40);
		agna.ctx.lineTo(design.stage_x + (design.stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = (agna.colors.topbar.alpha / 2);
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_x + 98, 0);
		agna.ctx.lineTo(design.stage_x + 130, 40);
		agna.ctx.lineTo(design.stage_x + (design.stage_w / 2), 40);
		agna.ctx.lineTo(design.stage_x + (design.stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_x + 76, 3);
		agna.ctx.lineTo(design.stage_x + 103, 37);
		agna.ctx.lineTo(design.stage_x + 96, 37);
		agna.ctx.lineTo(design.stage_x + 69, 3);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// ma
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_e - 78, 0);
		agna.ctx.lineTo(design.stage_e - 110, 40);
		agna.ctx.lineTo((design.stage_w / 2), 40);
		agna.ctx.lineTo((design.stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_e - 108, 0);
		agna.ctx.lineTo(design.stage_e - 140, 40);
		agna.ctx.lineTo((design.stage_w / 2), 40);
		agna.ctx.lineTo((design.stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = (agna.colors.topbar.alpha / 2);
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_e - 98, 0);
		agna.ctx.lineTo(design.stage_e - 130, 40);
		agna.ctx.lineTo((design.stage_w / 2), 40);
		agna.ctx.lineTo((design.stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_e - 76, 3);
		agna.ctx.lineTo(design.stage_e - 103, 37);
		agna.ctx.lineTo(design.stage_e - 96, 37);
		agna.ctx.lineTo(design.stage_e - 69, 3);
		agna.ctx.closePath();
		agna.ctx.fill();
	} else {
		// Tournament bar outline
		agna.ctx.fillStyle = agna.colors.outline.color;
		agna.ctx.globalAlpha = agna.colors.outline.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_x + 40, 0);
		agna.ctx.lineTo(design.stage_x + 80,45);
		if (design.topbar == 1 || design.topbar == 3) {
			agna.ctx.lineTo(design.stage_c - 83, 45);
			agna.ctx.lineTo(design.stage_c - 86, 67);
			agna.ctx.lineTo(design.stage_c + 62, 67);
			agna.ctx.lineTo(design.stage_c + 76, 54);
			agna.ctx.lineTo(design.stage_c + 78, 45);
		}
		agna.ctx.lineTo(design.stage_e - 80, 45);
		agna.ctx.lineTo(design.stage_e - 40, 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// ev
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_x + 78, 0);
		agna.ctx.lineTo(design.stage_x + 110,40);
		agna.ctx.lineTo(design.stage_x + (design.stage_w / 2), 40);
		agna.ctx.lineTo(design.stage_x + (design.stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// ma
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design.stage_e - 78, 0);
		agna.ctx.lineTo(design.stage_e - 110,40);
		agna.ctx.lineTo((design.stage_w / 2), 40);
		agna.ctx.lineTo((design.stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
	}
	
	switch (design.topbar) {
		case 1: // CFL Smackdown
		case 3: // CFL Smackdown (alt)
			if (agna.getPlayerColor(1) > 0 && agna.getPlayerColor(2) > 0) {
				agna.ctx.fillStyle = agna.colors.topbar.color;
				agna.ctx.globalAlpha = agna.colors.topbar.alpha;
				agna.ctx.beginPath();
				agna.ctx.moveTo(design.stage_c - 71, 0);
				agna.ctx.lineTo(design.stage_c - 76, 8);
				agna.ctx.lineTo(design.stage_c - 83, 40);
				agna.ctx.lineTo(design.stage_c + 80, 40);
				agna.ctx.lineTo(design.stage_c + 85, 0);
				agna.ctx.closePath();
				// agna.ctx.fill();
				
				agna.ctx.fillStyle = '#333';
				agna.ctx.globalAlpha = agna.colors.topbar.alpha;
				agna.ctx.beginPath();
				agna.ctx.moveTo(design.stage_c - 61, 0);
				agna.ctx.lineTo(design.stage_c - 69, 12);
				agna.ctx.lineTo(design.stage_c - 78, 63);
				agna.ctx.lineTo(design.stage_c + 55, 63);
				agna.ctx.lineTo(design.stage_c + 68, 50);
				agna.ctx.lineTo(design.stage_c + 74, 0);
				agna.ctx.closePath();
				agna.ctx.fill();
			} else {
				agna.ctx.fillStyle = agna.colors.topbar.color;
				agna.ctx.globalAlpha = agna.colors.topbar.alpha;
				agna.ctx.beginPath();
				agna.ctx.moveTo(design.stage_c - 61, 0);
				agna.ctx.lineTo(design.stage_c - 69, 12);
				agna.ctx.lineTo(design.stage_c - 78,63);
				agna.ctx.lineTo(design.stage_c + 55, 63);
				agna.ctx.lineTo(design.stage_c + 68, 50);
				agna.ctx.lineTo(design.stage_c + 74, 0);
				agna.ctx.closePath();
				agna.ctx.fill();
			}
			
			agna.ctx.globalAlpha = 1;
			var cfl_logo = new Image();
			if (agna.getPlayerColor(1) > 0 && agna.getPlayerColor(2) > 0) {
				cfl_logo.src = "images/cfl-smackdown-werstle-slate.png";
				// agna.ctx.drawImage(cfl_logo, design.stage_c - (150 / 2), 2, 150, 67);
				agna.ctx.drawImage(cfl_logo, design.stage_c - (145 / 2), 2);
			} else {
				cfl_logo.src = "images/cfl-smackdown-werstle.png";
				agna.ctx.drawImage(cfl_logo, design.stage_c - (145 / 2), 0, 145, 60);
			}
			break;
		default:
			// Short tournament bar outline
			agna.ctx.fillStyle = agna.colors.outline.color;
			agna.ctx.globalAlpha = agna.colors.outline.alpha;
			agna.ctx.beginPath();
			agna.ctx.moveTo(438, 45);
			agna.ctx.lineTo(443, 55);
			agna.ctx.lineTo(587, 55);
			agna.ctx.lineTo(592, 45);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			// Short tournament bar (standard style)
			agna.ctx.fillStyle = agna.colors.topbar_short.color;
			agna.ctx.globalAlpha = agna.colors.topbar_short.alpha;
			agna.ctx.beginPath();
			agna.ctx.moveTo(430, 0);
			agna.ctx.lineTo(450,50);
			agna.ctx.lineTo(580, 50);
			agna.ctx.lineTo(600, 0);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			
			// Short tournament bar - left side
			agna.ctx.fillStyle = '#056';
			agna.ctx.globalAlpha = 1;
			agna.ctx.beginPath();
			agna.ctx.moveTo(420, 0);
			agna.ctx.lineTo(437,40);
			agna.ctx.lineTo((design.stage_w / 2), 40);
			agna.ctx.lineTo((design.stage_w / 2), 0);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			// Short tournament bar - right side
			agna.ctx.fillStyle = '#056';
			agna.ctx.globalAlpha = 1;
			agna.ctx.beginPath();
			agna.ctx.moveTo((design.stage_w / 2), 0);
			agna.ctx.lineTo((design.stage_w / 2),40);
			agna.ctx.lineTo(593, 40);
			agna.ctx.lineTo(610, 0);
			agna.ctx.closePath();
			agna.ctx.fill();
			break;
	}
	
	// Text 1
	agna.ctx.fillStyle = "white";
	agna.ctx.globalAlpha = agna.text_alpha;
	if (agna.getPlayerColor(1) > 0 && agna.getPlayerColor(2) > 0) {
		agna.ctx.fillText(agna.getField('ev'), ((design.stage_c - 10) + 55) / 2, 30, design.stage_c - 215);
		agna.ctx.fillText(agna.cleanText(agna.getField('ma'), 'ma'), ((design.stage_c + 10) + (design.stage_e - 55)) / 2, 30, design.stage_c - 215);
	} else {
		agna.ctx.fillText(agna.getField('ev'), ((design.stage_c - 10) + 40) / 2, 30, design.stage_c - 200);
		agna.ctx.fillText(agna.cleanText(agna.getField('ma'), 'ma'), ((design.stage_c + 10) + (design.stage_e - 40)) / 2, 30, design.stage_c - 200);
	}
	
}

function drawSide() {
	// Sidebar
	agna.ctx.lineWidth = 0;
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.sidebar.color;
	
	// Main background
	agna.ctx.beginPath();
	if (design.border.center_sidebar) {
		agna.ctx.rect(design.stage_e, 170, design.sidebar_w - design.border.camera.r, agna.ctx.height);
	} else {
		agna.ctx.rect(design.stage_e, 170, design.sidebar_w, agna.ctx.height);
	}
	agna.ctx.closePath();
	agna.ctx.fill();
	
	// Player names background
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.sidebar_alt.color;
	agna.ctx.beginPath();
	if (design.border.center_sidebar) {
		agna.ctx.rect(design.stage_e - design.border.game.r, 170, 250 + design.border.camera.r, 53);
	} else {
		agna.ctx.rect(design.stage_e, 170, 250, 53);
	}
	agna.ctx.closePath();
	// agna.ctx.fill();
	
	// Camera 1
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.player[agna.color_p1];
	if (agna.getField('c1', true).indexOf("%p1%") > -1) {
		agna.ctx.fillStyle = agna.colors.player[agna.color_p1];
	} else if (agna.getField('c1', true).indexOf("%p2%") > -1) {
		agna.ctx.fillStyle = agna.colors.player[agna.color_p2];
	}
	agna.ctx.beginPath();
	if (design.border.center_sidebar) {
		agna.ctx.moveTo(design.stage_e - design.border.game.r, 171);
		agna.ctx.lineTo(agna.ctx.width - 40 - design.border.game.r, 171);
		agna.ctx.lineTo(agna.ctx.width - 15 - design.border.game.r, 196);
		agna.ctx.lineTo(design.stage_e - design.border.game.r, 196);
		agna.ctx.closePath();
	} else {
		agna.ctx.moveTo(design.stage_e, 171);
		agna.ctx.lineTo(agna.ctx.width - 40, 171);
		agna.ctx.lineTo(agna.ctx.width - 15, 196);
		agna.ctx.lineTo(design.stage_e, 196);
		agna.ctx.closePath();
	}
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.sidebar_c1.color;
	agna.ctx.beginPath();
	if (design.border.center_sidebar) {
		agna.ctx.moveTo(design.stage_e - design.border.game.r, 175);
		agna.ctx.lineTo(agna.ctx.width - 42 - design.border.game.r, 175);
		agna.ctx.lineTo(agna.ctx.width - 26 - design.border.game.r, 192);
		agna.ctx.lineTo(design.stage_e - design.border.game.r, 192);
	} else {
		agna.ctx.moveTo(design.stage_e, 175);
		agna.ctx.lineTo(agna.ctx.width - 42, 175);
		agna.ctx.lineTo(agna.ctx.width - 26, 192);
		agna.ctx.lineTo(design.stage_e, 192);
	}
	agna.ctx.closePath();
	agna.ctx.fill();
	
	// Camera 2
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.player[agna.color_p2];
	if (agna.getField('c2', true).indexOf("%p1%") > -1) {
		agna.ctx.fillStyle = agna.colors.player[agna.color_p1];
	} else if (agna.getField('c2', true).indexOf("%p2%") > -1) {
		agna.ctx.fillStyle = agna.colors.player[agna.color_p2];
	}
	agna.ctx.beginPath();
	agna.ctx.moveTo(agna.ctx.width, 197);
	agna.ctx.lineTo(design.stage_e + 40, 197);
	agna.ctx.lineTo(design.stage_e + 15, 222);
	agna.ctx.lineTo(agna.ctx.width, 222);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.sidebar_c2.color;
	agna.ctx.beginPath();
	agna.ctx.moveTo(agna.ctx.width, 201);
	agna.ctx.lineTo(design.stage_e + 42, 201);
	agna.ctx.lineTo(design.stage_e + 26, 218);
	agna.ctx.lineTo(agna.ctx.width, 218);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = agna.text_alpha;
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.font = "bold 1em Arial";
	agna.ctx.fillText(agna.cleanText(agna.getField('c1'), 'c1'), design.stage_e + (design.sidebar_w / 2) - 21, 189, design.sidebar_w - 42 - design.sidebar.padding);
	agna.ctx.fillText(agna.cleanText(agna.getField('c2'), 'c2'), design.stage_e + (design.sidebar_w / 2) + 21, 215, design.sidebar_w - 42 - design.sidebar.padding);
}

function drawMusic() {
	// Music
	if (typeof music_icon == 'undefined') {
		music_icon = new Image();
		music_icon.src = "images/icon_music.png";
	}
	if (agna.cleanText(agna.getField('mu')) != "") {
		music_field = agna.getField('mu').replace(" - ", " -- ");
		if ((music_field.indexOf("--") > -1) || ((music_field.indexOf(" -- ") > -1) && (music_field.split(" -- ").length >= 2))) {
			
			agna.ctx.fillStyle = agna.colors.music.color;
			agna.ctx.globalAlpha = agna.colors.music.alpha;
			agna.ctx.beginPath();
			if (design.border.center_sidebar) {
				agna.ctx.rect(design.stage_e, max_y - 50, design.sidebar_w - design.border.camera.r, 25);
			} else {
				agna.ctx.rect(design.stage_e, max_y - 50, design.sidebar_w, 25);
			}
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.music.color;
			agna.ctx.globalAlpha = agna.colors.music.alpha / 2;
			agna.ctx.beginPath();
			if (design.border.center_sidebar) {
				agna.ctx.rect(design.stage_e, max_y - 25, design.sidebar_w - design.border.camera.r, 25);
			} else {
				agna.ctx.rect(design.stage_e, max_y - 25, design.sidebar_w, 25);
			}
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.music.color;
			agna.ctx.globalAlpha = agna.colors.music.alpha;
			agna.ctx.beginPath();
			agna.ctx.moveTo(design.stage_e, max_y - 25);
			agna.ctx.lineTo(design.stage_e + 25, max_y - 25);
			agna.ctx.lineTo(design.stage_e + 10, max_y);
			agna.ctx.lineTo(design.stage_e, max_y);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.globalAlpha = 1;
			
			agna.ctx.fillStyle = 'white';
			agna.ctx.font = "bold 1em Arial";
			
			if (music_field.indexOf("--") > -1) {
				split_music = music_field.split("--");
			} else if ((music_field.indexOf(" - ") > -1) && (music_field.split(" - ").length == 2)) {
				split_music = music_field.split(" - ");
			}
			if (design.music_switch_time == design.music_switch_time_max) {
				design.music_switch_time = 0;
				design.music_switch_section++;
			} else {
				design.music_switch_time++;
			}
			
			if (design.music_switch_section >= split_music.length - 1) {
				design.music_switch_section = 0;
			}
			
			if (design.border.center_sidebar) {
				agna.ctx.fillText(agna.cleanText(split_music[design.music_switch_section].trim()), design.stage_e + ((design.sidebar_w + 25) / 2) - (design.border.camera.r / 2), max_y - 33, design.sidebar_w - 25 - design.sidebar.padding - design.border.camera.r);
				agna.ctx.fillText(agna.cleanText(split_music[split_music.length - 1].trim()), design.stage_e + ((design.sidebar_w + 25) / 2), max_y - 8, design.sidebar_w - 25 - design.sidebar.padding - design.border.camera.r);
			} else {
				agna.ctx.fillText(agna.cleanText(split_music[design.music_switch_section].trim()), design.stage_e + ((design.sidebar_w + 25) / 2) - (design.border.camera.r / 2), max_y - 33, design.sidebar_w - 25 - design.sidebar.padding);
				agna.ctx.fillText(agna.cleanText(split_music[split_music.length - 1].trim()), design.stage_e + ((design.sidebar_w + 25) / 2), max_y - 8, design.sidebar_w - 25 - design.sidebar.padding);
			}
			
			agna.ctx.drawImage(music_icon, design.stage_e, max_y - 40);
		} else {
			agna.ctx.fillStyle = agna.colors.music.color;
			agna.ctx.globalAlpha = agna.colors.music.alpha;
			agna.ctx.beginPath();
			if (design.border.center_sidebar) {
				agna.ctx.rect(design.stage_e, max_y - 25, design.sidebar_w - design.border.camera.r, 25);
			} else {
				agna.ctx.rect(design.stage_e, max_y - 25, design.sidebar_w, 25);
			}
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.globalAlpha = 1;
			
			agna.ctx.fillStyle = 'white';
			agna.ctx.font = "bold 1em Arial";
			agna.ctx.fillText(agna.cleanText(agna.getField('mu')), design.stage_e + ((design.sidebar_w + 25) / 2), max_y - 8, design.sidebar_w - 25 - design.sidebar.padding);
			
			agna.ctx.drawImage(music_icon, design.stage_e, max_y - 25);
		}
	}
}

function drawCommentator() {	
	if (typeof commentator_icon == 'undefined') {
		commentator_icon = new Image();
		commentator_icon.src = "images/icon_headset.png";
	}
	
	// Commentator
	agna.ctx.fillStyle = agna.colors.commentator.color;
	agna.ctx.globalAlpha = agna.colors.commentator.alpha;
	agna.ctx.beginPath();
	if (design.border.center_sidebar) {
		agna.ctx.rect(design.stage_e, agna.ctx.height - 25, design.sidebar_w - design.border.camera.r, 25);
	} else {
		agna.ctx.rect(design.stage_e, agna.ctx.height - 25, design.sidebar_w, 25);
	}
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = 1;
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.font = "bold 1em Arial";
	if (design.border.center_sidebar) {
		agna.ctx.fillText(agna.cleanText(agna.getField('co')), design.stage_e + ((design.sidebar_w + 25) / 2) - (design.border.camera.r / 2), agna.ctx.height - 8, design.sidebar_w - 25 - design.sidebar.padding - design.border.camera.r);
	} else {
		agna.ctx.fillText(agna.cleanText(agna.getField('co')), design.stage_e + ((design.sidebar_w + 25) / 2), agna.ctx.height - 8, design.sidebar_w - 25 - design.sidebar.padding);
	}
	
	agna.ctx.drawImage(commentator_icon, design.stage_e, agna.ctx.height - 25);
	
	max_y -= 25; // Bumps up the "Music" portion
}

function drawPlayer(player) {
	player_offset = 0;
	
	if (player == 2) {
		agna.ctx.scale(-1, 1);
		player_offset = -design.stage_e;
	}
	
	// Player 1 Bar
	if (agna.getPlayerColor(player) > 1) {
		agna.ctx.fillStyle = agna.colors.outline.color;
		agna.ctx.globalAlpha = agna.colors.outline.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 15, agna.ctx.height);
		agna.ctx.lineTo(player_offset + 33, agna.ctx.height - 30);
		agna.ctx.lineTo(player_offset + 74, agna.ctx.height - 30);
		agna.ctx.lineTo(player_offset + 80, agna.ctx.height - 40);
		agna.ctx.lineTo(player_offset + 425, agna.ctx.height - 40);
		agna.ctx.lineTo(player_offset + 428, agna.ctx.height - 36);
		agna.ctx.lineTo(player_offset + 435, agna.ctx.height - 36);
		agna.ctx.lineTo(player_offset + 457, agna.ctx.height);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		switch (player) {
			case 1:
				agna.ctx.fillStyle = agna.colors.player[agna.color_p1];
				break;
			case 2:
				agna.ctx.fillStyle = agna.colors.player[agna.color_p2];
				break;
		}
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 65, agna.ctx.height);
		agna.ctx.lineTo(player_offset + 85, agna.ctx.height - 35);
		agna.ctx.lineTo(player_offset + 420, agna.ctx.height - 35);
		agna.ctx.lineTo(player_offset + 440, agna.ctx.height);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// Off-piece
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 442, agna.ctx.height - 2);	// Bottom-left
		agna.ctx.lineTo(player_offset + 425, agna.ctx.height - 30); 	// Top-left
		agna.ctx.lineTo(player_offset + 430, agna.ctx.height - 30); 	// Top-right
		agna.ctx.lineTo(player_offset + 447, agna.ctx.height - 2); 	// Bottom-right
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// Shadow
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = agna.colors.score.null.alpha / 2;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 70, agna.ctx.height);			// Bottom-left
		agna.ctx.lineTo(player_offset + 90, agna.ctx.height - 20);
		agna.ctx.lineTo(player_offset + 76, agna.ctx.height - 20);
		agna.ctx.lineTo(player_offset + 85, agna.ctx.height - 35);
		agna.ctx.lineTo(player_offset + 90, agna.ctx.height - 35);	// Top-left
		agna.ctx.lineTo(player_offset + 405, agna.ctx.height - 35);	// Top-right
		agna.ctx.lineTo(player_offset + 425, agna.ctx.height);		// Bottom-right
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// Dark Bar
		agna.ctx.fillStyle = agna.colors.players.color;
		agna.ctx.globalAlpha = agna.colors.players.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 70, agna.ctx.height);
		agna.ctx.lineTo(player_offset + 90, agna.ctx.height - 35);
		agna.ctx.lineTo(player_offset + 395, agna.ctx.height - 35);
		agna.ctx.lineTo(player_offset + 415, agna.ctx.height);
		agna.ctx.closePath();
		agna.ctx.fill();
	} else {
		agna.ctx.fillStyle = agna.colors.outline.color;
		agna.ctx.globalAlpha = agna.colors.outline.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 15, agna.ctx.height);
		agna.ctx.lineTo(player_offset + 33, agna.ctx.height - 30);
		agna.ctx.lineTo(player_offset + 60, agna.ctx.height - 30);
		agna.ctx.lineTo(player_offset + 66, agna.ctx.height - 40);
		agna.ctx.lineTo(player_offset + 440, agna.ctx.height - 40);
		agna.ctx.lineTo(player_offset + 465, agna.ctx.height);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.player_1.color;
		agna.ctx.globalAlpha = agna.colors.player_1.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 65, agna.ctx.height);
		agna.ctx.lineTo(player_offset + 85, agna.ctx.height - 35);
		agna.ctx.lineTo(player_offset + 420, agna.ctx.height - 35);
		agna.ctx.lineTo(player_offset + 440, agna.ctx.height);
		agna.ctx.closePath();
		agna.ctx.fill();
	}
	
	// TEXT -- Prereq
	agna.ctx.fillStyle = "white";
    agna.ctx.lineWidth = 5;
	agna.ctx.strokeStyle = "black";
	agna.ctx.globalAlpha = agna.text_alpha;
	agna.ctx.textAlign = 'center';
	
	// TEXT -- Player Scores
	agna.ctx.font = "1.6em Arial Black";
	
	agna.ctx.lineWidth = agna.colors.score.border.width;
	agna.ctx.strokeStyle = agna.colors.score.border.color;
	
	switch (agna.getField('s' + player)) {
		case "0/2":
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 24, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 37, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 53, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 40, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 45, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 58, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 74, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 62, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "1/2":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 24, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 37, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 53, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 40, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 45, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 58, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 74, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 62, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "2/2":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 24, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 37, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 53, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 40, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 45, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 58, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 74, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 62, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			break;
		case "0/3":
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 22, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 35, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 45, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 32, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 36, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 49, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 60, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 47, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 51, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 64, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 75, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 63, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "1/3":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 22, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 35, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 45, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 32, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 36, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 49, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 60, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 47, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 51, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 64, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 75, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 63, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "2/3":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 22, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 35, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 45, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 32, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 36, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 49, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 60, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 47, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 51, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 64, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 75, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 63, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "3/3":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 22, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 35, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 45, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 32, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 36, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 49, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 60, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 47, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 51, agna.ctx.height - 4); // bl
			agna.ctx.lineTo(player_offset + 64, agna.ctx.height - 26); // tl
			agna.ctx.lineTo(player_offset + 75, agna.ctx.height - 26); // tr
			agna.ctx.lineTo(player_offset + 63, agna.ctx.height - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			break;
		default:
			agna.ctx.fillText(agna.getField('s' + player), player_offset + 48, agna.ctx.height - 5);
			break;
	}
	
	drawCharacter(player);
	
	if (player == 2) {
		agna.ctx.scale(-1, 1);
	}
	
	// TEXT - Player Names
	agna.ctx.fillStyle = "white";
    agna.ctx.lineWidth = 5;
	agna.ctx.strokeStyle = "black";
	agna.ctx.globalAlpha = agna.text_alpha;
	agna.ctx.textAlign = 'center';
	agna.ctx.font = "1.8em 'aovel sans'";
	
	
	if (player == 2) {
		agna.ctx.fillText(agna.cleanText(agna.getField('p' + player), 'p' + player), design.stage_e - 250, agna.ctx.height - 9);
	} else {
		agna.ctx.fillText(agna.cleanText(agna.getField('p' + player), 'p' + player), 250, agna.ctx.height - 9);
	}
	
}

function drawCharacter(player) {
	switch (player) {
		case 1:
			// Player 1 Character
			try {
				ch = agna.getImage(1);
				if (agna.base64_p1 == "" || agna.base64_p1 != ch.base64) {
					k1 = new Image();
					k1.src = ch.base64;
					agna.base64_p1 = ch.base64;
				}
				agna.ctx.drawImage(k1, ch.x, ch.y, ch.w * ch.s, ch.h * ch.s);
			} catch(e) {
				// $('html').html(e.toString());
			}
			break;
		case 2:
			// Player 2 Character
			// agna.ctx.scale(-1, 1);
			try {
				ch = agna.getImage(2);
				if (agna.base64_p2 == "" || agna.base64_p2 != ch.base64) {
					k2 = new Image();
					k2.src = ch.base64;
					agna.base64_p2 = ch.base64;
				}
				agna.ctx.drawImage(k2, -design.stage_e + ch.x, ch.y, ch.w * ch.s, ch.h * ch.s);
			} catch(e) {
				// $('html').html(e.toString());
			}
			// agna.ctx.scale(-1, 1);
			break;
	}
}

function drawBorder() {		
	agna.ctx.fillStyle = "blue";
	agna.ctx.beginPath();
	agna.ctx.rect(design.stage_x + design.border.game.l, design.border.game.t, design.stage_w - design.border.game.r - design.border.game.l, agna.ctx.height - design.border.game.b - design.border.game.t);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.fillStyle = "orange";
	agna.ctx.beginPath();
	agna.ctx.rect(design.stage_x + design.stage_w + design.border.camera.l, design.border.camera.t, design.sidebar_w - design.border.camera.l - design.border.camera.r, 170 - design.border.camera.t - design.border.camera.b);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalCompositeOperation = 'source-out';
	agna.ctx.fillStyle = agna.colors.outline.color;
	agna.ctx.beginPath();
	agna.ctx.rect(0,0,agna.ctx.width,agna.ctx.height);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalCompositeOperation = 'source-over';
}

function drawClock() {// TEXT -- Prereq
	agna.ctx.fillStyle = "white";
    agna.ctx.lineWidth = 5;
	agna.ctx.strokeStyle = "black";
	agna.ctx.globalAlpha = agna.text_alpha;
	agna.ctx.textAlign = 'center';
	agna.ctx.font = "1.8em 'aovel sans'";
	
	// TEXT -- Players
	/* agna.ctx.strokeStyle = agna.colors.player_2.color;
	// agna.ctx.strokeText(agna.getField('p2'), design.stage_e - 250, 711);
	agna.ctx.fillText(agna.cleanText(agna.getField('p2'), 'p2'), design.stage_e - 250, 711); */
	
	// TEXT -- Time
	d = new Date();
	var dt = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear().toString().substr(2,2) + " - " + agna.twelveHour(d.getHours()) + ":" + agna.pad(d.getMinutes(), 2, 0);
	if (d.getSeconds() % 2 == 0) {
		dt = dt.replace(":", " ");
	}
	if (d.getHours() >= 12) {
		dt += "p";
	} else {
		dt += "a";
	}
	
	agna.ctx.lineWidth = 5;
	agna.ctx.fillStyle = 'white';
	agna.ctx.strokeStyle = agna.colors.outline.color;
	
	agna.ctx.font = "1.8em Motion Control";
	agna.ctx.strokeText(agna.getField('an'), design.stage_c, agna.ctx.height - 20);
	agna.ctx.font = "1.2em Motion Control";
	agna.ctx.strokeText(dt, design.stage_c, agna.ctx.height - 5);
	agna.ctx.font = "1.8em Motion Control";
	agna.ctx.fillText(agna.getField('an'), design.stage_c, agna.ctx.height - 20);
	agna.ctx.font = "1.2em Motion Control";
	agna.ctx.fillText(dt, design.stage_c, agna.ctx.height - 5);
}

function drawOverlay() {
	switch (design.sidebar.position) {
		case -1:
			design.stage_x = design.sidebar.width;
			break;
		case 0:
			design.stage_x = design.sidebar.width / 2;
			break;
		default:
			design.stage_x = 0;
			break;
	}
	design.stage_w = agna.ctx.width - design.sidebar.width;
	design.stage_c = design.stage_x + (design.stage_w / 2);
	design.stage_e = (design.stage_x + design.stage_w);
	design.sidebar_w = design.sidebar.width;
	
	max_y = agna.OVERLAY_HEIGHT;
	
	agna.ctx.clearRect(0,0,agna.ctx.width,agna.ctx.height)
	agna.ctx.globalAlpha = 1;
	agna.ctx.textAlign = 'center';
	agna.ctx.font = "1.8em 'aovel sans'";
	
	// agna.text_alpha = 1;
	if ((agna.loaded == true) && (agna.text_alpha < 1)) {
		agna.text_alpha = 1;
		agna.text_alpha = agna.text_alpha + 0.1;
		if (agna.text_alpha > 0.9) {
			agna.text_alpha = 1;
		}
	}
	
	var draw_border 		= (design.sections.border) ? drawBorder() : false;
	var draw_top			= (design.sections.topbar) ? drawTop() : false;
	var draw_side 			= (design.sections.sidebar) ? drawSide() : false;
	var draw_commentator 	= (design.sections.commentator) ? drawCommentator() : false;
	var draw_music	 		= (design.sections.music) ? drawMusic() : false;
	var draw_p1				= (design.sections.player_1) ? drawPlayer(1) : false;
	var draw_p2				= (design.sections.player_2) ? drawPlayer(2) : false;
	var draw_clock 			= (design.sections.clock) ? drawClock() : false;
}