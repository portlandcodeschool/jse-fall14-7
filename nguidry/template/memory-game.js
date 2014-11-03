var MemoryGame = (function() {


	function MemoryGame(GuiCtor,cardset,matchFn,gameoverFn) {
		var values = cardset.values;
		//var matchFn = cardset.match;
		var displayFn = cardset.display;
		var slots;
		var length;
		var there; 
 

		var reset = function() {  //public method
			slots = values.slice();  
			length = values.length;
			there = false;
			shuffle(slots);
		};

		var currentGUI = (GuiCtor)? new MemoryGUI(length,lift,reset): null;

		reset(); 

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

		function lift(here) {
			//for testing only
			console.log("lift function working");
			if (!remainsAt(here)) {return false;}
			if (there===here) {return false;}

			var valHere = valueAt(here);
			if (there === false) {
				// no current face-up
				there = here;
			} else {
				// must match face-up
				if (matchFn(valHere,valueAt(there))) {
					removeAt(here);
					removeAt(there);
					if (currentGUI) {
						currentGUI.removeSoon([here,there]);
					}
					checkGameover();
				} else {
					if (currentGUI) {
						currentGUI.hideSoon([here,there]);
					}
				}
				there = false;
			}
			if (displayFn) {
				valHere = displayFn(valHere);
			}
			if (currentGUI) {
				currentGUI.show(here,valHere);
			}
			return valHere;
		}

		// Make some methods public:
		this.reset = reset;
		this.lift = lift;
		this.faceupValue = faceupValue;
		this.faceupWhere = faceupWhere;
		this.remaining = remaining;
	}//end ctor

	// Private Functions shared by all boards:
	//  (these could just as easily be placed inside ctor)
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
