
var MemoryGUI = (function () {

	function GUI(length,clickFn,resetGameFn) { // begin ctor
	// 'where' = cell position
		this.reset = function() {
			for (var where=0; where<length; ++where) {
				resetCell(findCell(where));
			}
		}

		var hide = function(where) {
			var cell = findCell(where);
			cell.classList.remove('faceup');
			cell.removeAttribute('value');
		}

		this.show = function(where,what) {
			var cell = findCell(where);
			cell.setAttribute('value',what); // check dan's answer in slack on this (NEED TO PULL TOGETHER/IN THE lift AND OTHER GAME PLAYING FUNCTION)
			cell.classList.add('faceup');
		}

		var remove = function(where) {
			var cell = findCell(where);
			cell.classList.add('matched');
		}

		this.removeSoon = function(locs) { // what to run once the lift function confirms they match
			window.setTimeout(function() {
				locs.forEach(remove);
			}, 2000);
		}

		this.hideSoon = function(locs) {
			window.setTimeout(function() {
				locs.forEach(hide);
			}, 2000,)
		}

		makeGrid(clickFn,length);
		makeReset(this.reset,resetGameFn); // CHECK FUNCTION NAMES FOR ACCURACY IN OTHER DOCUMENTS
	} // end constructor

	function makeID(where) {
		return 'cell'+where;
	}

	function findCell(where) {
		return document.getElementById(makeID(where));
	}

	// one of his function in the solutions. see if you can change it to a table
	function makeCell() {
		var cell = document.createElement('div');
		cell.id = makeID(where);
		cell.classList.add('memoryCell');
		if (isFirstCol)
			cell.classList.add('firstCol');
		// Each scope of makeCell is specific to one cell, so clickFn callback always gets corresponding where parameter:
		cell.addEventListener('click',function(){
			clickFn(where);
		});
		return cell;
	}

	function resetCell(cell) {
		cell.classList.remove('faceup');
		cell.classList.remove('matched');
	}

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

	function makeResetButton(resetGui,resetGame) {
		var btn = document.createElement('button');
		btn.innerHTML = 'Reset Game';
		btn.id = 'resetButton';
		var gameBoard = document.getElementById('memorygame');
		grid.insertBefore(btn,gameBoard.firstElementChild);
		btn.addEventListener('click',function() {
			resetGui();
			resetGame();
		});
	}

	// DO THIS MIGHT BE YOUR BOARD
	function makeGrid () {

	}

	return GUI;
})();






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
						td.addEventListener();
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

