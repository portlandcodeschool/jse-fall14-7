
var game,cards; //global makes debugging easier

function go() {
	cards = new MemoryCards(8); //Pass digit into this. # of pairs. see memory-cards file
	//need to define matchFn and gameoverFn
	game  = new MemoryGame(MemoryGUI,cards,cards.match,function(){console.log("game over, man!")});
}

window.addEventListener("load",go);
