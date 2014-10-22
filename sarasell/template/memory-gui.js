var MemoryGUI = (function () {

	function GUI(length,clickFn,resetGameFn) {

		// public methods:
		//this.reset = function() { //adopted from dan's solution but isn't working yet
		//	for (var where=0, where<length, ++where);
		//		resetCell(findCell(where));
		//}

		function hide(where){

		}

		this.show = function(where,value) {//dont trust this one yet, far to go on it
			console.log(value);
		}
		this.removeSoon = function(whereArr) {
			//...
		}
		this.hideSoon = function(whereArr) {
			//...
		}
		makeGrid(length);
	}

	function makeID(where) {
		return 'cell' + where;
	}

	function findCell(where) {
		// ...
	}

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
	}

	function resetCell(where) {
		cell.classList.remove('faceup');
	}

	function clickFn(cell) {
		cell.addEventListener('click',function() {
			cell.classList.add('faceup');
			console.log(cell.id)
		})
	}
	return GUI;
})();

