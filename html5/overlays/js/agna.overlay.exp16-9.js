function pad(string, amount, padstring, direction) {
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
}

function twelveHour(hour) {
	if (hour == 0) {
		newtime = 12;
	} else if (hour > 12) {
		newtime = hour - 12;
	} else {
		newtime = hour;
	}
	return newtime;
}

// agna_output = "file:///H:/Stream/_Agna/xsplit_out.txt";
agna_output = "xsplit_out.txt";
// agna_output = "index.php";

var c = document.getElementById("overlay");
var ctx = c.getContext("2d");
ctx.width = 1280;
ctx.height = 720;

design = {};
design.outline 		= {color: '#222', alpha: 0.8};
design.topbar 		= {color: '#09f', alpha: 1, stage: [{x: 280, y: 30}]};
design.topbar_short = {color: '#09f', alpha: 1, stage: [{x: 770, y: 30}]};
design.sidebar 		= {color: '#013', alpha: 1};
design.sidebar_c2 	= {color: '#002', alpha: 1};
design.player_1		= {color: '#09f', alpha: 1};
design.player_2		= {color: '#09f', alpha: 1};

content = {};

function loadAgna() {
	r = "";
	$.ajax({
		url : agna_output,
		dataType: "text",
		success : function (data,response) {
			content = {};
			$.each($($.parseXML(data)).find("outputs").children(), function(key,el) {
				content[el.tagName] = $(el).text();
			});
		}
	});
}

function getField(field) {
	if (typeof $content == "string") {
		return "";
	} else {
		if (typeof content[field] == "undefined") {
			return "";
		} else {
			return content[field];
		}
	}
}

