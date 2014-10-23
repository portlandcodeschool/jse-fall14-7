// You may use this cardset until you make your own

var MemoryCards = (function(){
	// produces pairs 'a'=='A','b'=='B',...
	//var alphabet = ' abcdefghijklmnopqrstuvwxyz';

// 				 var cardArr = [
// 				 'fa-ils'
// 				,'fa-ils'
// 				, 'fa-star-o'
// 				, 'fa-star-o'
// 				, 'fa-bomb'
// 				, 'fa-bomb'
// 				, 'fa-circle-o'
// 				, 'fa-circle-o'
// 				, 'fa-arrows-alt'
// 				, 'fa-arrows-alt'
// 				, 'fa-times'
// 				, 'fa-times'
// 				, 'fa-usd'
// 				, 'fa-usd'
// 				, 'fa-bolt'
// 				, 'fa-bolt'
// 				, 'fa-bell'
// 				, 'fa-bell'
// 				, 'fa-bullseye'
// 				, 'fa-bullseye'
// 			];


	var alphabet = ' abcdef';

	function MemoryCardset(numPairs) {
		if (numPairs < 1) numPairs = 1;
		if (!numPairs || (numPairs > 1)) numPairs =  6;

		this.values = [];

		while (numPairs) {
			this.values.push(alphabet[numPairs]);
			this.values.push(alphabet[numPairs].toUpperCase());
			--numPairs;
		}
		this.match = function(a,b) {
			return a.toUpperCase() == b.toUpperCase();
		}
		// this.display could remain undefined if MemoryGame allows it to be optional,
		// but in case it's required, provide this identity function:
		this.display = function(val) {
			return val;
		}

	}
	return MemoryCardset;
})();




// You may use this cardset until you make your own

var MemoryCardsSymb = (function(){
	// produces pairs 'a'=='A','b'=='B',...
	//var alphabet = ' abcdefghijklmnopqrstuvwxyz';

				 var symbArry = [
				 'fa-ils'
				,'fa-ils'
				, 'fa-star-o'
				, 'fa-star-o'
				// , 'fa-bomb'
				// , 'fa-bomb'
				// , 'fa-circle-o'
				// , 'fa-circle-o'
				// , 'fa-arrows-alt'
				// , 'fa-arrows-alt'
				// , 'fa-times'
				// , 'fa-times'
				// , 'fa-usd'
				// , 'fa-usd'
				// , 'fa-bolt'
				// , 'fa-bolt'
				// , 'fa-bell'
				// , 'fa-bell'
				// , 'fa-bullseye'
				// , 'fa-bullseye'
			];


	//var alphabet = ' abcdef';

	function MemoryCardset(numPairs) {
		// if (numPairs < 1) numPairs = 1;
		// if (!numPairs || (numPairs > 1)) numPairs =  10;
		console.log(numPairs);

		this.values = symbArry.map(function(num) {
  		return num;
		});


		// while (numPairs) {
		// 	this.values.push(symbArry[numPairs]);
		// 	--numPairs;
		// }
		this.match = function(a,b) {
			return a == b;
		}
		// this.display could remain undefined if MemoryGame allows it to be optional,
		// but in case it's required, provide this identity function:
		this.display = function(val) {
			return val;
		}


	}
	return MemoryCardset;
})();

function winFn(){
	return $('#memorygame').prepend('<div class="winner">you win</div>');
}



