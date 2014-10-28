var game,cards; //global makes debugging easier
function go() {
	cards = new MemoryCards();
	game  = new MemoryGame(MemoryGUI,cards);
	var thing = new MemoryGUI(64);
}

window.addEventListener("load",go);