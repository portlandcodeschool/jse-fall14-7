var MemoryGame = (function() {

	function Memory(GuiCtor,cardset,gameoverFn) {

		var board = cardset.values.slice();

		var matchCards = cardset.match;

		var displayCard = cardset.display;


		// ==== Reset Cards Array =====
		// ============================				
		this.reset = function() {
			board = cardset.values.slice();
			// RESHUFFLE!
			var m = board.length, t, i;
			while (m) {
			  i = Math.floor(Math.random() * m--);
			  t = board[m];
			  board[m] = board[i];
			  board[i] = t;
			}
			faceupArr[0] = undefined;
			gui.reset();
			console.log("The board has been reset.");
		};

		// ==== Checking Position & Value of the first lifted card ====
		// ============================================================
		this.faceupWhere = function() {
			return board.indexOf(faceupArr[0]);
		};

		this.faceupValue = function() {
			if (faceupArr[0] === undefined) {
				return false;
			} else {
				if (displayCard === null) { // if no displayCard is given
					return faceupArr[0];
				} else {
					return displayCard(faceupArr[0]);
				}
			}
		};

		// ==== Check Board for remaining positions of cards ====
		// ======================================================
		this.remaining = function() { // return array of positions of all cards
			var tempArr = [];
			board.forEach(function logArrayElements(element, index, array) {
				tempArr.push(index);})
			console.log(tempArr);
		};


		// ==== Lifting a card (position) from the array ====
		// ==================================================
		this.lift = function(where) {

			if (faceupArr[0] === undefined) { // if no other card has been lifted
				faceupArr = board.slice(where,where+1); // place the first lifted card into a seperate array for comparison
				// console.log(faceupArr[0]);
				gui.show(where, faceupArr[0]);
				if (displayCard === null) { // if no displayCard is given
					return board[where]; // return lifted card
				} else {
					return displayCard(board[where]);
				}

			} else if (board[where] === faceupArr[0]) {
				console.log("You already clicked me")
				return false; // if element (where) has already been lifted

			} else if (matchCards(faceupArr[0],board[where])) { // if cards match
				if (displayCard === null) { // if no displayCard is given
					console.log(board[where]+".. "+"You found a match!");
				} else {
					console.log(displayCard(board[where])+".. "+"You found a match!");
					gui.removeSoon(where);
				}
				board.splice(where,1) && board.splice(board.indexOf(faceupArr[0]),1);
				faceupArr[0] = undefined;
				if (board.length === 0) { // if board is empty
					if (endgameFn !== undefined) { // if endgameFn is given
						return endgameFn();
					} else {
						console.log("Game Over")
					}
				}

			} else {
				console.log(board[where] + " does not match " +faceupArr[0]+ ".. Try again.");
				faceupArr[0] = undefined;
				gui.hideSoon(where);
			}
		};

		var gui = new GuiCtor(board.length,this.lift,this.reset);

	}

	var faceupArr = [];

	return Memory;
})();

