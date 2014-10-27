var MemoryGame = (function() {


	function MemoryGame(GuiCtor,cardset,matchFn,gameoverFn) {
		var values = cardset.values,
			matchFn = cardset.match, 
			displayFn = cardset.display;		

		var currentGUI = (GuiCtor)? new MemoryGUI(values.length,lift,reset): null; 

		var slots, //sparse array: will have elements deleted as cards are removed
			there; //position of face-up card if any, or false

		var reset = function() {  //public method
			slots = cardset.slice(); //Uncaught TypeError: undefined is not a function 
			length = values.length;
			there = false;
			shuffle(slots);
		};

		// reset now as part of init'ing 
		reset(); //Uncaught TypeError: undefined is not a function

		var faceupValue = function() {
			return valueAt(there);
		};
		var faceupWhere = function() {
			return there;
		};
		var remainsAt = function(where) {
			return slots[where]!==undefined;
		};
		var valueAt = function(where) {
			return slots[where];
		};
		var removeAt = function(where) {
			delete slots[where];
		};
		var remaining = function() {
			return Object.keys(slots).map(Number);
		};
		var checkGameover = function() {
			if (gameOverFn && (remaining().length === 0))
				gameOverFn();
		};

		var lift = function(here) {
			if (!remainsAt(here)) return false;
			if (there===here) return false;

			// must be a face-down card here; proceed...
			var valHere = valueAt(here);
			if (there === false) {
				// no current face-up
				there = here; //turn here face-up
				//show card in gui
			} else {
				// check match with face-up
				if (matchFn(valHere,valueAt(there))) {
					// match; remove both:
					removeAt(here);
					removeAt(there);
					//change to "matched" class in GUI
					//incorporate slots.values[(currentGUI -> td.position)]
					if (currentGUI) {
						currentGUI.removeSoon([here, there]); 
					}
					checkGameover();
				} else {
					if (currentGUI) {
						currentGUI.hideSoon([here, there]);
					}
				}
				there = false;
			}
			if (displayFn) {
				valHere = displayFn(valHere);
			}
			if (currentGUI) {
				currentGUI.show(here, valHere);
			}
			return valHere;
		};

		// Make some methods public:
		this.reset = reset;
		this.lift = lift;
		this.faceupValue = faceupValue;
		this.faceupWhere = faceupWhere;
		this.remaining = remaining;
	}//end ctor

	// Private Functions shared by all boards:
	//  (these could just as easily be placed inside ctor)
	//PLACE IN CTOR AND CALL WITH RESET?
	function shuffle(array) {
	// Knuth-Fisher-Yates, modified from http://bost.ocks.org/mike/shuffle/
		var end = array.length, temp, i;
				// While there remain elements to shuffle…
		while (end>1) {
				// Pick a remaining element…
				i = Math.floor(Math.random() * end--);
				// And swap it with the current element.
				temp = array[end];
				array[end] = array[i];
		    array[i] = temp;
			}
	}

	return MemoryGame;
})();

