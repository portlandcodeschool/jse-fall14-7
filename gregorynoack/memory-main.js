
var game,cardset; //global makes debugging easier


function go() {
	cardset = new MemoryCardsSymb();
	game  = new MemoryGame(MemoryGUI,cardset,winFn);
}

window.addEventListener("load",go);
