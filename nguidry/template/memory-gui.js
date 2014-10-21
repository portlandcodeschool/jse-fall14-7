var MemoryGUI = (function () {

	function GUI(len,clickFn,resetGameFn) {

		var memorygame = document.getElementById("memorygame");

		function prepareForClicks(elem,clickFn) {
			if (!elem) return;
			elem.addEventListener("click", clickFn);
		}

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

		// public methods:
		this.reset = function() {
			var allTds = document.getElementsByTagName("td");
			allTds.classList.remove("matched");
			addTds.classList.remove("face-up");
			addTds.classList.add("face-down");
		};

		this.show = function(where,what) {
			//change the class from face-down to face-up
			td[where].classList.remove("face-down");
			td[where].classList.add("face-up");
		};

		this.removeSoon = function(whereArr) {
			//whereArr.classList.add("face-down");
		};

		setTimeout(this.removeSoon, 500);
		
		this.hideSoon = function(whereArr) {
			//whereArr.classList.add("matched");
		};

		setTimeout(this.hideSoon, 500);


		var table = makeTable(len);
		memorygame.appendChild(table);

		var resetButton = document.createElement("button");
		resetButton.id = "resetButton";
		memorygame.appendChild(button);
	}

	return GUI;
})();

console.log("lkadjfalskdf");
