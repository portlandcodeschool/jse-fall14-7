var MemoryGUI = (function () {


	function GUI(len,clickFn,resetGameFn) {


		// === Finding dimensions of game board ===
		// ========================================
		var boardW = Math.floor(Math.sqrt(len));
		var boardH = Math.ceil(len/boardW);


		// === Click Function for game board ===
		// =====================================
		var clickFunc = function(td) {
			td.addEventListener('click',function(evt){

				clickFn(td.id); // calls lift function from MemoryGame module
				
			});
		}


		// === Creating board using dimensions found ===
		// =============================================
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


		// === Reset Button ===
		// ====================
		resetButton.addEventListener('click', function(evt) {
			
			resetGameFn();

		});
		

		memorygame.insertBefore(resetButton,table);
		document.body.appendChild(table);


		// // public methods:

		// ==== GUI Reset =====
		// ====================
		this.reset = function() {

			$('td').removeClass('faceup matched'); // removes unwanted classes from all cards
			$('.facedown').empty(); // removes text (textNode) from any element with class "facedown"

		}

		this.show = function(where,value) {

			var tabDat = document.getElementById(where); // find the element with the id that matches 'where'
			var dispVal = document.createTextNode(value); // create a text node for 'value'

			tabDat.appendChild(dispVal); // append the text node to the element

			tabDat.classList.add('faceup'); // change CSS class for specfic td

			// console.log("gui show "+where+", "+value+" function");

		}

		this.removeSoon = function(whereArr) {

			var card1 = whereArr.splice(0,1);
			var card2 = whereArr;

			var c1 = document.getElementById(card1);
			var c2 = document.getElementById(card2);

			window.setTimeout(function() {

				c1.classList.add('matched');
				c2.classList.add('matched');

			}, 1500);

			// console.log("Will remove "+card1+" & "+card2+" soon");
		}

		this.hideSoon = function(whereArr) {

			var card1 = whereArr.splice(0,1);
			var card2 = whereArr;

			var c1 = document.getElementById(card1);
			var c2 = document.getElementById(card2);

			window.setTimeout(function() {

				c1.classList.remove('faceup');
				c2.classList.remove('faceup');

				c1.removeChild(c1.firstChild);
				c2.removeChild(c2.firstChild);

			}, 1500);

			// console.log("Will hide "+card1+" & "+card2+" soon");
		}

	};


	return GUI;

})();



