var MemoryGUI = (function () {
	
	function GUI(len,clickFn,resetGameFn) {

		function prepareForClicks(elem,x,y) {
			if (!elem) return;
			elem.addEventListener("click",function(){clickFn();});
		}

		// public methods:
		this.reset = function() {
			//...
		};

		this.show = function(where,value) {
			//probably not td...
			td[where].classList.add('face-up');
			//**The display value of that card (according to 
			//the game model) will be provided as parameter value.
		};

		this.removeSoon = function(whereArr) {
			whereArr.classList.add('face-down');
		};
    
		setTimeout(this.removeSoon, 500);

		this.hideSoon = function(whereArr) {
			whereArr.classList.add('matched');
		};
    
		setTimeout(this.hideSoon, 500);

		//table generator here:

		function makeTable(len) {
			var table = document.createElement('table');
			table.setAttribute('id','gameBoard');

			var tr, 
				td, 
				gridSize = Math.ceil(Math.sqrt(len));

			for (var row = 0; row<5; row++) {

				tr = document.createElement('tr');
				table.appendChild(tr);

				for (var col = 0; col<5; col++) {

					td = document.createElement('td');
					td.id = 'row'+row+'col'+col;

					prepareForClicks(td,col,row);
					tr.appendChild(td);
					td.classList.add('face-down');
				}
			}

			return table;
		
		}

	var table = makeTable(len);

	document.getElementById("memorygame").appendChild(table);

	}

	this.reset = reset;
	this.show = show;
	this.removeSoon = removeSoon;
	this.hideSoon = hideSoon;

	return GUI;
})();
