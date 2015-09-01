/*
*  Name: Camera
*  Version: 1.0
*  Updated: 9/1/2015
*  Author: Taerk
*/

if (typeof camera_name == 'undefined') {
	camera_name = "";
}

letterbox = 0;
letterbox_smoothing = 10;
letterbox_max = 50;
letterbox_bottom_mult = 0.7;

p1_pos = -1;
c1_pos = -1;
p2_pos = -1;
c2_pos = -1;

function drawLetterbox() {
	agna.ctx.fillStyle = '#222';
	agna.ctx.globalAlpha = 0.8;
	agna.ctx.beginPath();
	agna.ctx.rect(0, 0, agna.ctx.width, letterbox);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.fillStyle = '#222';
	agna.ctx.globalAlpha = 0.8;
	agna.ctx.beginPath();
	agna.ctx.rect(0, agna.ctx.height - (letterbox * letterbox_bottom_mult), agna.ctx.width, (letterbox * letterbox_bottom_mult));
	agna.ctx.closePath();
	agna.ctx.fill();
}

function drawTopBar() {
	agna.ctx.globalAlpha = 1;
	agna.ctx.fillStyle = 'white';
	agna.ctx.strokeStyle = "black";
	agna.ctx.font = "3.0em Motion Control";
	agna.ctx.textAlign = 'left';
	agna.ctx.strokeText(agna.getField('to'), 10, letterbox - 12);
	agna.ctx.fillText(agna.getField('to'), 10, letterbox - 12);
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.strokeStyle = "black";
	agna.ctx.font = "3.0em Motion Control";
	agna.ctx.textAlign = 'center';
	agna.ctx.strokeText(agna.cleanText(agna.getField('ma'), 'ma'), agna.ctx.width / 2, letterbox - 12);
	agna.ctx.fillText(agna.cleanText(agna.getField('ma'), 'ma'), agna.ctx.width / 2, letterbox - 12);
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.strokeStyle = "black";
	agna.ctx.font = "3.0em Motion Control";
	agna.ctx.textAlign = 'right';
	agna.ctx.strokeText(agna.cleanText(agna.getField('ev'), 'ev'), agna.ctx.width - 10, letterbox - 12);
	agna.ctx.fillText(agna.cleanText(agna.getField('ev'), 'ev'), agna.ctx.width - 10, letterbox - 12);
}

