// You may use this cardset until you make your own

var MemoryCards = (function(){
	
	// produces pairs 'a'=='A','b'=='B',...
	var numbers = ' 12345678';

	function MemoryCardset(numPairs) {
		if (numPairs < 1) numPairs = 1;
		if (!numPairs || (numPairs > 8)) numPairs = 8;

		this.values = [];
		while (numPairs) {
			this.values.push(numbers[numPairs]);
			this.values.push(numbers[numPairs]);
			--numPairs;
		}
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
