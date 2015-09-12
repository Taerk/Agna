/*
* 
*    [][][]      [][][]    []      []    [][][]  
*  []      []  []      []  [][]    []  []      []
*  []      []  []          [] []   []  []      []
*  [][][][][]  []    [][]  []  []  []  [][][][][]
*  []      []  []      []  []   [] []  []      []
*  []      []  []      []  []    [][]  []      []
*  []      []    [][][]    []      []  []      []
* 
*  Name: AgnaControl
*  Version: 1.1.2
*  Updated: 9/12/2015
*  Author: Taerk
*/

/* Creates Agna */
function agnaControl(input_canvas) {	
	try {
		this.canvas = input_canvas;
		this.ctx = this.canvas.getContext("2d");
	} catch (e) {
		alert("Error: Canvas not found.\n\n" + e.toString());
		return false;
	}
	
	this.AGNA_OUTPUT = "agna-output.xml";
	// Overlay resolution
	this.OVERLAY_WIDTH 	= 1280;
	this.OVERLAY_HEIGHT = 720;
	// Canvas will scale to this
	this.WINDOW_WIDTH 	= 1280;
	this.WINDOW_HEIGHT 	= 720;

	this.ctx.width = this.OVERLAY_WIDTH;
	this.ctx.height = this.OVERLAY_HEIGHT;
	
	/* Gradient for score -- used later */
	this.winner_gradient = this.ctx.createLinearGradient(0, this.ctx.height - 26, 0, this.ctx.height - 4);
	this.winner_gradient.addColorStop(0,"#2a2");
	this.winner_gradient.addColorStop(0.8,"#050");
	this.winner_gradient.addColorStop(0.8,"#080");
	this.winner_gradient.addColorStop(1,"#080");
	
	this.rainbow = {
		diff: 1, // Change in color value
		chance: 10, // % to switch direction
		r:{
			d: 1,								// Color value
			v: Math.floor(Math.random() * 256), // Color direction (for randomization)
			min: 0,								// Color increase
			mult: 1.0							// Color multiplier
		},
		g: {
			d: 1,
			v: Math.floor(Math.random() * 256),
			min: 0,
			mult: 0.7
		},
		b: {
			d: 1,
			v: Math.floor(Math.random() * 256),
			min: 0,
			mult: 0.0
		}
	};
	
	/* This is the stuff that you can change and set */
	// CFL Smackdown Color - 147,117,0
	this.colors = {};
	this.colors.color_1			= {color: 'rgb(147,117,0)'};
	this.colors.color_2			= {color: '#222'};
	this.colors.color_3			= {color: '#111'};
	this.colors.color_4			= {color: 'rgb(0,0,0)'};
	this.colors.color_5			= {color: 'rgb(0,0,0)'};
	
	this.colors.outline 		= {color: '#403a30', alpha: 1};
	this.colors.topbar 			= {color: 'rgb(147,117,0)', alpha: 1};
	this.colors.topbar_short 	= {color: '#09f', alpha: 1};
	this.colors.camera_name		= {color: 'rgb(147,117,0)', alpha: 1};
	this.colors.sidebar 		= {color: '#050505', alpha: 1};
	this.colors.sidebar_alt 	= {color: '#000', alpha: 1};
	this.colors.sidebar_c1 		= {color: '#000', alpha: 1};
	this.colors.sidebar_c2 		= {color: '#000', alpha: 1};
	this.colors.players			= {color: '#050505', alpha: 1};
	this.colors.player_1		= {color: 'rgb(147,117,0)', alpha: 1};
	this.colors.player_2		= {color: 'rgb(147,117,0)', alpha: 1};
	this.colors.score			= {};
	this.colors.score.null		= {color: '#222', alpha: 1};
	this.colors.score.winner	= {color: this.winner_gradient, alpha: 1};
	this.colors.score.border 	= {color: 'white', 'width': 2, 'alpha': 0.6}
	this.colors.player 			= []
	this.colors.player[0]		= 'rgb(147,117,0)';		// Classic
	this.colors.player[1]		= 'rgb(' + this.rainbow.r.v + ',' + this.rainbow.g.v + ',' + this.rainbow.b.v + ')'; // Rainbow
	this.colors.player[2]		= 'rgb(147,117,0)';		// Default
	this.colors.player[3]		= 'rgb(73,147,73)';		// Winner
	this.colors.player[4]		= 'rgb(167,73,73)';		// Loser
	this.colors.player[5]		= 'rgb(151,151,151)';	// Light
	this.colors.player[6]		= 'rgb(51,51,51)';		// Dark
	this.colors.player[7]		= 'rgb(153,51,153)';	// Purple
	this.colors.music			= {color: 'rgb(57,117,0)', alpha: 1};
	this.colors.commentator		= {color: 'rgb(147,117,0)', alpha: 1};
	
	/* You might not want to change anything below this */
	this.loading = false; /* Set to true when some ajax is working */
	this.loaded = false; /* Layout information has been loaded at least once */
	this.base64 = {}
	this.base64.p1 = "";
	this.base64.p2 = "";
	this.text_alpha = 0;
	this.content = {};
	this.color_p1 = 0;
	this.color_p2 = 0;
	this.grid = false;
	this.frame = 0;
}

