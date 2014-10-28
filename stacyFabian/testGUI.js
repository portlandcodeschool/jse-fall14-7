var gameBoard = document.getElementById('memorygame');
var table = document.createElement('table');

function makeGrid(length) {
	var boardWidth = Math.floor(Math.sqrt(length));
	var boardHeight = Math.ceil(length/boardWidth);
	var counter = 0; // need to get to show partial rows
	for (var row=0; row<boardHeight; ++row) {
		var tr = document.createElement('tr');
		table.appendChild(tr);
		for (var col=0; col<boardWidth; ++col) {
			if (counter<length) {
				var td = document.createElement('td');
				tr.appendChild(td);
				td.id ='row'+row+'col'+col;
				td.classList.add('matched');
				counter++
			};
		}
		table.appendChild(tr);
	}
}
gameBoard.appendChild(table);
document.body.appendChild(gameBoard);


function go(){
	makeGrid(18);
}

window.addEventListener("load",go);