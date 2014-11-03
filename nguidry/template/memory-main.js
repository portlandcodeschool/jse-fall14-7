
var game,cards; //global makes debugging easier

function go() {
	cards = new MemoryCards(10); //Pass digit into this. # of pairs. see memory-cards file
	//need to define matchFn and gameoverFn
	game  = new MemoryGame(MemoryGUI,cards);
}

window.addEventListener("load",go);
//window.onload = go; 