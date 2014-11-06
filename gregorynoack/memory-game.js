var MemoryGame = (function() {

	function Memory(GuiCtor,cardset,gameoverFn) {
		
		var valu = cardset.values;
		var matchFn = cardset.match;
		var displayFn = cardset.display;

		// var show = GuiCtor.show;
		var slots, //sparse array: will have elements deleted as cards are removed
			length,//total slots, including gaps
			there, //position of face-up card if any, or false
			arr = [];
			arrNM = [];

				

		function reset() {  //public method
			slots = valu.slice();
			length = valu.length;
			there = false;
			shuffle(slots);
			arr = [];
			arrNM = [];
			console.log('game reset was called')
		}
		reset();// reset now as part of init'ing	


		var gui = new GuiCtor(length,lift,reset);
	


		var faceupValue = function() {
			return valueAt(there);
		}
		var faceupWhere = function() {
			return there;
		}
		var remainsAt = function(where) {
			return slots[where]!==undefined;
		}
		var valueAt = function(where) {
			return slots[where];
		}
		var removeAt = function(where) {
			delete slots[where];
		}
		var remaining = function() {
			return Object.keys(slots).map(Number);
		}
		var checkGameover = function() {
			if (gameoverFn && (remaining().length === 0))
				return gameoverFn();
		}
		
					



		 function lift(here) {
			// if (!isValid(here,length)) return false;
			// if (!remainsAt(here)) return false;
			if (there===here) return false;
			// must be a face-down card here; proceed...
			var valHere = valueAt(here);
			
			if (there === false) {
				// no current face-up
				//turn here face-up
				there = here; 
				//send show func to gui
				gui.show(there,slots[here]);
				//remove two items from short term no match array
				arrNM.pop();
				arrNM.pop();
			} else {
				// check match with face-up
				if (matchFn(valHere,valueAt(there))) {
					
					gui.show(here,slots[here]);
					//save in an array
					arr.push(here);
					arr.push(there);
					// match; remove both:
					removeAt(here);
					removeAt(there);

					checkGameover();
					// console.log("there = " + there + " here = " + here);
					// console.log(arr[0] + arr[1]);
					gui.removeSoon(arr);

				}
				//either way, turn face-up to face-down:
				//create a short term array for noMatch
				//send to gui
				arrNM.push(here);
				arrNM.push(there);
				gui.show(here,slots[here]);
				gui.hideSoon(arrNM);
				there = false;
			}
			if (displayFn) //maybe convert value for display
					valHere = displayFn(valHere); 
			return valHere;
		}
console.log(slots.length);
		// Make some methods public:
		this.reset = reset;
		this.lift = lift;
		this.faceupValue = faceupValue;
		this.faceupWhere = faceupWhere;
		this.remaining = remaining;	
	}

	// Private Functions shared by all boards:
	//  (these could just as easily be placed inside ctor)
	function isValid(where,length) {
			return (typeof where === 'number')
				&& (where%1 === 0)
				&& (where>=0)
				&& (where<length)
		}

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


	return Memory;
})();
