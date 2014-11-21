// Agna AS File
// Programmed by: Gabriel Nieves
//
// This is where the transition codes are kept
//
// To add a custom transition, add it to the animate() function
//
// The structure of an agna object looks something like:
// 
// agna { [what the 'self' variable refers to]
//     textField "debug_info_txt" [displays the debug information]
//     movieClip "inner_container" { [what the 'ic' variable refers to]
//         movieClip "text_frame", movieClip "text_frame_alt" { [there's two so that one can display the previous text in some transitions]
//             textField "output" [where the text is displayed]
//         }
//         movieClip "debug_mask" [shown when the display mode has 'mask' enabled]
//     }
//     movieClip "debug_position" [shown when the display mode has 'position' enabled]
// }

class agna {
	//      A       111
	//     A A     1111
	//    AAAAA      11
	//   A     A     11
	//  A       A  111111
	//
	// Area 1:
	// You're allowed to mess with this stuff
	// Just be smart about it
	
	
	public function firstLoad() { // Triggers once, when agna is loaded
		// Have an image of an overlay you want to edit? Put the filename here for it to show up!
		_root.overlay.load_overlay.src = "sample_overlay.png";
		_root.overlay.load_overlay.x = 0;
		_root.overlay.load_overlay.y = 0;
		
		 // Just a sample built in overlay, change 'false' to 'true' to display it
		_root.overlay.load_template = false;
	}
	
	public function addAgna() { // Triggers when an object is added
	}
	
	public function animate() {// Is called on each frame after an animation starts
		// [Agna:Search:Start]
		// ADD ANIMATIONS TO DISPLAY IN AGNAPANEL HERE
		// ADD ANIMATIONS TO DISPLAY IN AGNAPANEL HERE
		
		switch (use_animation) {
			case 'tnet_instant' : // [Agna:Instant]
				animation_instant();
				break;
			case 'tnet_fade' : // [Agna:Fade]
				animation_fade();
				break;
			case 'tnet_scroll' : // [Agna:Scroll]
				animation_scroll();
				break;
			case 'tnet_flip' : // [Agna:Flip]
				animation_flip();
				break;
			case 'tnet_announce' : // [Agna:Announcement]
				animation_announcement();
				break;
			default :
				animation_instant();
				break;
		}
		
		// ADD ANIMATIONS TO DISPLAY IN AGNAPANEL HERE
		// ADD ANIMATIONS TO DISPLAY IN AGNAPANEL HERE
		// [Agna:Search:End]
	}

	public function startAnimate() { // Is triggered at the start of an animation
		ic.animating = 0;
	}

	private function stopAnimation() { // Stops the animation
		ic.animating = 0;
		delete ic.onEnterFrame;
		return true;
	}
	
	public function init(to_init) { // Is triggered on first appearance of object
		switch (to_init) {
			case 'to' :
				break;
			case 'an' : // An example of attaching an image some text
				var abg:MovieClip = ic.createEmptyMovieClip("test", 0);
				abg.loadMovie("images/abg.png");
				abg._x = -300;
				abg._y = -25;
				break;
			default :
				break;
		}
	}

	//      A       2222
	//     A A     22  22
	//    AAAAA       22
	//   A     A     22
	//  A       A  222222
	//
	// Area 2:
	// This is for variables that make your life easier
	
	private function getVar(var_name) {
		switch (var_name) {
			case 'x' : /* Data type fixes */
			case 'y' :
			case 'scale_x' :
			case 'scale_y' :
			case 'transition_speed' :
				return parseFloat(self.vars[var_name]);
				break;
			case 'transition' :
			case 'debug' :
			case 'ruler_width' :
			case 'mask_tl_x' :
			case 'mask_tl_y' :
			case 'mask_tr_x' :
			case 'mask_tr_y' :
			case 'mask_bl_x' :
			case 'mask_bl_y' :
			case 'mask_br_x' :
			case 'mask_br_y' :
			case 'rotation' :
			case 'text_width' :
				return parseInt(self.vars[var_name]);
				break;
			case 'current' :
			case 'text' :
				return self.text_current;
				break;
			case 'prev' :
			case 'previous' :
				return self.text_previous;
				break;

			/* Redirects */
			case 'pos_x' :
			case '_x' :
				return self.vars['x'];
				break;
			case 'pos_y' :
			case '_y' :
				return self.vars['y'];
				break;
			case 'xscale' :
			case '_xscale' :
				return self.vars['scale_x'];
				break;
			case 'yscale' :
			case '_yscale' :
				return self.vars['scale_y'];
				break;
			case '_rotation' :
			case '_r' :
				return self.vars['rotation'];
				break;
			case 't_s' :
				return self.vars['transition_speed'];
				break;

			default :
				return self.vars[var_name];
				break;
		}
	}

	private function changeText(to_text) {
		ic.text_frame.output.htmlText = to_text;
	}