agnaControl.prototype.pad = function(string, amount, padstring, direction) {
	var string;
	var direction;
	string = string.toString();
	if (typeof direction == "undefined") {
		direction = "STR_PAD_LEFT";
	}
	while (string.length < amount) {
		if (direction == "STR_PAD_LEFT") {
			string = padstring + string;
		} else {
			string = string + padstring;
		}
	}
	return string;
};

agnaControl.prototype.twelveHour = function(hour) {
	if (hour == 0) {
		var newtime = 12;
	} else if (hour > 12) {
		var newtime = hour - 12;
	} else {
		var newtime = hour;
	}
	return newtime;
};

agnaControl.prototype.cleanText = function(text, field) {
	var text;
	var field;
	
	if (typeof field != 'undefined') {
		switch (field) {
			case 'p1':
			case 'p2':
			case 'c1':
			case 'c2':
				text = text.replace("[w]", "").replace("[W]", "");
				text = text.replace("[l]", "").replace("[L]", "");
				break;
			case 'ma':
				text = text.replace("win", "Win");
				text = text.replace("Wine", "Winne");
				text = text.replace("los", "Los");
				text = text.replace("rou", "Rou");
				text = text.replace("dn", "nd");
				text = text.replace("semi", "Semi");
				text = text.replace("final", "Final");
				break;
		}
	}
	text = text.trim();
	return text;
};

agnaControl.prototype.loadAgna = function() {
	var _parent = this;
	$('#display').css('background-color', '#ddd');
	if (!this.loading) {
		this.loading = true;
		$('#display').css('background-color', '#cfc');
		$.ajax({
			url : this.AGNA_OUTPUT,
			dataType: "text",
			success : function (data,response) {
				$('#display').css('background-color', '#09f');
				$('#display').animate({'background-color': '#fff'}, 200);
				_parent.content = $.parseXML(data);
				_parent.loaded = true;
				_parent.drawFrame();
			}
		}).always(function() {
			_parent.loading = false;
		});
	}
};

agnaControl.prototype.getField = function(field, raw) {
	if (typeof raw != 'undefined' && raw == true) {
		return $(this.content).find('agna-panel').find('fields').find('main').find('[name="'+field+'"]').text();
	} else {
		return $(this.content).find('output').find(field).text().toString();
	}
};

agnaControl.prototype.getImage = function(player) {
	if (player == 1 || player == 2) {
		if ($(this.content).find('characters').find('player-'+player).length == 1) {
			var temp_char = $(this.content).find('characters').find('player-'+player);
			var character = {};
			character.x = parseInt($(temp_char).find('x').text());
			character.y = parseInt($(temp_char).find('y').text());
			character.w = parseInt($(temp_char).find('w').text());
			character.h = parseInt($(temp_char).find('h').text());
			character.s = parseFloat($(temp_char).find('scale').text());
			if ($(temp_char).find('reverse').text() == "true") {
				character.r = true;
			} else {
				character.r = false;
			}
			character.src = $(temp_char).find('path').text();
			
			if ($(temp_char).find('base64').length == 1) {
				character.base64 = "data:image/png;base64," + $(temp_char).find('base64').text();
				return character;
			} else {
				return {};
			}
		} else {
			return {};
		}
	}
};

