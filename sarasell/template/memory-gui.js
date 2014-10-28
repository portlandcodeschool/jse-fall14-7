var MemoryGUI = (function () {

	function GUI(length,clickFn,resetGameFn) {

		this.resetGUI = function() {
			for (var where = 0; where < length; where++) {
				findCell(resetCell(where));
			}
		}

		function hide(where){
			cell.classList('facedown');
		}

		this.show = function(where,value) {
			var cell = findCell(where);
			cell.classList('faceup');
			console.log(cell.value);
		}
		this.remove = function(where) {
			var cell = findCell(where);
			cell.classList.add('missing');
		}
		this.removeSoon = function(whereArr) {
			if (this.match) {
				window.setTimeout(remove,2000);
			}
		}
		this.hideSoon = function(whereArr) {
			if(!(this.match)) {
				window.setTimeout(hide,2000);
			}
		}
		makeGrid(length);
	}

	function makeID(where) {
		return 'cell' + where;
	}

	function findCell(where) {
		return document.getElementById(makeID(where));
	}
	
	var resetButton = document.createElement('button');
	var resetLabel = document.createTextNode('Reset Game');
	resetButton.addEventListener('click', resetBoth);
	resetButton.appendChild(resetLabel);

	function makeGrid(length) {
		var container = document.getElementById('memorygame');
		var numCols = Math.ceil(Math.sqrt(length));
		for (var where = 0; where < length; ++where) {
			var cell = document.createElement('cell');
			cell.id = makeID(where);
			cell.classList.add('facedown');
			container.appendChild(cell);

			clickFn(cell);
		}
			container.appendChild(resetButton);
	}

	function clickFn(cell) {
		cell.addEventListener('click',function() {
			cell.classList.add('faceup');
			console.log(cell.id)
		})
	}
	function resetBoth(resetGUI,resetGameFn) {
		resetGUI();
		resetGameFn();
	}
	return GUI;
})();

