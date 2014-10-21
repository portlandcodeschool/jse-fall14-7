var MemoryGUI = (function () {

	//...

	function GUI(length,clickFn,resetGameFn) {


		function makeGrid(length) {
			var container = document.getElementById('memoryGame')
			// var numCols = Math.ceil(Math.sqrt(length)); // use the css to set the columns to break at a pretty point

			for (var i=0; i<length; ++i) {
				var div = document.createElement('div');
				div.id = "cell"+i;
				div.classList.add('facedown');
				container.appendChild(div);
			}
			makeGrid(length);
		}
	}

	// public methods:
	this.reset = function() { // double-check variables and such.
		var reset = function() {  //public method
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
