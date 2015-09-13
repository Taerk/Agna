/*
*  Name: Smackdown
*  Version: 1.1.2
*  Updated: 9/12/2015
*  Author: Taerk
*/

var logo;

/* Design settings */
design = {}

design.sections = {};
design.sections.border 		= true;
design.sections.commentator = true;
design.sections.music 		= true;
design.sections.player_1	= true;
design.sections.player_2	= true;
design.sections.clock 		= true;

design.game = {
	enabled: true,
	border: {
		top: 35,
		bottom: 25,
		left: 20,
		right: 20
	},
};
design.topbar = {
	enabled: true,
	design: 1, // 0 - Standard; 1 - CFL Smackdown
	logo: "images/logos/cfl-smackdown-werstle/cfl-smash-melee-positive-white-188x55.png"
};
design.players = {
	adjust_x: 20,
	adjust_y: 0
};
design.sidebar = {
	enabled: true,
	width: 280,
	padding: 5,
	position: 1, // [BROKEN] -1 - left side; 0 - center; 1 - right side
	center_in_border: true,
	border: {
		top: 5,
		bottom: 0,
		left: 0,
		right: 10
	},
	commentary: {
		enabled: true,
		height: 25,
		icon: 0 // 0 - Headset; 1 - Mic
	},
	music: {
		enabled: true,
		split: '--',
		_section: 0,
		_switch_time: 0,
		_switch_time_max: 0
	}
};
design.ticker = {
	enabled: true,
	height: 25
};
design.clock = {
	enabled: true,
	adjust_y: 0
}

design._stage_x = -1; // Game starting x
design._stage_w = -1; // Game width
design._stage_c = -1; // Game center line
design._stage_e = -1; // Game end x
design._stage_h = -1; // Game height
design._sidebar_w = -1;

