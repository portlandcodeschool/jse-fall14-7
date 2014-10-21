var MemoryGUI = (function () {


	function GUI(len,clickFn,resetGameFn) {


		if(Math.sqrt(len) % 1 != 0) { // if len does not have a square root...
			var boardW = Math.floor(Math.sqrt(len));
			var boardH = Math.ceil(len/boardW);
			console.log(boardH, boardW);
		} else { // if len has a square root...
			var boardW = Math.sqrt(len);
			var boardH = Math.sqrt(len);
		}	

		var clickFunc = function(td) {
			td.addEventListener('click',function(evt){

				clickFn(td.id); // calls lift function from MemoryGame module
				
			});
		}

		var table = document.createElement('table');
		table.id = "gametable";

		var totalTd = 0

		for (var row = 0; row<boardH; ++row) {
			var tr = document.createElement('tr');
			table.appendChild(tr);

			for (var col=0; col<boardW; ++col) {

				if (totalTd<len) {

					var td = document.createElement('td');
					tr.appendChild(td);

					td.id = totalTd++

					td.classList.add('facedown');

					clickFunc(td);
				}

			}
		}

		var memorygame = document.getElementById('memorygame');
		memorygame.appendChild(table);

		var resetButton = document.createElement('button');
		var resetLable = document.createTextNode('Reset Game');
		resetButton.appendChild(resetLable);
		resetButton.id = "resetbutton";

		resetButton.addEventListener('click', function(evt) {
			
			game.reset();

		});
		

		memorygame.insertBefore(resetButton,table);
		document.body.appendChild(table);


		// // public methods:

		// ==== GUI Reset =====
		// ====================
		this.reset = function() {

			// reset all cards to face down

			console.log("The GUI board has been reset.");
		}

		this.show = function(where,value) {

			var tabDat = document.getElementById(where); // find the element with the id that matches 'where'
			var dispVal = document.createTextNode(value); // create a text node for 'value'

			tabDat.appendChild(dispVal); // append the text node to the element

			tabDat.classList.add('faceup'); // change CSS class for specfic td

			// console.log("gui show "+where+", "+value+" function");

		}

		this.removeSoon = function(whereArr) {

			console.log("Will remove "+whereArr+" soon");
		}

		this.hideSoon = function(whereArr) {

			console.log("Will hide "+whereArr+" soon");
		}

	};


	return GUI;

})();



