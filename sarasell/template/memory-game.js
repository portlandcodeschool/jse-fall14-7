var MemoryGame = (function() {

	function Memory(GuiCtor,cardset,gameoverFn) {
		var values = cardset.values;
		var	matchFn = cardset.match;
		var displayFn = cardset.display;	

		var slots; //an array of values
		var length; //total slots
		var there; //position of the faceup card, if there is one

		var gui = (GuiCtor)? new GuiCtor(values.length,lift,reset) : null; 

		function resetGUI() {
			slots = values.slice();
			length = values.length;
			there = false;
			//shuffle(slots); <-- commenting this out for now becuase I havent written the shuffle fn yet
			resetGUI();
		}

		function lift(here) {
			if (!isValid(here,length)) return false;
			if (!remainsAt(here)) return false;
			if (there===here) return false;

			var valHere = valueAt(here);
			if (there === false) {
				// no current face-up
				there = here;
			} else {
				// must match face-up
				if (matchFn(valHere,valueAt(there))) {
					removeAt(here);
					removeAt(there);
					if (gui) {
						gui.removeSoon([here,there]);
					}
					checkGameover();
				} else {
					if (gui) gui.hideSoon([here,there]);
				}
				there = false;
			}
			if (displayFn)
				valHere = displayFn(valHere);
			if (gui)
				gui.show(here,valHere)
			return valHere;

		}
			this.resetGUI = resetGUI;
			this.lift = lift;
	}
		//var shuffle = function (slots) {

		//}

	return Memory;
})();
