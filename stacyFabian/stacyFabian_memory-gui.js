var MemoryGUI = (function () {

	console.log("start MemoryGUI");

	function GUI(length,clickFn,resetGameFn) {
		console.log("After GUI Constructor")
		var gameBoard = document.getElementById('memorygame');
		var table = document.createElement('table');
		// table.id = 'memoryboard';

		function makeGrid(length) {
			var boardWidth = Math.floor(Math.sqrt(length));
			var boardHeight = Math.ceil(length/boardWidth);
			var counter = 0; // need to get to show partial rows
			for (var row=0; row<boardHeight; ++row) {
				var tr = document.createElement('tr');
				table.appendChild(tr);
				for (var col=0; col<boardWidth; ++col) {
					if (counter<length) {
						var td = document.createElement('td');
						tr.appendChild(td);
						td.id ='row'+row+'col'+col;
						td.classList.add('matched');
						counter++
					};
				}
				table.appendChild(tr);
			}
		}
		gameBoard.appendChild(table);
		document.body.appendChild(gameBoard);
	}
	return GUI();
})();



// 	// public methods:
// 	this.reset = function() { // double-check variables and such.
// 		slots = values.slice();
// 		length = values.length;
// 		there = false;
// 		shuffle(slots);
// 		}
// 	reset();

// 	this.show = function(where,what) {
// 		//...
// 	}

// 	this.removeSoon = function(whereArr) {
// 		//...
// 	}

// 	this.hideSoon = function(whereArr) {
// 		//...
// 	}
// 	return GUI;
// })();