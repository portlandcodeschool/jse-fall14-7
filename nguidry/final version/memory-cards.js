var MemoryCards = (function(){

  var cards = ' abcdefghijklmnopqrstuvwxyz';

  function MemoryCardset(numPairs) { //card set ctor
    if (numPairs < 1) numPairs = 1;
    if (!numPairs || (numPairs > 26)) numPairs = 26;

    this.values = [];
    while (numPairs) {
      this.values.push(cards[numPairs]);
      this.values.push(cards[numPairs]);
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