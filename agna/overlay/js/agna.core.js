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
*  Version: 1.1.6
*  Updated: 11/30/15
*  Author: Taerk
*/

/* Creates Agna */
function agnaControl(input_canvas) {
	_root = this;
	this.DEBUG = true;
	this.GRID = false;
	this.AGNA_OUTPUT = "agna-output.xml";
	// Overlay resolution
	this.OVERLAY_WIDTH 	= 1280;
	this.OVERLAY_HEIGHT = 720;
	// Canvas will scale to this
	this.WINDOW_WIDTH 	= 1280;
	this.WINDOW_HEIGHT 	= 720;
	this.OUTLINE_IN_BROWSER = true;
	this.DRAW_INTERVAL = 50;
	this.LOAD_INTERVAL = 2000;
	
	try {
		this.canvas = input_canvas;
		this.ctx = this.canvas.getContext("2d");
	} catch (e) {
		if (this.DEBUG) {
			alert("Error: Canvas not found.\n\n" + e.toString());
		}
		return false;
	}

	this.ctx.width = this.OVERLAY_WIDTH;
	this.ctx.height = this.OVERLAY_HEIGHT;
	this.colors = new agnaColor(this.ctx);
	
	/* You might not want to change anything below this */
	this.loading = false; /* Set to true when some ajax is working */
	this.loaded = false; /* Layout information has been loaded at least once */
	this.last = {}
	this.last.baseP1 = "";
	this.last.baseP2 = "";
	this.last.imgP1 = "";
	this.last.imgP2 = "";
	this.text_alpha = 0;
	this.content = {};
	this.color_p1 = 0;
	this.color_p2 = 0;
	this.frame = 0;
	
	if (typeof colors != 'undefined') {
		$.each(colors, function(key,val) {
			_root.colors[key] = val;
		});
	}
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
			case 'cam1':
			case 'cam2':
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
			case 'tw':
			case 'tw1':
			case 'tw2':
				if (text.trim() == "") {
					text = "";
				} else {
					text = ("@" + text);
				}
				break;
			case 'co':
				if (
					(text.indexOf(this.getField('co1')) == -1 || text.indexOf(this.getField('co2')) == -1)
					|| (this.getField('co1').trim() == "" || this.getField('co2').trim() == "")
				) {
					text = text.replace('+', '');
				}
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

agnaControl.prototype.getPlayerColor = function(player, alpha) {
	var get_color = $(this.content).find('agna-panel').find('fields').find('main').find('[name="p'+player+'"]').attr("color");
	
	if (typeof alpha == 'undefined') {
		alpha = 1;
	}

	switch (true) {
		case (typeof get_color == "undefined"):
			if (typeof this.colors.player['default'] != 'undefined') {
				return this.colors.player['default'].replace("rgb(", "rgba(").replace(")", "," + alpha + ")");
			} else {
				return 'rgba(0,0,0,' + alpha + ')';
			}
			break;
		case (typeof this.colors.player[get_color] != "undefined"):
			return this.colors.player[get_color].replace("rgb(", "rgba(").replace(")", "," + alpha + ")");
			break;
		case (get_color.length == 7 && get_color[0] == "#"):
			return get_color;
			break;
		default:
			if (typeof this.colors.player['default'] != 'undefined') {
				return this.colors.player['default'].replace("rgb(", "rgba(").replace(")", "," + alpha + ")");
			} else {
				return 'rgba(0,0,0' + alpha + ')';
			}
			break;
	}
};

agnaControl.prototype.drawFrame = function() {
	// Rainbow
	this.colors.rainbow.r.v += (this.colors.rainbow.diff * this.colors.rainbow.r.d);
	this.colors.rainbow.g.v += (this.colors.rainbow.diff * this.colors.rainbow.g.d);
	this.colors.rainbow.b.v += (this.colors.rainbow.diff * this.colors.rainbow.b.d);
	
	this.colors.rainbow.r.d = ((Math.floor(Math.random() * (100 / this.colors.rainbow.chance)) == 0) || this.colors.rainbow.r.v >= 255 || this.colors.rainbow.r.v <= 0) ? this.colors.rainbow.r.d * -1 : this.colors.rainbow.r.d;
	this.colors.rainbow.g.d = ((Math.floor(Math.random() * (100 / this.colors.rainbow.chance)) == 0) || this.colors.rainbow.g.v >= 255 || this.colors.rainbow.g.v <= 0) ? this.colors.rainbow.g.d * -1 : this.colors.rainbow.g.d;
	this.colors.rainbow.b.d = ((Math.floor(Math.random() * (100 / this.colors.rainbow.chance)) == 0) || this.colors.rainbow.b.v >= 255 || this.colors.rainbow.b.v <= 0) ? this.colors.rainbow.b.d * -1 : this.colors.rainbow.b.d;
	
	var rainbow_r = Math.round((this.colors.rainbow.r.v * this.colors.rainbow.r.mult) + this.colors.rainbow.r.min);
	var rainbow_g = Math.round((this.colors.rainbow.g.v * this.colors.rainbow.g.mult) + this.colors.rainbow.g.min);
	var rainbow_b = Math.round((this.colors.rainbow.b.v * this.colors.rainbow.b.mult) + this.colors.rainbow.b.min);
	
	if (rainbow_r > 255) { rainbow_r = 255; } else if (rainbow_r < 0) { rainbow_r = 0; }
	if (rainbow_g > 255) { rainbow_g = 255; } else if (rainbow_g < 0) { rainbow_g = 0; }
	if (rainbow_b > 255) { rainbow_b = 255; } else if (rainbow_b < 0) { rainbow_b = 0; }
	
	this.colors.player['rainbow'] = 'rgb(' + rainbow_r + ',' + rainbow_g + ',' + rainbow_b + ')'; // Rainbow
	
	drawOverlay();
}

agnaControl.prototype.changeDrawInterval = function(interval) {
	if (typeof this.auto_draw != 'undefined') {
		if (interval != this.DRAW_INTERVAL) {
			// console.log("Changed draw interval to " + interval);
			this.DRAW_INTERVAL = interval;
			clearInterval(this.auto_draw);
			this.auto_draw = setInterval("agna.drawFrame()", interval);
		}
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
				
			if (
				navigator.userAgent.toString().toLowerCase().indexOf("chrome") == -1 ||
				(navigator.userAgent.toString().toLowerCase().indexOf("chrome") > -1 && navigator.userAgent.toString().toLowerCase().indexOf("xsplit") > -1) ||
				(navigator.userAgent.toString().toLowerCase().indexOf("chrome") > -1 && navigator.userAgent.toString().toLowerCase().indexOf("safari") > -1)
			) {
				if (typeof drawOverlay == 'function') {
					agna.drawFrame();
					agna.loadAgna();
					agna.auto_draw = setInterval("agna.drawFrame()", agna.DRAW_INTERVAL);
					agna.auto_load = setInterval("agna.loadAgna()", agna.LOAD_INTERVAL);
					
					if (navigator.userAgent.toString().toLowerCase().indexOf("firefox")) {
						$('#overlay').css('border', '1px solid black');
					}
				} else {
					agna.ctx.font = "bold 3em monospace";
					agna.ctx.fillStyle = 'red';
					agna.ctx.strokeStyle = 'black';
					agna.ctx.lineWidth = 5;
					agna.ctx.textAlign = 'center';
					
					if (agna.DEBUG) {
						agna.ctx.strokeText("Error #3", 640, 280);
						agna.ctx.fillText("Error #3", 640, 280);
						agna.ctx.strokeText("drawOverlay() function does not exist.", 640, 340);
						agna.ctx.fillText("drawOverlay() function does not exist.", 640, 340);
						agna.ctx.strokeText("Load an overlay .js file", 640, 400);
						agna.ctx.fillText("Load an overlay .js file", 640, 400);
						agna.ctx.strokeText("There could also be an error in drawOverlay()", 640, 500);
						agna.ctx.fillText("There could also be an error in drawOverlay()", 640, 500);
					}
				}
			} else {
				agna.ctx.font = "bold 3em monospace";
				agna.ctx.fillStyle = 'red';
				agna.ctx.strokeStyle = 'black';
				agna.ctx.lineWidth = 5;
				agna.ctx.textAlign = 'center';
			
				if (agna.DEBUG) {
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
		if (agna.DEBUG) {
			$('body').html('<div style="color: black; text-align: center"><h2>Error #1</h2><h2>#overlay does not exist</h2></div>');
		}
	}
});