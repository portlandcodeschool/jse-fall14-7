var MemoryGame = (function() {

	function Memory(GuiCtor,cardset,gameoverFn) {

		var faceupValuesArr = [];

		var board = cardset.slice();

		this.reset = function(){

			//create new game board			
			board = cardset.slice();
			
			//shuffling the entire array
			board.sort(shuffle);

			faceupValuesArr = []

			return 'ready to play!';

		};

		
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
	
			var lifted = board[where];
	
			if(lifted !== undefined){
				
				if(faceupValuesArr[0] === undefined){

					faceupValuesArr.push(lifted);

					board.splice(where,1, 'face up');

					if(displayFn){

						return displayFn(faceupValuesArr[0]);
					}
					else{

						return this.faceupValue();
					}
				}

				else if(matchFn(lifted, this.faceupValue())){

					console.log(lifted + ', ' + this.faceupValue());

					board.splice(where,1);

					faceupValuesArr.shift();

					board.splice(board.indexOf('face up'),1);

					return 'Match!';
					}
				else{

					displayFn(lifted);

					faceupValuesArr.shift();

					return 'no match! Try again';
				}
			}
							
			if(board.length === 0){
				
				if(endgameFn){

					return endgameFn();
				}
				else{
					return "No more pairs! You Won!";
				}
			}
		
		};


	}

	return Memory;
})();
















