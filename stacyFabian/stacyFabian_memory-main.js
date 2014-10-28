
var game,cards; //global makes debugging easier
function go() {
	makeGrid(16);
	console.log('Page Loaded!');
	cards = new MemoryCards();
	game  = new MemoryGame(MemoryGUI,cards);
}

window.addEventListener("load",go);

console.log('event listener done')
