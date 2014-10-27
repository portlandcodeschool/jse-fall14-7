var MemoryGame = (function() {

	function Memory(GuiCtor,cardset,gameoverFn) {

		var faceupValuesArr = [];

		var board = cardset.values.slice();
		

		var matchedArr = [];

		var matchCards = cardset.match;
		
		this.reset = function(){

			//create new game board			
			board = cardset.values.slice();
			
			//shuffling the entire array
			board.sort(shuffle(this));

			faceupValuesArr = []

			matchedArr = []
			
			console.log('Game has been reset. ready to play!');

			alert('Game has been reset. ready to play!');
		};

		this.reset(); //shuffles upon load

		
		this.faceupWhere = function(){

			if(faceupValuesArr[0] !== undefined){

				return board.indexOf('face up');
			}
			// return false;
		};
		
		
		this.faceupValue = function(){

			if(faceupValuesArr.length > 0){
			
				return faceupValuesArr[0];
			}
			
			return false;
		};

		this.remaining = function(){
			return Object.keys(board).map(Number)
		};

		
		this.lift = function(where){

			if(board[where] !== undefined){
				
				if(faceupValuesArr[0] === undefined){

					faceupValuesArr.push(where);

					board.slice(where,1);

					if(GuiCtor){
						
						console.log(board[where]);
						
						 return gui.show(where, board[faceupValuesArr[0]]);
					}
					else{

						console.log(this.faceupValue());
					}
				}

				if(faceupValuesArr[0] === where){

					console.log('You have already clicked on this card');

					return false;

				}

				else if(matchCards(board[where], board[faceupValuesArr[0]])){
					
					console.log(board[where] + ', and ' + board[faceupValuesArr[0]]);
					
					gui.show(where,board[where]);

					gui.removeSoon([where, faceupValuesArr[0]]);

					matchedArr.push(board[where]);

					matchedArr.push(board[faceupValuesArr[0]]);

					delete board[where];

					delete board[faceupValuesArr[0]];

					faceupValuesArr.shift();
					console.log(board.length, matchedArr.length)
					if(board.length === matchedArr.length){	
				
						if(gameoverFn){

							return gameoverFn();
						}
						else{
							console.log("No more pairs! You Won!");

							alert("No more pairs! You Won!");
						}
					}
					else{

						console.log('Match!');
					}
				}
				else{

					gui.show(where, board[where]);

					gui.hideSoon([where, faceupValuesArr[0]]);

					faceupValuesArr.shift();

					console.log(board[where], ' no match! Try again');
				}
			}

			else{

				console.log('value undefined');

				return false;
			}
		
		};

	function shuffle(array) {
		  var m = array.length, t, i;

		  // While there remain elements to shuffle…
		  while (m) {

		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		   
		    array[m] = array[i];
		   
		    array[i] = t;
		  }
		}

		var gui = new GuiCtor(board.length, this.lift, this.reset);
	
	}	


	

	return Memory;
})();

















