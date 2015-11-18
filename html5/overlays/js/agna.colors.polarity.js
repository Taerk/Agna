/*
*  Name: CFL Smackdown Colors
*  Version: 1.0.1
*  Updated: 10/12/2015
*  Author: Taerk
*/

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

	this.outline_gradient = canvas.createLinearGradient(0, 0, 0, canvas.height);
	this.outline_gradient.addColorStop(0,"#fff");
	this.outline_gradient.addColorStop(1,"#aaa");
	
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
	this.color_1			= {color: 'rgb(147,117,0)'};
	this.color_2			= {color: '#222'};
	this.color_3			= {color: '#111'};
	this.color_4			= {color: 'rgb(0,0,0)'};
	this.color_5			= {color: 'rgb(0,0,0)'};
	
	this.outline 			= {color: '#803b3c', alpha: 1};
	this.topbar 			= {color: '#cc5e60', alpha: 1};
	this.topbar_short 		= {color: '#09f', alpha: 1};
	this.topbar_short2 		= {color: '#09f', alpha: 1};
	this.camera_name		= {color: '#803b3c', alpha: 1};
	this.sidebar 			= {color: '#050505', alpha: 1};
	this.sidebar_alt 		= {color: '#000', alpha: 1};
	this.sidebar_c1 		= {color: '#222', alpha: 1};
	this.sidebar_c2 		= {color: '#000', alpha: 1};
	this.players			= {color: '#050505', alpha: 1};
	this.player_1			= {color: '#803b3c', alpha: 1};
	this.player_2			= {color: '#803b3c', alpha: 1};
	this.score				= {};
	this.score.null			= {color: '#222', alpha: 1};
	this.score.winner		= {color: this.winner_gradient, alpha: 1};
	this.score.border 		= {color: 'white', 'width': 2, 'alpha': 0.6}
	this.player_bar			= '#222';
	this.player				= {};
	this.player['default']	= '#cc5e60';		// Default
	this.player['red']		= 'rgb(168,91,91)';		// Red
	this.player['green']	= 'rgb(73,147,73)';		// Green
	this.player['blue']		= 'rgb(91,91,168)';		// Blue
	this.player['light']	= 'rgb(151,151,151)';	// Light
	this.player['dark']		= 'rgb(51,51,51)';		// Dark
	this.player['rainbow']	= 'rgb(' + this.rainbow.r.v + ',' + this.rainbow.g.v + ',' + this.rainbow.b.v + ')'; // Rainbow
	this.music				= {color: 'rgb(57,117,0)', alpha: 1};
	this.commentator		= {color: 'rgb(77,61,0)', alpha: 1};
}