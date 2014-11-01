
var game,cards; //global makes debugging easier
function go() {
	//Pass the number of pairs for game into MemoryCards constuctor below
	cards = new MemoryCards();
	//Pass in clickFn and gameoverFn after GUI and cards
	game  = new MemoryGame(MemoryGUI,cards);
}

//use jquery onready?
window.addEventListener("load",go);
