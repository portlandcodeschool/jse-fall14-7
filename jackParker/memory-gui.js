var MemoryGUI = (function () {

	//...

	function GUI(len, clickFn, resetGameFn) {

		// public methods:
		this.reset = function() {
			$('.face-up, .matched').addClass('face-down').removeClass('face-up matched');
		}
		
		this.show = function(where, what) {
			$('#memorygame')
				.find('[data-position="' + where + '"]')
				.toggleClass('face-up face-down')
				.children('span')
				.text(what);
		}
		
		this.removeSoon = function(whereArray) {
			window.setTimeout(function() {
				
				$('.face-up').toggleClass('face-up matched');
				
			}, 500);
		}
		
		this.hideSoon = function(whereArray) {
			window.setTimeout(function() {
				
				$('.face-up').toggleClass('face-up face-down');
				
			}, 500);
		}
		
		
		// create grid
		var memorygame = $('#memorygame');
		
		var rowLen  = Math.floor(Math.sqrt(len)),
			count   = 0,
			rowNum  = 1,
			cellNum = 1;
		
		while(count < len) {
			
			// create our div and add it to the board
			$('<div><span></span></div>')
				.addClass('card face-down')
				.attr('id', 'r' + rowNum + 'c' + cellNum)
				.attr('data-position', count)
				.appendTo('#memorygame');
			
			// increment our counters
			++count;
			++cellNum;
			
			if(count % rowLen === 0) { // if we're on the last card in the row
				
				// create a div to clear our floats
				$('<div>')
					.addClass('clear')
					.appendTo('#memorygame');
				
				// reset our cell counter
				cellNum = 1;
				
				// increment our row counter
				++rowNum;
				
			}
			
		}
		
		// add reset button
		$('body').prepend('<button>Reset</button>');
		
		// last div to clear our floats
		$('<div>')
			.addClass('clear')
			.appendTo('#memorygame');
		
		// add a width to our memorygame container
		memorygame.width(memorygame.outerWidth()).css('display', 'block');
		
		// make each card clickable
		memorygame.on('click', '.card', function() {
			
			var cardPos = $(this).data('position');
			clickFn(cardPos);
			
		});
		
		// reset button
		$('button').on('click', function() {
			
			resetGameFn();
			
		});
		
	}

	return GUI;
	
})();