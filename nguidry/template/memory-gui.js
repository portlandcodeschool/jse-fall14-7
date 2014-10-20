var MemoryGUI = (function () {


	function prepareForClicks(elem,clickFn,row,col) {
		if (!elem) return;
		elem.addEventListener("click",function(){clickFn(row,col);});
	}

	function rowColToId(row,col) {
		return 'row'+row+'col'+col;
	}

	function makeTable(len) {
		var table = document.createElement('table');
		table.setAttribute('id','gameBoard');

		var tr, 
			td,
			side = Math.ceil(Math.sqrt(len));

		for (var row = 0; row<side; row++) {
			tr = document.createElement('tr');
			table.appendChild(tr);
			for (var col = 0; col<side; col++) {
				td = document.createElement('td');
				td.id = rowColToId(col,row);

				prepareForClicks(td,col,row);
				tr.appendChild(td);
			}
		}
		return table;
	}

	function GUI(len,clickFn,resetGameFn) {
		var table = makeTable(len);
		document.getElementById("memorygame").appendChild(table);

		this.board = table; //???

		// this.drawChecker = function(row,col,drawFn) {
		// 	var sqr = document.getElementById(rowColToId(row,col));
		// 	return (sqr && drawFn(sqr));

		// public methods:
		this.reset = function() {
			//...
		}
		this.show = function(where,what) {
			//probably not td...
			//td[where].classList.add('face-up');
			//**The display value of that card (according to 
			//the game model) will be provided as parameter value.
		}
		this.removeSoon = function(whereArr) {
			//whereArr.classList.add('face-down');
		}

		this.hideSoon = function(whereArr) {
			//whereArr.classList.add('matched');
		}

		//setTimeout(this.removeSoon, 500);
		//setTimeout(this.hideSoon, 500);
	}

	this.reset = reset;
	this.show = show;
	this.removeSoon = removeSoon;
	this.hideSoon = hideSoon;

	return GUI;
})();