	private function changeAlt(to_text) {
		ic.text_frame_alt.output.htmlText = to_text;
	}

	//      A       3333
	//     A A     33  33
	//    AAAAA       33
	//   A     A   33  33
	//  A       A   3333
	//
	// Area 3:
	// Don't mess with these, if you do the entire thing breaks
	
	public var use_animation;
	public var self;
	public var ic;
	
	public function setObject(set_self, set_ic) {
		self = set_self;
		ic = set_ic;
	}

	public function setAnimation(to_set) {
		use_animation = to_set;
	}

	//      A      44  44
	//     A A     44  44
	//    AAAAA    444444
	//   A     A       44
	//  A       A      44
	//
	// Area 4:
	// I just put animations here


	public function animation_instant() {
		ic.text_frame_alt._visible = false;
		ic.text_frame.output.text = getVar('current');
		ic.animating = 0;
		stopAnimation();
	}
	
	public function animation_scroll() {
		switch (ic.animating) {
			case 0 :
				ic.text_frame_alt._alpha = 0;

				ic.animating = 1;
				ic.increase = 0;
				ic.text_frame._y = 0;
				ic.animating = 1;
				break;
			case 1 :
				if (ic.text_frame._y <= 22 * getVar('yscale')) {
					ic.increase += 0.5;
					ic.text_frame._y += ((2 + ic.increase) * getVar('t_s'));
				} else {
					ic.animating = 2;
					ic.text_frame._y = -22 * getVar('yscale');
					ic.text_frame.output.text = getVar('current');
				}
				break;
			case 2 :
				if (ic.text_frame._y < 0) {
					ic.increase -= 0.5;
					ic.text_frame._y += ((2 + ic.increase) * getVar('t_s'));
				} else {
					// When it's done
					ic.text_frame._y = 0;
					stopAnimation();
				}
				break;
		}
	}

	public function animation_fade() {
		switch (ic.animating) {
			case 0 :
				changeAlt(getVar('previous'));
				ic.text_frame_alt._alpha = 100;

				changeText(getVar('current'));
				ic.text_frame._alpha = 0;
				ic.animating = 1;
				break;
			case 1 :
				if (ic.text_frame._alpha >= 100) {
					stopAnimation();
				} else {
					ic.text_frame_alt._alpha -= (10 * getVar('t_s'));
					ic.text_frame._alpha += (10 * getVar('t_s'));
				}
				break;
		}
	}

	public function animation_flip() {
		switch (ic.animating) {
			case 0 :
				ic.increase = 0;
				ic.text_frame._yscale = (self.vars['scale_y'] * 100);
				ic.animating = 1;
				break;
			case 1 :
				ic.increase += 5;
				ic.text_frame._yscale -= (1 + ic.increase * getVar('t_s'));
				if (ic.text_frame._yscale <= 0) {
					ic.text_frame.output.text = getVar('current');
					ic.text_frame._yscale = 0;
					ic.animating = 2;
				}
				break;
			case 2 :
				ic.text_frame._yscale += (1 + ic.increase * self.transition_speed);
				if (ic.increase > 0) {
					ic.increase -= 3;
				}
				if (ic.text_frame._yscale >= (self.vars['scale_y'] * 100)) {
					ic.animating = 0;
					ic.text_frame._yscale = (self.vars['scale_y'] * 100);
					stopAnimation();
				}
				break;
		}
	}

	public function animation_announcement() {
		switch (ic.animating) {
			case 0:
				ic.fps = 30;
				
				ic.start_y = 0;
				ic.text_frame.output.text = self.text_current;
				ic.animating = 1;
				ic.increase = 0;
	
				ic.runtime = 0;
				ic.runtime_seconds = 0;
				break;
			case 1:
				ic.increase += 0.5;
				ic._y -= (1 + ic.increase);
				if (ic._y <= (ic.start_y - ic.text_frame._height - (ic.text_frame._height * 0.1))) {
					ic._y = (ic.start_y - ic.text_frame._height);
					ic.animating = 2;
				}
				break;
			case 2:
				ic.runtime++;
				if (ic.runtime >= ic.fps) {
					ic.runtime_seconds++;
					ic.runtime = 0;
				}
				if (ic.runtime_seconds >= parseInt(self.vars['transition_speed'])) {
					ic.animating = 3;
					ic.runtime = 0;
				}
				trace("(" + ic.runtime + "/" + ic.fps + ") -> (" + ic.runtime_seconds + "/" + parseInt(self.vars['transition_speed']) + ")");
				break;
			case 3:
				ic.runtime++;
				ic._y -= (ic.text_frame._height * 0.1);
				if (ic.runtime == 3) {
					ic.animating = 4;
				}
				break;
			case 4:
				ic._y += (1 + ic.increase);
				if (ic._y >= ic.start_y) {
					ic._y = ic.start_y;
					ic.animating = 0;
					stopAnimation();
				}
				break;
		}
	}
}