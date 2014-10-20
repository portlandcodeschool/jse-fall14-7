var MemoryGame = (function() {

	function Memory(GuiCtor, cardset, gameoverFn) {
		
		if(GuiCtor) {
			var gui = new GuiCtor(cardset.values.length, clickFn, resetGameFn);
		}

		// check that there are an even number of cards
		if(cardset.values.length % 2 !== 0) {
			var message = 'You must provide an even number of cards to play the game!';
			console.error(message);
			if(GuiCtor) alert(message);
			return;
		}
		
		
		// create our containers for later use
		var gameBoard = [],
			removed   = {},
			faceUp 	  = [],
			whereArr  = [];
		
		
		// deal with our optional parameters
		if(!cardset.display) {
			cardset.display = function(cardValue) {
				console.log('The value of this card is ' + cardValue);
			}
		}
		
		if(!gameoverFn) {
			gameoverFn = function() {
				console.log('You win!');
			}
		}
		
		
		// build our game board
		buildDeck(cardset.values);
		
		
		// ===== card factory (private) =====
		function buildDeck(values) {
			
			// loop through and create card objects
			for(count = 0; count < values.length; count++) {
				
				gameBoard.push({
					value: 		values[count],
					position: 	count
				});
				
			}
			
			gameBoard = shuffle(gameBoard);
			
			console.log('Ready to play!');
		}
		
		
		// ===== shuffle (private) =====
		function shuffle(array) {
		
			// shuffle
			var m = array.length, t, i;
			
			while (m) {
				i = Math.floor(Math.random() * m--);
				t = array[m];
				array[m] = array[i];
				array[i] = t;
			}
			
			// reset the position of each object
			for(count = 0; count < array.length; count++) {
				array[count].position = count;
			}
			
			return array;
		}
		
		
		// ===== clickFn (private) =====
		function clickFn(cardPos) {
			
			var liftResult = lift(cardPos);
			
			if(liftResult === 'show') {
				
				gui.show(cardPos, gameBoard[cardPos].value);
				whereArr.push(cardPos);
				
			} else if(liftResult === 'hideSoon') {
				
				gui.show(cardPos, gameBoard[cardPos].value);
				whereArr.push(cardPos);
				gui.hideSoon(whereArr);
				whereArr = [];
				
			} else if(liftResult === 'removeSoon') {
				
				gui.show(cardPos, gameBoard[cardPos].value);
				whereArr.push(cardPos);
				gui.removeSoon(whereArr);
				whereArr = [];
				
			}
			
		}
		
		
		// ===== resetGameFn =====
		function resetGameFn() {
			gui.reset();
			reset();
		}
		
		
		// ===== reset =====
		function reset() {
			
			// put all cards back in the deck
			for(var prop in removed) {
				delete removed[prop];
			}
			
			// turn all cards face down
			faceUp = [];
			
			// shuffle the deck
			gameBoard = shuffle(gameBoard);
			
			console.log('The game has been reset. Ready to play!');
		}
		
		
		// ===== faceupWhere =====
		function faceupWhere() {
			
			if(faceUp.length > 0) {
				return faceUp[0].position;
			}
			
			console.log('No cards are face up at this time');
			return false;
		}
		
		
		// ===== faceupValue() =====
		function faceupValue() {
			
			if(faceUp.length > 0) {
				return cardset.display(faceUp[0].value);
			}
			
			console.log('No cards are face up at this time');
			return false;
		}
		
		
		// ===== remaining() =====
		function remaining() {
			
			var arr = [];
			
			for(count = 0; count < gameBoard.length; count++) {
				if(!(gameBoard[count].value in removed)) {
					arr.push(gameBoard[count].position);
				}
			}
			
			return arr;
		}
		
		
		// ===== lift(where) =====
		function lift(where) {
			
			// check if card has been removed
			if(!(gameBoard[where].value in removed)) {
			
				// check if there is a face up card
				if(faceUp.length > 0) {
					
					// check that the face up card is different from the lifted card
					if(gameBoard[where].position !== faceUp[0].position) {
						
						// check if these cards match
						if(cardset.match(gameBoard[where].value, faceUp[0].value)) {
							
							// remove these cards from the board
							removed[gameBoard[where].value] = true;
							removed[faceUp[0].value] = true;
							faceUp = [];
							
							// check to see if we've won
							var check = remaining();
							if(check.length === 0) {
								gameoverFn();
								if(GuiCtor) {
									return 'removeSoon';
								}
								return;
							}
							
							console.log('You found a match! Keep going!');
							if(GuiCtor) {
								return 'removeSoon';
							}
							return true;
							
						}
						
						// if the cards don't match
						faceUp = [];
						console.log('Those cards do not match. Try again.');
						
						if(GuiCtor) {
							return 'hideSoon';
						}
						
						return false;
						
					}
					
					console.log('That card is already face up.');
					return false;
					
				}
				
				// turn this card face up and return its value
				faceUp.push(gameBoard[where]);
				
				if(GuiCtor) {
					return 'show';
				}
				
				return cardset.display(gameBoard[where].value);
			
			} 

			console.log('There is no card at that position. Please pick a different position');
			return false;
			
		}
		
		return {
			reset: 			reset,
			faceupWhere: 	faceupWhere,
			faceupValue:	faceupValue,
			remaining:		remaining,
			lift:			lift,
			gui:			gui
		}

	}

	return Memory;
})();
