var MemoryGUI = (function(){

	function GUI(obj, clickFn, resetGameFn) {

		var container = document.createElement('div');

		container.id = "gametable";


		for(var i = 0; i < obj; ++i){

			var card = document.createElement('div');

			container.appendChild(card);

			card.id = i;

			card.className = 'card facedown';

			liftCard(card);

		};

		var memorygame = document.getElementById('memorygame');

		memorygame.appendChild(container);	

		document.body.appendChild(memorygame);

		
		var resetBttn = document.createElement('button');

		memorygame.insertBefore(resetBttn,container);

		var rsttxt = document.createTextNode('reset');

		resetBttn.appendChild(rsttxt);

		resetBttn.className = 'resetBttn';


		resetBttn.addEventListener('click', function(evt){rst(); resetGameFn();
		});
		
	


		// public methods:
		this.reset = function() {

			$('.faceup span').remove();

			$('.matched span').remove();


			$('.faceup').removeClass('faceup').addClass('facedown');

			$('.matched').removeClass('matched').addClass('facedown');

		};

		
		var rst = this.reset;


		this.show = function(where,what) {

			var cell = document.getElementById(where);

			var value = document.createElement('span');

			value.className = 'value';

			cell.className = 'card faceup';

			cell.appendChild(value);

			value.innerHTML = what;



		};

		this.removeSoon = function(whereArr) {
			
			var card1 = whereArr.slice(0,1);
			
			var card2 = whereArr.slice(1,2);
			
			var c1 = document.getElementById(card1);
			
			var c2 = document.getElementById(card2);
			
			window.setTimeout(function() {
				
				c1.className = 'card matched';

				c2.className = 'card matched';

				c1.removeChild(c1.firstChild);

				c2.removeChild(c2.firstChild);

			}, 500);
		};
		
		this.hideSoon = function(whereArr) {
			
			var card1 = whereArr.slice(0,1);

			var card2 = whereArr.slice(1,2);
			
			var c1 = document.getElementById(card1);
			
			var c2 = document.getElementById(card2);
			
			window.setTimeout(function() {
				
				c1.className = 'card facedown';

				c2.className = 'card facedown';

				c1.removeChild(c1.firstChild);

				c2.removeChild(c2.firstChild);

			}, 500);
		};

		function liftCard(card){

			card.addEventListener('click',function(evt){
				
				clickFn(card.id);

			});
		}
	}

	return GUI;
})();



var game, arr;

// function go(){
	
// 	game = new MemoryGUI(52,liftCard);

// }

// window.addEventListener('load', go);




