function drawpic() {
	ctx.clearRect(0,0,1280,720)
	
	ctx.globalAlpha = 1;
	ctx.textAlign = 'center';
	ctx.font = "1.8em asans";
	
	// Text 1
	ctx.fillStyle = "white";
	/* ctx.fillText(getField('ev'), 280, 30);
	ctx.fillText(getField('ma'), 770, 30);
	
	ctx.globalCompositeOperation = 'destination-over';
	
	// Long tournament bar
	ctx.fillStyle = design.topbar.color;
	ctx.globalAlpha = design.topbar.alpha;
	ctx.beginPath();
	ctx.moveTo(78, 0);
	ctx.lineTo(110,40);
	ctx.lineTo(515, 40);
	ctx.lineTo(515, 0);
	ctx.closePath();
	ctx.fill();
	
	
	ctx.fillStyle = design.topbar.color;
	ctx.globalAlpha = design.topbar.alpha;
	ctx.beginPath();
	ctx.moveTo(1030 - 78, 0);
	ctx.lineTo(1030 - 110,40);
	ctx.lineTo(515, 40);
	ctx.lineTo(515, 0);
	ctx.closePath();
	ctx.fill();
	
	// Tournament bar outline
	ctx.fillStyle = design.outline.color;
	ctx.globalAlpha = design.outline.alpha;
	ctx.beginPath();
	ctx.moveTo(40, 0);
	ctx.lineTo(80,45);
	ctx.lineTo(950, 45);
	ctx.lineTo(990, 0);
	ctx.closePath();
	ctx.fill();
	
	ctx.globalCompositeOperation = 'darken';
	
	// Short tournament bar - left side
	ctx.fillStyle = '#056';
	ctx.globalAlpha = 1;
	ctx.beginPath();
	ctx.moveTo(420, 0);
	ctx.lineTo(437,40);
	ctx.lineTo(515, 40);
	ctx.lineTo(515, 0);
	ctx.closePath();
	ctx.fill();
	
	// Short tournament bar - right side
	ctx.fillStyle = '#056';
	ctx.globalAlpha = 1;
	ctx.beginPath();
	ctx.moveTo(515, 0);
	ctx.lineTo(515,40);
	ctx.lineTo(593, 40);
	ctx.lineTo(610, 0);
	ctx.closePath();
	ctx.fill();
	
	// Short tournament bar
	ctx.globalCompositeOperation = 'source-over';
	ctx.fillStyle = design.outline.color;
	ctx.globalAlpha = design.outline.alpha;
	ctx.beginPath();
	ctx.moveTo(438, 45);
	ctx.lineTo(443,55);
	ctx.lineTo(587, 55);
	ctx.lineTo(592, 45);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = design.topbar_short.color;
	ctx.globalAlpha = design.topbar_short.alpha;
	ctx.beginPath();
	ctx.moveTo(430, 0);
	ctx.lineTo(450,50);
	ctx.lineTo(580, 50);
	ctx.lineTo(600, 0);
	ctx.closePath();
	ctx.fill(); */
	
	
	// Sidebar
	/* ctx.globalAlpha = 1;
	ctx.fillStyle = design.sidebar.color;
	ctx.beginPath();
	ctx.rect(1030, 170, 1280, 720);
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.rect(1030, 0, 2, 720);
	ctx.closePath();
	ctx.fill();
	
	ctx.globalAlpha = 1;
	ctx.fillStyle = design.sidebar_c2.color;
	ctx.fill();
	ctx.beginPath();
	ctx.rect(1030, 170, 250, 50);
	ctx.closePath();
	ctx.fill(); */
	
	/* ctx.globalCompositeOperation = 'destination-over';
	
	// Player 1 Bar
	ctx.fillStyle = design.player_1.color;
	ctx.globalAlpha = design.player_1.alpha;
	ctx.beginPath();
	ctx.moveTo(65, 720);
	ctx.lineTo(85, 685);
	ctx.lineTo(420, 685);
	ctx.lineTo(440, 720);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = design.outline.color;
	ctx.globalAlpha = design.outline.alpha;
	ctx.beginPath();
	ctx.moveTo(15, 720);
	ctx.lineTo(33, 690);
	ctx.lineTo(60, 690);
	ctx.lineTo(66, 680);
	ctx.lineTo(440, 680);
	ctx.lineTo(465, 720);
	ctx.closePath();
	ctx.fill();
	
	// Player 1
	ctx.globalCompositeOperation = 'source-over';
	ctx.fillStyle = "white";
	ctx.fillText(getField('p1'), 260, 710);
	ctx.fillText(getField('s1'), 50, 715);
	
	// Player 2 Bar
	ctx.globalCompositeOperation = 'destination-over';
	ctx.fillStyle = design.player_1.color;
	ctx.globalAlpha = design.player_1.alpha;
	ctx.beginPath();
	ctx.moveTo(1030 - 65, 720);
	ctx.lineTo(1030 - 85, 685);
	ctx.lineTo(1030 - 420, 685);
	ctx.lineTo(1030 - 440, 720);
	ctx.closePath();
	ctx.fill();
	
	ctx.fillStyle = design.outline.color;
	ctx.globalAlpha = design.outline.alpha;
	ctx.beginPath();
	ctx.moveTo(1030 - 15, 720);
	ctx.lineTo(1030 - 33, 690);
	ctx.lineTo(1030 - 60, 690);
	ctx.lineTo(1030 - 66, 680);
	ctx.lineTo(1030 - 440, 680);
	ctx.lineTo(1030 - 465, 720);
	ctx.closePath();
	ctx.fill();
	
	// Player 2
	ctx.globalCompositeOperation = 'source-over';
	ctx.fillStyle = "white";
	ctx.fillText(getField('p2'), 1030 - 260, 710);
	ctx.fillText(getField('s2'), 1030 - 50, 715); */
	
	// Time
	d = new Date();
	
	ctx.globalCompositeOperation = 'source-over';
	ctx.globalAlpha = 1;
	ctx.fillStyle = "white";
    ctx.lineWidth = 4;
	ctx.strokeStyle = "black";
	
	ctx.font = "1.8em motion";
	text = "Weekly 36";
	ctx.strokeText(text, 515, 700);
	ctx.fillText(text, 515, 700);
	
	ctx.font = "1.2em motion";
	text = (d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear().toString().substr(2,2) + " - " + twelveHour(d.getHours()) + ":" + pad(d.getMinutes(), 2, 0);
	if (d.getSeconds() % 2 == 0) {
		text = text.replace(":", " ");
	}
	if (d.getHours() >= 12) {
		text += "p";
	} else {
		text += "a";
	}
	
	ctx.strokeText(text, 515, 715);
	ctx.fillText(text, 515, 715);
	
}

$(document).ready(function() {
	loadAgna();
	drawpic();
	setInterval("drawpic()", 1000);
	setInterval("loadAgna()", 2000);
});


$(window).resize(function() {
	$('#overlay').css('margin-top', ($(window).innerHeight() - $('#overlay').height()) / 2);
});
$(window).resize();