
var game,cards; //global makes debugging easier
function go() {
	//Pass the number of pairs for game into MemoryCards constuctor below
	cards = new MemoryCards(5);
	//Pass in clickFn and gameoverFn after GUI and cards
	game  = new MemoryGame(MemoryGUI,cards);
}

//NEED TO see if use jquery onready?
window.addEventListener("load",go);
