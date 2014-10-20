var MemoryGUI = (function () {

	function GUI(length,clickFn,resetGameFn) {

		// public methods:
		this.reset = function() {
			//...
		}
		this.show = function(where,value) {
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
	function makeGrid(length) {
		var container = document.getElementById('memorygame');
		var numCols = Math.ceil(Math.sqrt(length));
		for (var row = 0; row < length; ++row) {
			var div = document.createElement('div');
			div.id = 'pos' + row;
			div.classList.add('facedown');
			container.appendChild(div);

			clickFn(div);
		}
		//for (var col = 0; col < length; ++col) {
			//var divCol = document.createElement('divCol');
		//	div.id = 'row' + row + 'col' + col;
		//	div.classList.add('facedown');
		//	row.append(col);
		//}
	}
	function clickFn(div) {
		div.addEventListener('click',function(){console.log("I've been chosen!")})
	}
	return GUI;
})();

