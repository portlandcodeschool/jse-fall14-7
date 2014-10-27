
var game,cards; //global makes debugging easier
function go() {
	cards = new MemoryCards(); //Pass digit into this. # of pairs. see memory-cards file
	//need to define matchFn and gameoverFn
	game  = new MemoryGame(MemoryGUI,MemoryCards);
}

window.addEventListener("load",go);
