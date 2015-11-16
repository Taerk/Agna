$(document).ready(function() {
	c = document.getElementById("overlay");
	ctx = c.getContext("2d");

	w = 20;
	h = 20;
	canvas_width = 1280;
	canvas_height = 720;
	canvas_box_num_x = canvas_width / w;
	canvas_box_num_y = canvas_height / h;
	
	c.width = canvas_width;
	c.height = canvas_height;
	
	differences = {};
	
	red = {
		 2: [ 27, 28, 29 ],
		 3: [ 27, 28, 29, 30, 31, 32, 33 ],
		 4: [ 28, 29, 30, 31, 32, 33, 34, 35, 36, 37 ],
		 5: [ 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 50, 51, 52 ],
		 6: [ 28, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 50, 51, 52 ],
		 7: [ 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52 ],
		 8: [ 36, 37, 38, 39, 40, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52 ],
		 9: [ 36, 37, 38, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53 ],
		10: [ 44, 45, 46, 47, 48, 49, 50, 51, 52, 53 ],
		11: [ 45, 46, 47, 48, 49, 50, 51, 52, 53 ],
		12: [ 46, 47, 48, 49, 50, 51, 52, 53 ],
		13: [ 47, 48, 49, 50, 51, 52, 53, 54 ],
		14: [ 47, 48, 49, 50, 51, 52, 53, 54, 55 ],
		15: [ 47, 48, 49, 50, 51, 52, 53, 54, 55, 56 ],
		16: [ 47, 48, 49, 50, 51, 52, 53, 54, 55 ],
		17: [ 47, 48, 49, 50, 51, 52, 53, 54, 55 ],
		18: [ 47, 48, 49, 50, 51, 52, 53, 54, 55, 56 ],
		19: [ 48, 49, 50, 51, 52, 53, 54, 55, 56 ],
		20: [ 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57 ],
		21: [ 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58 ],
		22: [ 48, 49, 50, 51, 52, 53, 54, 56, 57, 58 ],
		23: [ 49, 50, 51, 52, 53, 56, 57, 58 ],
		24: [ 50, 51, 52, 53, 54, 55, 56, 57, 58 ],
		25: [ 50, 51, 52, 53, 54, 55, 56, 57, 58 ],
		26: [ 51, 52, 53, 54, 55, 56, 57 ],
		27: [ 51, 52, 53, 54, 55, 56, 57 ],
		28: [ 53, 54, 55, 56, 57 ],
		29: [ 53, 54, 55, 56, 57 ],
		30: [ 54, 55, 56, 57 ],
		31: [ 55, 56 ]
	};
	red2 = {
		26: [ 28, 29, 30, 31, 34, 36, 37, 38, 39, 40, 42, 46 ],
		27: [ 28, 32, 34, 38, 42, 46 ],
		28: [ 12, 28, 32, 34, 38, 43, 45 ],
		29: [ 28, 29, 30, 31, 34, 38, 44 ],
		30: [ 28, 31, 34, 38, 44 ],
		31: [ 28, 32, 34, 38, 44 ]
	}
	white = {
		26: [ 3, 4, 5, 6, 10, 11, 12, 13, 16, 24 ],
		27: [ 7, 9, 14, 16, 23, 25 ],
		28: [ 7, 9, 14, 16, 23, 25 ],
		29: [ 3, 4, 5, 6, 9, 11, 14, 16, 22, 26 ],
		30: [ 3, 9, 14, 16, 22, 26 ],
		31: [ 3, 10, 11, 12, 13, 17, 18, 19, 20, 22, 26 ]
	}
	
	// Used to move stuff
	/* f = "";
	$.each(red, function(key,val) {
		f += (key + ": [ ");
		$.each(val, function(key2, val2) {
			f += (val2 + 1);
			if (key2 < val.length - 1) {
				f += ", ";
			}
		});
		f += (" ],\n");
	});
	alert(f); */
	
	function drawOverlay() {
		ctx.fillStyle = '#888';
		ctx.beginPath();
		ctx.rect(0, 0, canvas_width, canvas_height);
		ctx.closePath();
		ctx.fill();
		
		px = 0;
		py = 0;
		padding = 1;
		
		for (i = 0; i < (canvas_box_num_x * canvas_box_num_y); i++) {
			var s;
			var l;
			
			if ((typeof red[py] != 'undefined' && $.inArray(px, red[py]) > -1) || (typeof red2[py] != 'undefined' && $.inArray(px, red2[py]) > -1)) {
				// Red
				s = 84;
				l = 45;
			} else if (typeof white[py] != 'undefined' && $.inArray(px, white[py]) > -1) {
				// White
				s = 0;
				l = 90;
			} else {
				// Dark Gray
				s = 0;
				l = 90 - (2 * py);
			}
			
			if (typeof differences[i] == 'undefined') {
				differences[i] = [s, l, 1.0, 1];
				differences[i][2] = 0.8 + (Math.floor(Math.random() * 30) / 10); // Start with a random appearance
			}
			differences[i][3] = (Math.floor(Math.random() * 30) == 0 ? differences[i][3] * -1 : differences[i][3]);
			differences[i][2] += (0.01 * differences[i][3]);
			
			max_m = 1.05;
			min_m = 0.90;
			
			// Prevent shades from getting too light or dark
			if (differences[i][2] >= max_m) {
				differences[i][3] = differences[i][3] * -1;
				differences[i][2] = max_m;
			} else if (differences[i][2] <= min_m) {
				differences[i][3] = differences[i][3] * -1;
				differences[i][2] = min_m;
			}
			
			ctx.fillStyle = 'hsl(355,' + s + '%, ' + (l * differences[i][2]) + '%)';
			
			ctx.beginPath();
			ctx.rect((w * px) + (px * padding) - 10, (h * py) + (py * padding) - 2, w, h);
			ctx.closePath();
			ctx.fill();
			
			ctx.font = '0.5em arial';
			ctx.fillStyle = '#fcc';
			// ctx.fillText(px, (w * px) + px - 9, (h * py) + py + 11);
			ctx.fillStyle = '#cfc';
			// ctx.fillText(py, (w * px) + px - 9, (h * py) + py + 18);
			ctx.fillStyle = '#ccf';
			// ctx.fillText(i, (w * px) + px - 9, (h * py) + py + 25);
			
			px++;
			if (px > canvas_box_num_x - 1) {
				py++;
				px = 0;
			}
		}
	}
	
	drawOverlay();
	setInterval(function() { drawOverlay() }, 50);
});