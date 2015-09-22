function agnaColor(canvas) {

	/* Gradient for score -- used later */
	this.winner_gradient = canvas.createLinearGradient(0, canvas.height - 26, 0, canvas.height - 4);
	this.winner_gradient.addColorStop(0,"#2a2");
	this.winner_gradient.addColorStop(0.8,"#050");
	this.winner_gradient.addColorStop(0.8,"#080");
	this.winner_gradient.addColorStop(1,"#080");

	this.player_gradient = canvas.createLinearGradient(0, canvas.height - 50, 0, canvas.height);
	this.player_gradient.addColorStop(0,"#000");
	this.player_gradient.addColorStop(0.2,"#000");
	this.player_gradient.addColorStop(0.9,"#322");
	this.player_gradient.addColorStop(1,"#422");

	this.sidebar_gradient = canvas.createLinearGradient(0, 0, 0, canvas.height);
	this.sidebar_gradient.addColorStop(0,"#844");
	this.sidebar_gradient.addColorStop(0.2,"#844");
	this.sidebar_gradient.addColorStop(0.8,"#533");
	this.sidebar_gradient.addColorStop(0.9,"#111");
	this.sidebar_gradient.addColorStop(1,"#111");

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
	this.color_1			= {color: '#a00'};
	this.color_2			= {color: '#111'};
	this.color_3			= {color: '#111'};
	this.color_4			= {color: '#302a20'};
	this.color_5			= {color: 'rgb(0,0,0)'};

	this.outline 			= {color: '#500', alpha: 1};
	this.topbar 			= {color: '#a00', alpha: 1};
	this.topbar_short 		= {color: '#111', alpha: 1};
	this.topbar_short2 		= {color: '#a00', alpha: 1};
	this.camera_name		= {color: 'rgb(147,117,0)', alpha: 1};
	this.sidebar 			= {color: '#050505', alpha: 1};
	this.sidebar_alt 		= {color: '#000', alpha: 1};
	this.sidebar_c1 		= {color: this.sidebar_gradient, alpha: 1};
	this.sidebar_c2 		= {color: '#000', alpha: 1};
	this.players			= {color: this.player_gradient, alpha: 1};
	this.score				= {};
	this.score.null			= {color: '#211', alpha: 1};
	this.score.winner		= {color: this.winner_gradient, alpha: 1};
	this.score.border 		= {color: 'white', 'width': 2, 'alpha': 0.6}
	this.player 			= [];
	this.player[0]			= '#a00';				// Classic
	this.player[1]			= 'rgb(' + this.rainbow.r.v + ',' + this.rainbow.g.v + ',' + this.rainbow.b.v + ')'; // Rainbow
	this.player[2]			= '#a00';				// Default
	this.player[3]			= 'rgb(73,147,73)';		// Winner
	this.player[4]			= 'rgb(167,73,73)';		// Loser
	this.player[5]			= 'rgb(151,151,151)';	// Light
	this.player[6]			= 'rgb(51,51,51)';		// Dark
	this.player[7]			= 'rgb(153,51,153)';	// Purple
	this.music				= {color: 'rgb(57,117,0)', alpha: 1};
	this.commentator		= {color: 'rgb(147,117,0)', alpha: 1};
}