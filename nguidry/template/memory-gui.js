var MemoryGUI = (function () {

	function GUI(len,clickFn,resetGameFn) {

		var memorygame = document.getElementById("memorygame");

		function makeTable(len) {
			var table = document.createElement("table");
			table.setAttribute("id","gameBoard");

			var tr, 
				side = Math.ceil(Math.sqrt(len));

			for (var row = 0; row<side; row++) {
				tr = document.createElement("tr");
				table.appendChild(tr);

				for (var col = 0; col<side; col++) {

					td = document.createElement("td");
					td.id = "row"+row+"col"+col;
					td.position = (row*side) + col;
					td.classList.add("face-down");

					prepareForClicks(td,clickFn);
					tr.appendChild(td);
				}
			}
			return table;
		}

		function prepareForClicks(elem,clickFn) {
			if (!elem) return;
			elem.addEventListener("click", clickFn);
		}

		function findTile(where) {
			var tile = document.getElementsByTagName("td");
			return tile[where];
		}

		// public methods:

		this.reset = function() { 
			//loop through the tiles
			for(var where=0; where < len; ++where) {
				//fetch the tile
				var tile = findTile(where);
				//remove any instances of the "matched" class
				tile.classList.remove("matched");
				//remove any instances of the "face-up" class
				tile.classList.remove("face-up");
				//add the "face-down" class to the tile
				tile.classList.add("face-down"); 
			}
		};

		this.show = function(where,what) {
			//create a variable and fetch tile being shown based on position "where"
			var tile = findTile(where); 
			//set fetched tile's value to "what"
			tile.setAttribute("value", what);
			//remove "face-down" class from style of tile
			tile.classList.remove("face-down");
			//add "face-up" class to style of tile
			tile.classList.add("face-up");
		};

		this.removeSoon = function(whereArr) { 
			window.setTimeout(function() {
				for (var key in whereArr) {
					var tile = findTile(key);
					tile.classList.remove("face-up");
					tile.classList.add("matched");
				}
			}, 500);
		};
		
		this.hideSoon = function(whereArr) {  
			window.setTimeout(function() {
				for (var key in whereArr) {
					var tile = findTile(key);
					tile.classList.remove("face-up");
					tile.classList.add("face-down");
				}
			}, 500);
		};


		var table = makeTable(len);
		memorygame.appendChild(table);

		makeResetButton(this.reset,resetGameFn);

	}

	function makeResetButton(resetGui,resetGame) {
		var resetButton = document.createElement('button');
		resetButton.innerHTML = 'Reset!';
		resetButton.id = 'resetButton';
		var grid = document.getElementById('memorygame');
		grid.insertBefore(resetButton,grid.firstElementChild);
		resetButton.addEventListener('click',function() {//when clicked, reset both modules
			resetGui();
			resetGame();
		});
	};

	return GUI;
})();