agnaControl.prototype.getPlayerColor = function(player) {
	var current_color = 1;
	var get_color = $(this.content).find('agna-panel').find('fields').find('main').find('[name="p'+player+'"]').attr("color");
	if (typeof this.colors.player[parseInt(get_color)] != "undefined") {
		return get_color;
	} else {
		return -1;
	}
	
	return current_color;
};

agnaControl.prototype.drawFrame = function() {
	// Rainbow
	this.rainbow.r.v += (this.rainbow.diff * this.rainbow.r.d);
	this.rainbow.g.v += (this.rainbow.diff * this.rainbow.g.d);
	this.rainbow.b.v += (this.rainbow.diff * this.rainbow.b.d);
	
	this.rainbow.r.d = ((Math.floor(Math.random() * (100 / this.rainbow.chance)) == 0) || this.rainbow.r.v >= 255 || this.rainbow.r.v <= 0) ? this.rainbow.r.d * -1 : this.rainbow.r.d;
	this.rainbow.g.d = ((Math.floor(Math.random() * (100 / this.rainbow.chance)) == 0) || this.rainbow.g.v >= 255 || this.rainbow.g.v <= 0) ? this.rainbow.g.d * -1 : this.rainbow.g.d;
	this.rainbow.b.d = ((Math.floor(Math.random() * (100 / this.rainbow.chance)) == 0) || this.rainbow.b.v >= 255 || this.rainbow.b.v <= 0) ? this.rainbow.b.d * -1 : this.rainbow.b.d;
	
	var rainbow_r = Math.round((this.rainbow.r.v * this.rainbow.r.mult) + this.rainbow.r.min);
	var rainbow_g = Math.round((this.rainbow.g.v * this.rainbow.g.mult) + this.rainbow.g.min);
	var rainbow_b = Math.round((this.rainbow.b.v * this.rainbow.b.mult) + this.rainbow.b.min);
	
	if (rainbow_r > 255) { rainbow_r = 255; } else if (rainbow_r < 0) { rainbow_r = 0; }
	if (rainbow_g > 255) { rainbow_g = 255; } else if (rainbow_g < 0) { rainbow_g = 0; }
	if (rainbow_b > 255) { rainbow_b = 255; } else if (rainbow_b < 0) { rainbow_b = 0; }
	
	this.colors.player[1] = 'rgb(' + rainbow_r + ',' + rainbow_g + ',' + rainbow_b + ')'; // Rainbow
	
	// Set player colors
	this.color_p1 = this.getPlayerColor(1);
	this.color_p2 = this.getPlayerColor(2);
	
	if (this.color_p1 == -1 || !this.color_p2 == -1) {
		agna.ctx.font = "bold 3em monospace";
		agna.ctx.fillStyle = 'red';
		agna.ctx.strokeStyle = 'black';
		agna.ctx.lineWidth = 5;
		agna.ctx.textAlign = 'center';
		agna.ctx.strokeText("Error #4", 640, 300);
		agna.ctx.fillText("Error #4", 640, 300);
		agna.ctx.strokeText("Unable to load player colors", 640, 360);
		agna.ctx.fillText("Unable to load player colors", 640, 360);
	} else {
		drawOverlay();
	}
}

