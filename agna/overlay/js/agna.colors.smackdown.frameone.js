/*
*  Name: CFL Smackdown Colors
*  Version: 1.0.1
*  Updated: 10/12/2015
*  Author: Taerk
*/

function agnaColor(canvas) {
	
	this.thin_font = "aovel sans";
	this.bold_font = "aovel sans";
	this.block_font = "motion control";

	/* Gradient for score -- used later */
	this.winner_gradient = canvas.createLinearGradient(0, canvas.height - 26, 0, canvas.height - 4);
	this.winner_gradient.addColorStop(0,"#2c2");
	this.winner_gradient.addColorStop(0.8,"#070");
	this.winner_gradient.addColorStop(0.8,"#0c0");
	this.winner_gradient.addColorStop(1,"#0c0");

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

	this.background_gradient = canvas.createLinearGradient(0, 0, 0, canvas.height);
	this.background_gradient.addColorStop(0,"#0AE");
	this.background_gradient.addColorStop(0.5,"#0AE");
	this.background_gradient.addColorStop(0.5,"#2cf");
	this.background_gradient.addColorStop(1,"#cceeff");

	this.rainbow = {
		diff: 1, // Change in color value
		chance: 10, // % to switch direction
		r: {
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
	this.color_1			= {color: this.background_gradient};
	this.color_2			= {color: '#222'};
	this.color_3			= {color: '#111'};
	this.color_4			= {color: 'rgb(0,0,0)'};
	this.color_5			= {color: '#249' };
	
	this.outline 			= {color: this.background_gradient, alpha: 1};
	this.outline_y			= {color: this.color_5.color, alpha: 1};
	this.clock	 			= {color: '#fff', alpha: 1};
	this.topbar 			= {color: '#f0f0ff', alpha: 1, textColor: '#fff'};
	this.topbar_in 			= {color: '#222', alpha: 1};
	this.topbar_short 		= {color: '#6CE', alpha: 1};
	this.topbar_short2 		= {color: '#0AE', alpha: 1};
	this.camera_name		= {color: '#09f', alpha: 1};
	this.sidebar 			= {color: '#050505', alpha: 1};
	this.sidebar_alt 		= {color: '#000', alpha: 1};
	this.sidebar_c1 		= {color: '#222', alpha: 1};
	this.sidebar_c2 		= {color: '#000', alpha: 1};
	this.players			= {color: '#050505', alpha: 1};
	this.player_1			= {color: '#09f', alpha: 1};
	this.player_2			= {color: '#09f', alpha: 1};
	this.score				= {};
	this.score.null			= {color: '#222', alpha: 1};
	this.score.winner		= {color: this.winner_gradient, alpha: 1};
	this.score.border 		= {color: 'white', 'width': 2, 'alpha': 0.6}
	this.player_bar			= '#1B75BB';
	this.player				= {};
	this.player['default']	= '#f0f0ff';		// Default
	this.player['red']		= 'rgb(240,91,91)';		// Red
	this.player['green']	= 'rgb(91,220,91)';		// Green
	this.player['blue']		= 'rgb(91,91,240)';		// Blue
	this.player['light']	= 'rgb(151,151,151)';	// Light
	this.player['dark']		= 'rgb(51,51,51)';		// Dark
	this.player['rainbow']	= 'rgb(' + this.rainbow.r.v + ',' + this.rainbow.g.v + ',' + this.rainbow.b.v + ')'; // Rainbow
	this.music				= {color: this.color_5.color, alpha: 1};
	this.commentator		= {color: this.color_5.color, alpha: 1};
}