function drawBottomBar() {
	agna.ctx.globalAlpha = 1;
	d = new Date();
	time_text = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear().toString().substr(2,2) + " - " + agna.twelveHour(d.getHours()) + ":" + agna.pad(d.getMinutes(), 2, 0);
	if (d.getSeconds() % 2 == 0) {
		time_text = time_text.replace(":", " ");
	}
	if (d.getHours() >= 12) {
		time_text += "p";
	} else {
		time_text += "a";
	}
	agna.ctx.fillStyle = 'white';
	agna.ctx.strokeStyle = "black";
	agna.ctx.font = "1.8em Motion Control";
	agna.ctx.textAlign = 'right';
	agna.ctx.strokeText(time_text, agna.ctx.width - 10, agna.ctx.height + (letterbox_max * letterbox_bottom_mult) - (letterbox * letterbox_bottom_mult) - 10);
	agna.ctx.fillText(time_text, agna.ctx.width - 10, agna.ctx.height + (letterbox_max * letterbox_bottom_mult) - (letterbox * letterbox_bottom_mult) - 10);
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.strokeStyle = "black";
	agna.ctx.font = "1.8em Motion Control";
	agna.ctx.textAlign = 'left';
	agna.ctx.strokeText(agna.getField('an'), 10, agna.ctx.height + (letterbox_max * letterbox_bottom_mult) - (letterbox * letterbox_bottom_mult) - 10);
	agna.ctx.fillText(agna.getField('an'), 10, agna.ctx.height + (letterbox_max * letterbox_bottom_mult) - (letterbox * letterbox_bottom_mult) - 10);
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.strokeStyle = "black";
	agna.ctx.font = "1.8em Motion Control";
	agna.ctx.textAlign = 'center';
	agna.ctx.strokeText(camera_name, agna.ctx.width / 2, agna.ctx.height + (letterbox_max * letterbox_bottom_mult) - (letterbox * letterbox_bottom_mult) - 10);
	agna.ctx.fillText(camera_name, agna.ctx.width / 2, agna.ctx.height + (letterbox_max * letterbox_bottom_mult) - (letterbox * letterbox_bottom_mult) - 10);
	
	// Draw players
	
	var split_comm = (typeof comm_split != 'undefined') ? true : false;
	var co_1 = (split_comm) ? agna.getField('co').split(comm_split)[0] : agna.getField('co');
	var co_2 = (split_comm) ? agna.getField('co').split(comm_split)[1] : agna.getField('co');
	
	// Player 1	
	agna.ctx.fillStyle = agna.colors.player[agna.color_p1];
	if (agna.getField('c1', true).indexOf("%p1%") > -1) {
		agna.ctx.fillStyle = agna.colors.player[agna.color_p1];
	} else if (agna.getField('c1', true).indexOf("%p2%") > -1) {
		agna.ctx.fillStyle = agna.colors.player[agna.color_p2];
	} else {
		agna.ctx.fillStyle = agna.colors.color_1.color;
	}
	agna.ctx.globalAlpha = 1;
	agna.ctx.beginPath();
	agna.ctx.moveTo(0, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 80);
	agna.ctx.lineTo(agna.ctx.width / 2, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 80);
	agna.ctx.lineTo(agna.ctx.width / 2 - 40, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 20);
	agna.ctx.lineTo(0, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 20);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalCompositOperation = 'darken';
	agna.ctx.fillStyle = 'black';
	agna.ctx.globalAlpha = 0.4;
	agna.ctx.beginPath();
	agna.ctx.moveTo(0, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 80);
	agna.ctx.lineTo(agna.ctx.width / 2 - 40, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 80);
	agna.ctx.lineTo(agna.ctx.width / 2 - 81, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 20);
	agna.ctx.lineTo(0, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 20);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalCompositOperation = 'source-over';
	agna.ctx.fillStyle = agna.colors.color_2.color;
	agna.ctx.globalAlpha = 1;
	agna.ctx.beginPath();
	agna.ctx.moveTo(0, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 80);
	agna.ctx.lineTo(agna.ctx.width / 2 - 60, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 80);
	agna.ctx.lineTo(agna.ctx.width / 2 - 95, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 30);
	agna.ctx.lineTo(0, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 30);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.textAlign = 'center';
	agna.ctx.font = "3em Motion Control";
	if (split_comm) {
		agna.ctx.fillText(co_1, ((agna.ctx.width / 2) - 95) / 2, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 44, 545);
	} else {
		agna.ctx.fillText(agna.getField(field_left), ((agna.ctx.width / 2) - 95) / 2, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 44, 545);
	}
	
	// Player 2
	if (agna.getField('c2', true).indexOf("%p1%") > -1) {
		agna.ctx.fillStyle = agna.colors.player[agna.color_p1];
	} else if (agna.getField('c2', true).indexOf("%p2%") > -1) {
		agna.ctx.fillStyle = agna.colors.player[agna.color_p2];
	} else {
		agna.ctx.fillStyle = agna.colors.color_1.color;
	}
	agna.ctx.globalAlpha = 1;
	agna.ctx.beginPath();
	agna.ctx.moveTo(agna.ctx.width, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 90);
	agna.ctx.lineTo(agna.ctx.width / 2 + 40, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 90);
	agna.ctx.lineTo(agna.ctx.width / 2, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 30);
	agna.ctx.lineTo(agna.ctx.width, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 30);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.globalCompositOperation = 'darken';
	agna.ctx.fillStyle = 'black';
	agna.ctx.globalAlpha = 0.4;
	agna.ctx.beginPath();
	agna.ctx.moveTo(agna.ctx.width, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 90);
	agna.ctx.lineTo(agna.ctx.width / 2 + 81, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 90);
	agna.ctx.lineTo(agna.ctx.width / 2 + 40, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 30);
	agna.ctx.lineTo(agna.ctx.width, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 30);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.fillStyle = agna.colors.color_2.color;
	agna.ctx.globalAlpha = 1;
	agna.ctx.beginPath();
	agna.ctx.moveTo(agna.ctx.width, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 80);
	agna.ctx.lineTo(agna.ctx.width / 2 + 95, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 80);
	agna.ctx.lineTo(agna.ctx.width / 2 + 60, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 30);
	agna.ctx.lineTo(agna.ctx.width, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 30);
	agna.ctx.closePath();
	agna.ctx.fill();
	
	agna.ctx.fillStyle = 'white';
	agna.ctx.textAlign = 'center';
	agna.ctx.font = "3em Motion Control";
	if (split_comm) {
		agna.ctx.fillText(co_2, agna.ctx.width - ((agna.ctx.width / 2) - 95) / 2, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 44, 545);
	} else {
		agna.ctx.fillText(agna.getField(field_right), agna.ctx.width - ((agna.ctx.width / 2) - 95) / 2, agna.ctx.height - (letterbox_max * letterbox_bottom_mult) - 44, 545);
	}
}

function drawOverlay() {
	agna.ctx.clearRect(0,0,agna.ctx.width,agna.ctx.height)
	
	if (letterbox < letterbox_max) {
		letterbox += letterbox_smoothing;
		letterbox_smoothing = letterbox_smoothing * 0.8;
		if (letterbox_smoothing < 0.5) {
			letterbox_smoothing = 0.5;
		}
		if (letterbox >= letterbox_max) {
			letterbox = letterbox_max;
		}
	}
	
	drawLetterbox();
	drawTopBar();
	drawBottomBar();
}