/* jQuery to run on page load */
$(document).ready(function() {	
	if ($('#overlay').length > 0) {
		agna = new agnaControl(document.getElementById("overlay"));
		
		if (typeof agna == 'object') {
			agna.ctx.font = "bold 3em monospace";
			agna.ctx.fillStyle = 'red';
			agna.ctx.strokeStyle = 'black';
			agna.ctx.lineWidth = 5;
			agna.ctx.textAlign = 'center';
		
			$('#overlay').css({
				'max-width': agna.WINDOW_WIDTH,
				'max-height': agna.WINDOW_HEIGHT
			});
			$('#overlay').attr({
				'width': agna.OVERLAY_WIDTH,
				'height': agna.OVERLAY_HEIGHT
			});
			if (agna.grid) {
				$('#overlay').css('background-image', "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAIAAAABc2X6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADISURBVHhe7c+hEcAwAAOx7r9WBmvJz6CCWMTQ98/5yfuTBSv9cwtW+ucWrPTPLVjpn1uw0j+3YKV/bsFK/9yClf65BSv9cwtW+ucWrPTPLVjpn1uw0j+3YKV/bsFK/9yClf65BSv9cwtW+ucWrPTP3RfccnVzC1b65xas9M8tWOmfW7DSP7dgpX9uwUr/3IKV/rkFK/1zC1b65xas9M8tWOmfW7DSP7dgpX9uwUr/3IKV/rkFK/1zC1b65xas9M8tWOmfuyz4nA/9Ju7QXb/SGQAAAABJRU5ErkJggg==')");
			}
		
			$(window).resize(function() {
				$('#overlay').css('margin-top', ($(window).innerHeight() / 2) - (agna.WINDOW_HEIGHT / 2));
			});
			$(window).resize();
				
			if (navigator.userAgent.toString().toLowerCase().indexOf("chrome") == -1 || (navigator.userAgent.toString().toLowerCase().indexOf("chrome") > -1 && navigator.userAgent.toString().toLowerCase().indexOf("xsplit") > -1)) {
				if (typeof drawOverlay == 'function') {
					agna.loadAgna();
					agna.drawFrame();
					agna.auto_draw = setInterval("agna.drawFrame()", 50);
					agna.auto_load = setInterval("agna.loadAgna()", 2000);
				} else {
					agna.ctx.font = "bold 3em monospace";
					agna.ctx.fillStyle = 'red';
					agna.ctx.strokeStyle = 'black';
					agna.ctx.lineWidth = 5;
					agna.ctx.textAlign = 'center';
					
					agna.ctx.strokeText("Error #3", 640, 280);
					agna.ctx.fillText("Error #3", 640, 280);
					agna.ctx.strokeText("drawOverlay() function does not exist.", 640, 340);
					agna.ctx.fillText("drawOverlay() function does not exist.", 640, 340);
					agna.ctx.strokeText("Load an overlay .js file", 640, 400);
					agna.ctx.fillText("Load an overlay .js file", 640, 400);
					agna.ctx.strokeText("There could also be an error in drawOverlay()", 640, 500);
					agna.ctx.fillText("There could also be an error in drawOverlay()", 640, 500);
				}
			} else {
				agna.ctx.font = "bold 3em monospace";
				agna.ctx.fillStyle = 'red';
				agna.ctx.strokeStyle = 'black';
				agna.ctx.lineWidth = 5;
				agna.ctx.textAlign = 'center';
			
				agna.ctx.strokeText("Permanent Error", 640, 280);
				agna.ctx.fillText("Permanent Error", 640, 280);
				agna.ctx.strokeText("Preview not available in Chrome.", 640, 370);
				agna.ctx.fillText("Preview not available in Chrome.", 640, 370);
				agna.ctx.strokeText("This is due to Chrome's security policy.", 640, 430);
				agna.ctx.fillText("This is due to Chrome's security policy.", 640, 430);
				agna.ctx.font = "bold 1.5em monospace";
				agna.ctx.lineWidth = 3;
				agna.ctx.strokeText(navigator.userAgent.toString(), 640, 470);
				agna.ctx.fillText(navigator.userAgent.toString(), 640, 470);
			}
		} else {
			c = document.getElementById("overlay");
			ctx = c.getContext("2d");
			ctx.width = 1280;
			ctx.height = 720;
			
			$('#overlay').css({
				'max-width': 1280,
				'max-height': 720
			});
			$('#overlay').attr({
				'width': 1280,
				'height': 720
			});
			
			ctx.font = "bold 3em monospace";
			ctx.fillStyle = 'red';
			ctx.strokeStyle = 'black';
			ctx.lineWidth = 5;
			ctx.textAlign = 'center';
			
			ctx.strokeText("Error #2", 640, 300);
			ctx.fillText("Error #2", 640, 300);
			ctx.strokeText("agna object not created", 640, 360);
			ctx.fillText("agna object not created", 640, 360);
		}
	} else {
		$('body').html('<div style="color: black; text-align: center"><h2>Error #1</h2><h2>#overlay does not exist</h2></div>');
	}
});