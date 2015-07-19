
//global makes debugging easier
var game,
	cards;

function go() {
	cards = new MemoryCards();
	game  = new MemoryGame(MemoryGUI, cards);
}

window.addEventListener('load', go);
