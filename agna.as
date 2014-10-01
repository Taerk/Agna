// Agna AS File
// Programmed by: Gabriel Nieves
//
// This is where the transition codes are kept
//
// To add a custom transition, add it to the animate() function
//
// self {
//     float x
//     float y
//     float scale_x
//     float scale_y
//     float transition_speed
//     int debug
//     string color
//     string text_previous
//     string text_current
//     obj ic {
//         int animated = 0
//     }
// }

class agna {
	public var use_animation;
	public var self;
	public var ic;
	
	public function addAgna() {
		_root.design._visible = false;
	}

	public function startAnimate() {
		ic.animating = 0;
	}

	public function animate() {
		// trace('Tick');
		
		// Add/Edit animations here
		// Add them in order
		switch (use_animation) {
			case 1 :// [Agna:Fade]
				animation_fade();
				break;
			case 2 :// [Agna:Scroll]
				animation_scroll();
				break;
			case 3 :// [Agna:Flip]
				animation_flip();
				break;
			case 4 :// [Agna:Announcement]
				animation_announcement();
				break;
			default :// [Agna:Instant], you might not want to rename this
				animation_instant();
				break;
		}
	}

	public function setObject(set_self, set_ic) {
		self = set_self;
		ic = set_ic;
	}

	public function setAnimation(to_set) {
		use_animation = to_set;
	}

	public function init(to_init) {// On first appearance
		switch (to_init) {
			case 'to' :
				break;
			case 'ev' :
				var abg:MovieClip = ic.createEmptyMovieClip("test", 0);
				abg.loadMovie("abg.png");
				abg._x = -300;
				abg._y = -25;
				break;
			default :
				break;
		}
	}

	public function animation_fade() {
		if (ic.animating == 0) {
			ic.text_frame_alt.output.text = self.text_previous;
			ic.text_frame_alt._alpha = 100;

			ic.text_frame.output.text = self.text_current;
			ic.text_frame._alpha = 0;
			ic.animating = 1;
		} else if (ic.animating == 1) {
			if (ic.text_frame._alpha >= 100) {
				ic.animating = 0;
				delete ic.onEnterFrame;
				// trace('Done');
				return true;
			} else {
				ic.text_frame_alt._alpha -= (10 * self.transition_speed);
				ic.text_frame._alpha += (10 * self.transition_speed);
			}
		}
	}

	public function animation_scroll() {
		if (ic.animating == 0) {
			ic.text_frame_alt._alpha = 0;

			ic.animating = 1;
			ic.increase = 0;
			ic.text_frame._y = 0;
			ic.animating = 1;
		} else if (ic.animating == 1) {
			if (ic.text_frame._y <= 22 * parseFloat(self.vars['scale_y'])) {
				ic.increase += 0.5;
				ic.text_frame._y += ((2 + ic.increase) * self.transition_speed);
			} else {
				ic.animating = 2;
				ic.text_frame._y = -22 * parseFloat(self.vars['scale_y']);
				ic.text_frame.output.text = self.text_current;
			}
		} else if (ic.animating == 2) {
			if (ic.text_frame._y < 0) {
				ic.increase -= 0.5;
				ic.text_frame._y += ((2 + ic.increase) * self.transition_speed);
			} else {
				// When it's done
				ic.text_frame._y = 0;
				ic.animating = 0;
				delete ic.onEnterFrame;
				return true;
			}
		}
	}
	
	public function animation_instant() {
		ic.text_frame_alt._visible = false;
		ic.text_frame.output.text = self.text_current;
		ic.animating = 0;
		delete ic.onEnterFrame;
		return true;
	}
	
	public function animation_flip() {
		if (ic.animating == 0) {
			ic.increase = 0;
			ic.text_frame._yscale = (self.vars['scale_y'] * 100);
			ic.animating = 1;
		} else if (ic.animating == 1) {
			ic.increase += 0.5;
			ic.text_frame._yscale -= (1 + ic.increase * self.transition_speed);
			if (ic.text_frame._yscale <= 0) {
				ic.text_frame.output.text = self.text_current;
				ic.text_frame._yscale = 0;
				ic.animating = 2;
			}
		} else if (ic.animating == 2) {
			ic.text_frame._yscale += (1 + ic.increase * self.transition_speed);
			if (ic.increase > 0) {
				ic.increase -= 0.5;
			}
			if (ic.text_frame._yscale >= (self.vars['scale_y'] * 100)) {
				ic.animating = 0;
				ic.text_frame._yscale = (self.vars['scale_y'] * 100);
				delete ic.onEnterFrame;
				return true;
			}
		}
	}
	
	public function animation_announcement() {
		ic.fps = 30;
		
		if (ic.animating == 0) {
			ic.start_y = 0;
			ic.text_frame.output.text = self.text_current;
			ic.animating = 1;
			ic.increase = 0;
			
			ic.runtime = 0;
			ic.runtime_seconds = 0;
		} else if (ic.animating == 1) {
			ic.increase += 0.5;
			ic._y -= (1 + ic.increase);
			if (ic._y <= (ic.start_y - ic.text_frame._height - (ic.text_frame._height * 0.1))) {
				ic._y = (ic.start_y - ic.text_frame._height);
				ic.animating = 2;
			}
		} else if (ic.animating == 2) {
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
		} else if (ic.animating == 3) {
			ic.runtime++;
			ic._y -= (ic.text_frame._height * 0.1);
			if (ic.runtime == 3) {
				ic.animating = 4;
			}
		} else if (ic.animating == 4) {
			ic._y += (1 + ic.increase);
			if (ic._y >= ic.start_y) {
				ic._y = ic.start_y;
				ic.animating = 0;
				delete ic.onEnterFrame;
				return true;
			}
		}
	}
}