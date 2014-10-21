var MemoryGUI = (function (){

	function GUI(len,clickFn,resetGameFn) {

		if(Math.sqrt(len) % 1 !== 0){

			var boardW = Math.floor(Math.sqrt(len));
		
			var boardH = Math.ceil(len/boardW);
			
		}

		var boardW = Math.sqrt(len);

		var boardH = Math.sqrt(len);

		// var container = document.getElementById('memorygame')

		var table = document.createElement('table');
	
		table.id = "gametable";


		var totalTd = 0;
		
		for (var row=0; row<boardH; ++row) {
			
			var tr = document.createElement('tr');
			
			table.appendChild(tr);

			for (var col=0; col<boardW; ++col) {

				if(totalTd < len){
				
					var td = document.createElement('td');
						
					tr.appendChild(td);
					
					td.id = totalTd++;

					td.classList.add('facedown');

					clickFn(td);
				}
			}
		}

		var memorygame = document.getElementById('memorygame');

		memorygame.appendChild(table);	

		var resetBttn = document.createElement('button');

		memorygame.insertBefore(resetBttn,table);

		var rsttxt = document.createTextNode('reset');

		resetBttn.appendChild(rsttxt);

		resetBttn.classList.add('resetBttn');

		resetBttn.addEventListener('click', function(evt){ td.classList.add('facedown'); });

		
		

		// public methods:
		this.reset = function() {

			td.classList.add('reset');
			

		};

		this.show = function(where,value) {

			where = td.id;

			where.classList.add('faceup');

		};

		this.removeSoon = function(whereArr) {
			//...
		};
		this.hideSoon = function(whereArr) {
			//...
		};

		var rst = this.reset;
	}	

	return GUI;
})();

function clickFn1(td){

	td.addEventListener('click',function(evt){

		td.classList.add('faceup');

		console.log(td.id);
	});




}



function go(){
	MemoryGUI(52,clickFn1);
}

window.addEventListener('load',go);







