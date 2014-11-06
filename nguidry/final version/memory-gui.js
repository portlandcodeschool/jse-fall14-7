
var MemoryGUI = (function () {

	function GUI(len,clickFn,resetGameFn) { //begin ctor

		this.reset = function() { //reset gui only
			for (var where=0; where<len; ++where) {
				resetCard(findCard(where));
			}
		}

		this.show = function(where,what) {
			var card = findCard(where);
			card.setAttribute('value',what);
			//'value' attribute is used by CSS pseudo-class (faceup:before)
			// to display the card face
			card.classList.add('faceup');
		}

		var remove = function(where) {
			var card = findCard(where);
			card.classList.add('missing')
		}

		this.removeSoon = function(locs) {
			window.setTimeout(function() {
				locs.forEach(remove);
			}, 1000);
		}

		this.hideSoon = function(locs) {
			window.setTimeout(function() {
				locs.forEach(hide);
			}, 1000);
		}

		var hide = function(where) {
			var card = findCard(where);
			card.classList.remove('faceup');
			card.removeAttribute('value');
		}

		makeGrid(clickFn,len);
		makeReset(this.reset,resetGameFn);
	} // end ctor

	function makeID(where) {
		return 'card'+where;
	}

	function findCard(where) {
		return document.getElementById(makeID(where));
	}

	function makeCard(where,isFirstCol,clickFn) {
		var card = document.createElement('div');
		card.id = makeID(where);
		card.classList.add('memorycard');
		if (isFirstCol)
			card.classList.add('firstCol');
		// Each scope of makecard is specific to one card, so clickFn callback
		//  always gets corresponding where parameter:
		card.addEventListener('click',function(){
			clickFn(where);
		});
		return card;
	}

	function resetCard(card) {
		card.classList.remove('faceup');
		card.classList.remove('missing');
	}

	function makeGrid(clickFn,len,cols) {
		if (!cols) cols = Math.ceil(Math.sqrt(len));
		var grid = document.getElementById('memorygame');
		for (var id=0; id<len; ++id) {
			var isFirstCol = (id%cols===0);
			grid.appendChild(makeCard(id,isFirstCol,clickFn));
		}
	}

	function makeReset(resetGui,resetGame) {
		var btn = document.createElement('button');
		btn.innerHTML = 'Reset!';
		btn.id = 'resetBtn';
		var grid = document.getElementById('memorygame');
		grid.insertBefore(btn,grid.firstElementChild);
		btn.addEventListener('click',function() {//when clicked, reset both modules
			resetGui();
			resetGame();
		});
	}


	return GUI;
})();

