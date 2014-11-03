var MemoryGUI = (function () {

	function GUI(len,clickFn,resetGameFn) {

		var memorygame = document.getElementById("memorygame");

		function makeID(where) {
			return "card" + where;
		}

		function makeBoard(len) {
	      //create a div to be the game board with an id of gameboard
	      var gameboard = document.createElement("div");
	      gameboard.setAttribute("id", "gameboard");
	      //memorygame.appendChild(gameboard);  needed here, or after board is generated?

	      //determine length of side of game board based on length of card deck array
	      var side = Math.ceil(Math.sqrt(len));

	      //loop to create a card in GUI for each card in deck
	      for (var where=0; where < len; where++) {
	        //create a card
	        var card = document.createElement("div");
	        card.classList.add("face-down");
	        card.id = makeID(where);
	        card.addEventListener('click', function(){clickFn(where);});
	        gameboard.appendChild(card);
	      }
	      return gameboard;
	    }	

		function findCard(where) {
			return document.getElementById(makeID(where));
		}

		function makeResetButton(resetGui,resetGame) {
			var resetButton = document.createElement('button');
			resetButton.innerHTML = 'Reset!';
			resetButton.id = 'resetButton';
			memorygame.appendChild(resetButton);
			resetButton.addEventListener('click',function() {//when clicked, reset both modules
				resetGui();
				resetGame();
			});
			return resetButton;
		}

		// public methods:

		this.reset = function() { 
			//loop through the card
			for(var where=0; where < len; ++where) {
				//fetch the card
				var card = findCard(where);
				//remove any instances of the "matched" class
				card.classList.remove("matched");
				//remove any instances of the "face-up" class
				card.classList.remove("face-up");
				//add the "face-down" class to the card
				card.classList.add("face-down"); 
			}
		};

		this.show = function(where,what) {
			//create a variable and fetch card being shown based on position "where"
			console.log("show function working");
			var card = findCard(where); 
			//set fetched card's value to "what"
			card.setAttribute("value", what);
			//remove "face-down" class from style of card
			card.classList.remove("face-down");
			//add "face-up" class to style of card
			card.classList.add("face-up");
		};

		this.removeSoon = function(whereArr) { 
			window.setTimeout(function() {
				for (var key in whereArr) {
					var card = findCard(key);
					card.classList.remove("face-up");
					card.classList.add("matched");
				}
			}, 500);
		};
		
		this.hideSoon = function(whereArr) {  
			window.setTimeout(function() {
				for (var key in whereArr) {
					var card = findCard(key);
					card.classList.remove("face-up");
					card.classList.add("face-down");
				}
			}, 500);
		};

		var board = makeBoard(cards.values.length); //need to figure out how to pass length into this
		memorygame.appendChild(board);
		makeResetButton(this.reset,resetGameFn);
	}

	

	return GUI;
})();