function drawTop() {	
	if (agna.getPlayerColor(1) > 0 && agna.getPlayerColor(2) > 0) {
		// Tournament bar outline
		agna.ctx.fillStyle = agna.colors.outline.color;
		agna.ctx.globalAlpha = agna.colors.outline.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_x + 40, 0);
		agna.ctx.lineTo(design._stage_x + 78, 44);
		agna.ctx.lineTo(design._stage_x + 105, 44);
		agna.ctx.lineTo(design._stage_x + 110, 47);
		agna.ctx.lineTo(design._stage_e - 110, 47);
		agna.ctx.lineTo(design._stage_e - 105, 44);
		agna.ctx.lineTo(design._stage_e - 78, 44);
		agna.ctx.lineTo(design._stage_e - 40, 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// ev
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_x + 78, 0);
		agna.ctx.lineTo(design._stage_x + 110, 40);
		agna.ctx.lineTo(design._stage_x + (design._stage_w / 2), 40);
		agna.ctx.lineTo(design._stage_x + (design._stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_x + 108, 0);
		agna.ctx.lineTo(design._stage_x + 140, 40);
		agna.ctx.lineTo(design._stage_x + (design._stage_w / 2), 40);
		agna.ctx.lineTo(design._stage_x + (design._stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = (agna.colors.topbar.alpha / 2);
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_x + 98, 0);
		agna.ctx.lineTo(design._stage_x + 130, 40);
		agna.ctx.lineTo(design._stage_x + (design._stage_w / 2), 40);
		agna.ctx.lineTo(design._stage_x + (design._stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_x + 76, 3);
		agna.ctx.lineTo(design._stage_x + 103, 37);
		agna.ctx.lineTo(design._stage_x + 96, 37);
		agna.ctx.lineTo(design._stage_x + 69, 3);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// ma
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_e - 78, 0);
		agna.ctx.lineTo(design._stage_e - 110, 40);
		agna.ctx.lineTo((design._stage_w / 2), 40);
		agna.ctx.lineTo((design._stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_e - 108, 0);
		agna.ctx.lineTo(design._stage_e - 140, 40);
		agna.ctx.lineTo((design._stage_w / 2), 40);
		agna.ctx.lineTo((design._stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = (agna.colors.topbar.alpha / 2);
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_e - 98, 0);
		agna.ctx.lineTo(design._stage_e - 130, 40);
		agna.ctx.lineTo((design._stage_w / 2), 40);
		agna.ctx.lineTo((design._stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_e - 76, 3);
		agna.ctx.lineTo(design._stage_e - 103, 37);
		agna.ctx.lineTo(design._stage_e - 96, 37);
		agna.ctx.lineTo(design._stage_e - 69, 3);
		agna.ctx.closePath();
		agna.ctx.fill();
	} else {
		// Tournament bar outline
		agna.ctx.fillStyle = agna.colors.outline.color;
		agna.ctx.globalAlpha = agna.colors.outline.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_x + 40, 0);
		agna.ctx.lineTo(design._stage_x + 80,45);
		agna.ctx.lineTo(design._stage_e - 80, 45);
		agna.ctx.lineTo(design._stage_e - 40, 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// ev
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_x + 78, 0);
		agna.ctx.lineTo(design._stage_x + 110,40);
		agna.ctx.lineTo(design._stage_x + (design._stage_w / 2), 40);
		agna.ctx.lineTo(design._stage_x + (design._stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// ma
		agna.ctx.fillStyle = agna.colors.topbar.color;
		agna.ctx.globalAlpha = agna.colors.topbar.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(design._stage_e - 78, 0);
		agna.ctx.lineTo(design._stage_e - 110,40);
		agna.ctx.lineTo((design._stage_w / 2), 40);
		agna.ctx.lineTo((design._stage_w / 2), 0);
		agna.ctx.closePath();
		agna.ctx.fill();
	}
	
	switch (design.topbar.design) {
		case 1: // CFL Smackdown
		case 3: // CFL Smackdown (alt)
			agna.ctx.globalAlpha = 1;
			agna.ctx.fillStyle = agna.colors.outline.color;
			
			if (typeof logo == 'undefined') {
				logo = new Image();
				logo.src = design.topbar.logo;
			}
			logo.scale = 1;
			
			var d = { // Logo dimensions
				width: logo.width * logo.scale,
				height: logo.height * logo.scale
			};
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(design._stage_c - (d.width / 2) - 8, 0);
			agna.ctx.lineTo(design._stage_c - (d.width / 2) - 8, d.height - (13 * logo.scale));
			agna.ctx.lineTo(design._stage_c - (d.width / 2) + (16 * logo.scale), d.height + 5);
			agna.ctx.lineTo(design._stage_c + (d.width / 2) + 4, d.height + 5);
			agna.ctx.lineTo(design._stage_c + (d.width / 2) + 8, d.height);
			agna.ctx.lineTo(design._stage_c + (d.width / 2) + 8, 0);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.drawImage(logo, design._stage_c - (d.width / 2), 2, d.width, d.height);
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
			agna.ctx.lineTo(450, 50);
			agna.ctx.lineTo(580, 50);
			agna.ctx.lineTo(600, 0);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			
			// Short tournament bar - left side
			agna.ctx.fillStyle = '#056';
			agna.ctx.globalAlpha = 1;
			agna.ctx.beginPath();
			agna.ctx.moveTo(420, 0);
			agna.ctx.lineTo(437, 40);
			agna.ctx.lineTo((design._stage_w / 2), 40);
			agna.ctx.lineTo((design._stage_w / 2), 0);
			agna.ctx.closePath();
			agna.ctx.fill();
			
			// Short tournament bar - right side
			agna.ctx.fillStyle = '#056';
			agna.ctx.globalAlpha = 1;
			agna.ctx.beginPath();
			agna.ctx.moveTo((design._stage_w / 2), 0);
			agna.ctx.lineTo((design._stage_w / 2),40);
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
		agna.ctx.fillText(agna.getField('ev'), ((design._stage_c - 10) + 55) / 2, 30, design._stage_c - 215);
		agna.ctx.fillText(agna.cleanText(agna.getField('ma'), 'ma'), ((design._stage_c + 10) + (design._stage_e - 55)) / 2, 30, design._stage_c - 215);
	} else {
		agna.ctx.fillText(agna.getField('ev'), ((design._stage_c - 10) + 40) / 2, 30, design._stage_c - 200);
		agna.ctx.fillText(agna.cleanText(agna.getField('ma'), 'ma'), ((design._stage_c + 10) + (design._stage_e - 40)) / 2, 30, design._stage_c - 200);
	}
	
}

function drawSide() {
	// Sidebar
	agna.ctx.lineWidth = 0;
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.sidebar.color;
	
	// Main background
	agna.ctx.beginPath();
	if (design.sidebar.center_in_border) {
		agna.ctx.rect(design._stage_e, 170, design._sidebar_w - design.sidebar.border.right, agna.ctx.height);
	} else {
		agna.ctx.rect(design._stage_e, 170, design._sidebar_w, agna.ctx.height);
	}
	agna.ctx.closePath();
	agna.ctx.fill();
	
	// Player names background
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.sidebar_alt.color;
	agna.ctx.beginPath();
	if (design.sidebar.center_in_border) {
		agna.ctx.rect(design._stage_e - design.game.border.right, 170, 250 + design.sidebar.border.right, 53);
	} else {
		agna.ctx.rect(design._stage_e, 170, 250, 53);
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
	if (design.sidebar.center_in_border) {
		agna.ctx.moveTo(design._stage_e - design.game.border.right, 171);
		agna.ctx.lineTo(agna.ctx.width - 40 - design.game.border.right, 171);
		agna.ctx.lineTo(agna.ctx.width - 15 - design.game.border.right, 196);
		agna.ctx.lineTo(design._stage_e - design.game.border.right, 196);
		agna.ctx.closePath();
	} else {
		agna.ctx.moveTo(design._stage_e, 171);
		agna.ctx.lineTo(agna.ctx.width - 40, 171);
		agna.ctx.lineTo(agna.ctx.width - 15, 196);
		agna.ctx.lineTo(design._stage_e, 196);
		agna.ctx.closePath();
	}
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.sidebar_c1.color;
	agna.ctx.beginPath();
	if (design.sidebar.center_in_border) {
		agna.ctx.moveTo(design._stage_e - design.game.border.right, 175);
		agna.ctx.lineTo(agna.ctx.width - 42 - design.game.border.right, 175);
		agna.ctx.lineTo(agna.ctx.width - 26 - design.game.border.right, 192);
		agna.ctx.lineTo(design._stage_e - design.game.border.right, 192);
	} else {
		agna.ctx.moveTo(design._stage_e, 175);
		agna.ctx.lineTo(agna.ctx.width - 42, 175);
		agna.ctx.lineTo(agna.ctx.width - 26, 192);
		agna.ctx.lineTo(design._stage_e, 192);
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
	agna.ctx.lineTo(design._stage_e + 40, 197);
	agna.ctx.lineTo(design._stage_e + 15, 222);
	agna.ctx.lineTo(agna.ctx.width, 222);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = agna.colors.sidebar_c2.color;
	agna.ctx.beginPath();
	agna.ctx.moveTo(agna.ctx.width, 201);
	agna.ctx.lineTo(design._stage_e + 42, 201);
	agna.ctx.lineTo(design._stage_e + 26, 218);
	agna.ctx.lineTo(agna.ctx.width, 218);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = agna.text_alpha;
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.font = "bold 1em Arial";
	agna.ctx.fillText(agna.cleanText(agna.getField('c1'), 'c1'), design._stage_e + (design._sidebar_w / 2) - 21, 189, design._sidebar_w - 42 - design.sidebar.padding);
	agna.ctx.fillText(agna.cleanText(agna.getField('c2'), 'c2'), design._stage_e + (design._sidebar_w / 2) + 21, 215, design._sidebar_w - 42 - design.sidebar.padding);
}

function drawMusic() {
	// Music
	if (typeof music_icon == 'undefined') {
		music_icon = new Image();
		music_icon.src = "images/icon_music.png";
	}
	
	if (agna.cleanText(agna.getField('mu')) != "") {
		music_field = agna.getField('mu').replace(" - ", " -- ");
		if (music_field.indexOf(design.sidebar.music.split) > -1) {
			
			agna.ctx.fillStyle = agna.colors.music.color;
			agna.ctx.globalAlpha = agna.colors.music.alpha;
			agna.ctx.beginPath();
			if (design.sidebar.center_in_border) {
				agna.ctx.rect(design._stage_e, max_y - 50, design._sidebar_w - design.sidebar.border.right, 25);
			} else {
				agna.ctx.rect(design._stage_e, max_y - 50, design._sidebar_w, 25);
			}
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.music.color;
			agna.ctx.globalAlpha = agna.colors.music.alpha / 2;
			agna.ctx.beginPath();
			if (design.sidebar.center_in_border) {
				agna.ctx.rect(design._stage_e, max_y - 25, design._sidebar_w - design.sidebar.border.right, 25);
			} else {
				agna.ctx.rect(design._stage_e, max_y - 25, design._sidebar_w, 25);
			}
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.music.color;
			agna.ctx.globalAlpha = agna.colors.music.alpha;
			agna.ctx.beginPath();
			agna.ctx.moveTo(design._stage_e, max_y - 25);
			agna.ctx.lineTo(design._stage_e + 25, max_y - 25);
			agna.ctx.lineTo(design._stage_e + 10, max_y);
			agna.ctx.lineTo(design._stage_e, max_y);
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
			if (design.sidebar.music__switch_time == design.sidebar.music__switch_time_max) {
				design.sidebar.music__switch_time = 0;
				design.sidebar.music._switch++;
			} else {
				design.sidebar.music__switch_time++;
			}
			
			if (design.sidebar.music._switch >= split_music.length - 1) {
				design.sidebar.music._switch = 0;
			}
			
			if (design.sidebar.center_in_border) {
				agna.ctx.fillText(agna.cleanText(split_music[design.sidebar.music._section].trim()), design._stage_e + ((design._sidebar_w + 25) / 2) - (design.sidebar.border.right / 2), max_y - 33, design._sidebar_w - 25 - design.sidebar.padding - design.sidebar.border.right);
				agna.ctx.fillText(agna.cleanText(split_music[split_music.length - 1].trim()), design._stage_e + ((design._sidebar_w + 25) / 2), max_y - 8, design._sidebar_w - 25 - design.sidebar.padding - design.sidebar.border.right);
			} else {
				agna.ctx.fillText(agna.cleanText(split_music[design.sidebar.music._section].trim()), design._stage_e + ((design._sidebar_w + 25) / 2) - (design.sidebar.border.right / 2), max_y - 33, design._sidebar_w - 25 - design.sidebar.padding);
				agna.ctx.fillText(agna.cleanText(split_music[split_music.length - 1].trim()), design._stage_e + ((design._sidebar_w + 25) / 2), max_y - 8, design._sidebar_w - 25 - design.sidebar.padding);
			}
			
			agna.ctx.drawImage(music_icon, design._stage_e, max_y - 40);
		} else {
			agna.ctx.fillStyle = agna.colors.music.color;
			agna.ctx.globalAlpha = agna.colors.music.alpha;
			agna.ctx.beginPath();
			if (design.sidebar.center_in_border) {
				agna.ctx.rect(design._stage_e, max_y - 25, design._sidebar_w - design.sidebar.border.right, 25);
			} else {
				agna.ctx.rect(design._stage_e, max_y - 25, design._sidebar_w, 25);
			}
			agna.ctx.closePath();
			agna.ctx.fill();
			
			agna.ctx.globalAlpha = 1;
			
			agna.ctx.fillStyle = 'white';
			agna.ctx.font = "bold 1em Arial";
			agna.ctx.fillText(agna.cleanText(agna.getField('mu')), design._stage_e + ((design._sidebar_w + 25) / 2), max_y - 8, design._sidebar_w - 25 - design.sidebar.padding);
			
			agna.ctx.drawImage(music_icon, design._stage_e, max_y - 25);
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
	if (design.sidebar.center_in_border) {
		agna.ctx.rect(design._stage_e, agna.ctx.height - 25, design._sidebar_w - design.sidebar.border.right, 25);
	} else {
		agna.ctx.rect(design._stage_e, agna.ctx.height - 25, design._sidebar_w, 25);
	}
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalAlpha = 1;
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.font = "bold 1em Arial";
	if (design.sidebar.center_in_border) {
		agna.ctx.fillText(agna.cleanText(agna.getField('co')), design._stage_e + ((design._sidebar_w + 25) / 2) - (design.sidebar.border.right / 2), agna.ctx.height - 8, design._sidebar_w - 25 - design.sidebar.padding - design.sidebar.border.right);
	} else {
		agna.ctx.fillText(agna.cleanText(agna.getField('co')), design._stage_e + ((design._sidebar_w + 25) / 2), agna.ctx.height - 8, design._sidebar_w - 25 - design.sidebar.padding);
	}
	
	agna.ctx.drawImage(commentator_icon, design._stage_e, agna.ctx.height - 25);
	
	max_y -= 25; // Bumps up the "Music" portion
}

function drawPlayer(player) {
	player_offset = 0;
	
	if (player == 2) {
		agna.ctx.scale(-1, 1);
		player_offset = -design._stage_e;
	}
	
	// Player 1 Bar
	if (agna.getPlayerColor(player) > 1) {
		agna.ctx.fillStyle = agna.colors.outline.color;
		agna.ctx.globalAlpha = agna.colors.outline.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 15, design._stage_h);
		agna.ctx.lineTo(player_offset + 33, design._stage_h - 30);
		agna.ctx.lineTo(player_offset + 74, design._stage_h - 30);
		agna.ctx.lineTo(player_offset + 80, design._stage_h - 40);
		agna.ctx.lineTo(player_offset + 425, design._stage_h - 40);
		agna.ctx.lineTo(player_offset + 428, design._stage_h - 36);
		agna.ctx.lineTo(player_offset + 435, design._stage_h - 36);
		agna.ctx.lineTo(player_offset + 457, design._stage_h);
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
		agna.ctx.moveTo(player_offset + 65, design._stage_h);
		agna.ctx.lineTo(player_offset + 85, design._stage_h - 35);
		agna.ctx.lineTo(player_offset + 420, design._stage_h - 35);
		agna.ctx.lineTo(player_offset + 440, design._stage_h);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// Off-piece
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 442, design._stage_h - 2);	// Bottom-left
		agna.ctx.lineTo(player_offset + 425, design._stage_h - 30); 	// Top-left
		agna.ctx.lineTo(player_offset + 430, design._stage_h - 30); 	// Top-right
		agna.ctx.lineTo(player_offset + 447, design._stage_h - 2); 	// Bottom-right
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// Shadow
		agna.ctx.fillStyle = agna.colors.score.null.color;
		agna.ctx.globalAlpha = agna.colors.score.null.alpha / 2;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 70, design._stage_h);			// Bottom-left
		agna.ctx.lineTo(player_offset + 90, design._stage_h - 20);
		agna.ctx.lineTo(player_offset + 76, design._stage_h - 20);
		agna.ctx.lineTo(player_offset + 85, design._stage_h - 35);
		agna.ctx.lineTo(player_offset + 90, design._stage_h - 35);	// Top-left
		agna.ctx.lineTo(player_offset + 405, design._stage_h - 35);	// Top-right
		agna.ctx.lineTo(player_offset + 425, design._stage_h);		// Bottom-right
		agna.ctx.closePath();
		agna.ctx.fill();
		
		// Dark Bar
		agna.ctx.fillStyle = agna.colors.players.color;
		agna.ctx.globalAlpha = agna.colors.players.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 70, design._stage_h);
		agna.ctx.lineTo(player_offset + 90, design._stage_h - 35);
		agna.ctx.lineTo(player_offset + 395, design._stage_h - 35);
		agna.ctx.lineTo(player_offset + 415, design._stage_h);
		agna.ctx.closePath();
		agna.ctx.fill();
	} else {
		agna.ctx.fillStyle = agna.colors.outline.color;
		agna.ctx.globalAlpha = agna.colors.outline.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 15, design._stage_h);
		agna.ctx.lineTo(player_offset + 33, design._stage_h - 30);
		agna.ctx.lineTo(player_offset + 60, design._stage_h - 30);
		agna.ctx.lineTo(player_offset + 66, design._stage_h - 40);
		agna.ctx.lineTo(player_offset + 440, design._stage_h - 40);
		agna.ctx.lineTo(player_offset + 465, design._stage_h);
		agna.ctx.closePath();
		agna.ctx.fill();
		
		agna.ctx.fillStyle = agna.colors.player_1.color;
		agna.ctx.globalAlpha = agna.colors.player_1.alpha;
		agna.ctx.beginPath();
		agna.ctx.moveTo(player_offset + 65, design._stage_h);
		agna.ctx.lineTo(player_offset + 85, design._stage_h - 35);
		agna.ctx.lineTo(player_offset + 420, design._stage_h - 35);
		agna.ctx.lineTo(player_offset + 440, design._stage_h);
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
			agna.ctx.moveTo(player_offset + 24, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 37, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 53, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 40, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 45, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 58, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 74, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 62, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "1/2":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 24, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 37, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 53, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 40, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 45, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 58, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 74, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 62, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "2/2":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 24, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 37, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 53, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 40, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 45, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 58, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 74, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 62, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			break;
		case "0/3":
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 22, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 35, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 45, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 32, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 36, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 49, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 60, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 47, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 51, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 64, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 75, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 63, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "1/3":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 22, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 35, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 45, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 32, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 36, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 49, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 60, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 47, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 51, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 64, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 75, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 63, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "2/3":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 22, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 35, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 45, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 32, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 36, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 49, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 60, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 47, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.fillStyle = agna.colors.score.null.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 51, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 64, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 75, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 63, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.null.alpha;
			agna.ctx.fill();
			break;
		case "3/3":
			agna.ctx.fillStyle = agna.colors.score.winner.color;
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 22, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 35, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 45, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 32, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 36, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 49, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 60, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 47, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			
			agna.ctx.beginPath();
			agna.ctx.moveTo(player_offset + 51, design._stage_h - 4); // bl
			agna.ctx.lineTo(player_offset + 64, design._stage_h - 26); // tl
			agna.ctx.lineTo(player_offset + 75, design._stage_h - 26); // tr
			agna.ctx.lineTo(player_offset + 63, design._stage_h - 4); // br
			agna.ctx.closePath();
			agna.ctx.globalAlpha = agna.colors.score.border.alpha;
			agna.ctx.stroke();
			agna.ctx.globalAlpha = agna.colors.score.winner.alpha;
			agna.ctx.fill();
			break;
		default:
			agna.ctx.fillText(agna.getField('s' + player), player_offset + 48, design._stage_h - 5);
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
		agna.ctx.fillText(agna.cleanText(agna.getField('p' + player), 'p' + player), design._stage_e - 250, design._stage_h - 9);
	} else {
		agna.ctx.fillText(agna.cleanText(agna.getField('p' + player), 'p' + player), 250, design._stage_h - 9);
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
				agna.ctx.drawImage(k2, -design._stage_e + ch.x, ch.y, ch.w * ch.s, ch.h * ch.s);
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
	agna.ctx.rect(design._stage_x + design.game.border.left, design.game.border.top, design._stage_w - design.game.border.right - design.game.border.left, agna.ctx.height - design.game.border.bottom - design.game.border.top);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	if (design.sidebar.enabled) {
		agna.ctx.fillStyle = "orange";
		agna.ctx.beginPath();
		agna.ctx.rect(design._stage_x + design._stage_w + design.sidebar.border.left, design.sidebar.border.top, design._sidebar_w - design.sidebar.border.left - design.sidebar.border.right, 170 - design.sidebar.border.top - design.sidebar.border.bottom);
		agna.ctx.closePath();
		agna.ctx.fill();
	}
	
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
	// agna.ctx.strokeText(agna.getField('p2'), design._stage_e - 250, 711);
	agna.ctx.fillText(agna.cleanText(agna.getField('p2'), 'p2'), design._stage_e - 250, 711); */
	
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
	agna.ctx.strokeText(agna.getField('an'), design._stage_c, design._stage_h - 20 + design.clock.adjust_y);
	agna.ctx.font = "1.2em Motion Control";
	agna.ctx.strokeText(dt, design._stage_c, design._stage_h - 5 + design.clock.adjust_y);
	agna.ctx.font = "1.8em Motion Control";
	agna.ctx.fillText(agna.getField('an'), design._stage_c, design._stage_h - 20 + design.clock.adjust_y);
	agna.ctx.font = "1.2em Motion Control";
	agna.ctx.fillText(dt, design._stage_c, design._stage_h - 5 + design.clock.adjust_y);
}

function drawOverlay() {
	switch (design.sidebar.position) {
		case -1:
			design._stage_x = design.sidebar.width;
			break;
		case 0:
			design._stage_x = design.sidebar.width / 2;
			break;
		default:
			design._stage_x = 0;
			break;
	}
	design._sidebar_w = (design.sidebar.enabled) ? design.sidebar.width : 0;
	design._stage_w = agna.ctx.width - design._sidebar_w;
	design._stage_c = design._stage_x + (design._stage_w / 2);
	design._stage_e = design._stage_x + design._stage_w;
	design._stage_h = agna.ctx.height + design.players.adjust_y;
	
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
	var draw_top			= (design.topbar.enabled) ? drawTop() : false;
	var draw_side 			= (design.sidebar.enabled) ? drawSide() : false;
	var draw_commentator 	= (design.sidebar.enabled && design.sidebar.commentary.enabled) ? drawCommentator() : false;
	var draw_music	 		= (design.sidebar.enabled && design.sidebar.music.enabled) ? drawMusic() : false;
	var draw_p1				= (design.sections.player_1) ? drawPlayer(1) : false;
	var draw_p2				= (design.sections.player_2) ? drawPlayer(2) : false;
	var draw_clock 			= (design.sections.clock) ? drawClock() : false;
}