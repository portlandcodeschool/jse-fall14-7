var MemoryGUI = (function () {

	function GUI(length,clickFn,resetGameFn) {

		var table = document.createElement('table');
		table.id = "memoryboard";

		function makeGrid(length) {
			var boardWidth = Math.floor(Math.sqrt(length));
			var boardHeight = Math.ceil(length/boardWidth);
			var cellID = 0;

			for (var row=0; row<boardHeight; ++row) {
				var tr = document.createElement('tr');
				table.appendChild(tr);
				
				for (var col=0; col<boardWidth; ++col) {
					var td = document.createElement('td');
					tr.appendChild(td);
					td.id ='row'+row+'col'+col;
				};
				table.appendChild(row);
			};
			makeGrid(length);
			document.body.appendChild('table');
		};
		var gameBoard = document.getElementById('memorygame');
		gameBoard.appendChild(table);
	};
)};

	document.body.appendChild(gameBoard);

	// public methods:
	this.reset = function() { // double-check variables and such.
		slots = values.slice();
		length = values.length;
		there = false;
		shuffle(slots);
		}
	reset();
	}

	this.show = function(where,what) {
		//...
	}

	this.removeSoon = function(whereArr) {
		//...
	}

	this.hideSoon = function(whereArr) {
		//...
	}
	return GUI;
})();
}