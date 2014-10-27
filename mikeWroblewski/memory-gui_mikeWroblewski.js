var MemoryGUI = (function () {

	function GUI(len,clickFn,resetGameFn) {


		// // === Finding dimensions of game board === ** DO NOT NEED THIS WITH 'div' ELEMENTS **
		// // ======================================== ***** WHEN DEFINING MARGINS WITH CSS *****
		// var boardW = Math.floor(Math.sqrt(len));
		// var boardH = Math.ceil(len/boardW);


		// === Click Function for game board ===
		// =====================================
		var clickFunc = function(card) {

			card.addEventListener('click',function(evt){

				clickFn(card.id); // calls lift method from MemoryGame module
			});
		}


		// === Creating board using len argument ===
		// =============================================
		var container = document.createElement('div');
		container.id = "gametable";

		var totalCard = 0

		for (var row = 0; row<len; ++row) {

		    if (totalCard<len) {

		        var card = document.createElement('div');
		        container.appendChild(card);

		        card.id = totalCard++

		        card.classList.add('facedown');

		        clickFunc(card);
		    }
		}

		var memorygame = document.getElementById('memorygame');
		memorygame.appendChild(container);

		var resetButton = document.createElement('button');
		var resetLable = document.createTextNode('Reset Game');
		resetButton.appendChild(resetLable);
		resetButton.id = "resetbutton";


		// === Reset Button ===
		// ====================
		resetButton.addEventListener('click', function(evt) {
			
			resetGameFn(); // calls reset method from MemoryGame module
		});
		
		memorygame.insertBefore(resetButton,container);

		var topSpace = document.createElement('p');
		$('body').prepend(topSpace);


		// public methods:

		// ==== GUI Reset =====
		// ====================
		this.reset = function() {

			$('.facedown').removeClass('faceup matched'); // removes unwanted classes from all cards
			$('.facedown span').remove(); // removes all <span> elements from any element with class "facedown span"
		}

		this.show = function(where,value) {

			var tabDat = document.getElementById(where);  // find the element with the id that matches 'where'
			var newSpan = document.createElement('span'); // creates a <span>

			tabDat.appendChild(newSpan); // append the text node to the element
			newSpan.innerHTML = value; 	 // place 'value' inside of the span (this could be any HTML code)

			tabDat.classList.add('faceup'); // change CSS class for specfic card
		}

		this.removeSoon = function(whereArr) {

			var card1 = whereArr.splice(0,1); // remove & store first value from whereArr
			var card2 = whereArr; 			  // store remaining value from whereArr

			var c1 = document.getElementById(card1); // store the location of card1
			var c2 = document.getElementById(card2); // ...same for card2

			window.setTimeout(function() {

				c1.classList.add('matched'); // add matched CSS to c1
				c2.classList.add('matched'); // ...same for c2

			}, 1000);
		}

		this.hideSoon = function(whereArr) {

			var card1 = whereArr.splice(0,1);
			var card2 = whereArr;

			var c1 = document.getElementById(card1);
			var c2 = document.getElementById(card2);

			window.setTimeout(function() {

				c1.classList.remove('faceup');
				c2.classList.remove('faceup');

				c1.removeChild(c1.firstChild); // removes textNode from revealed card
				c2.removeChild(c2.firstChild); // ...same

			}, 1000);
		}

		this.gameReveal = function() {

			window.setTimeout(function(){

				$('.facedown').removeClass('matched');

			}, 1020);
		}
	};


	return GUI;

})();



