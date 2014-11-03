var MemoryGUI = (function () {

  function GUI(len,clickFn,resetGameFn) {
    var $memorygame = $("#memorygame");

    //NEED TO see if there is a jquery way to do this better
    function prepareForClicks(elem,clickFn) {
      if (!elem) return;
      elem.addEventListener("click", clickFn);
    }

    function makeBoard(len) {
      //create a div to be the game board with an id of gameboard
      var $gameboard = $("<div></div>")
                        .attr("id", "gameboard")
                        .append($memorygame);

      //NEED TO add memorygame css attr to use side to determine positioning of cards

      //determine length of side of game board based on length of card deck array
      var side = Math.ceil(Math.sqrt(len));
      //NEED TO figure out how to utilize this via jquery + css

      //loop to create a card in GUI for each card in deck
      for (var i=0; i < len; i++) {
        //create a card
        var $card = $("<div></div>")
                    //display card as face down
                    .addClass("face-down")
                    //append to gameboard
                    .append($gameboard);
        
        //assign the card object a position using jquery position getter
        //NEED TO determine if this is necessary, or if there is an easier way
        $card.position = $card.position();
        //jquery sub? click? eventhandler/listener?
        prepareForClicks($div, clickFn);
      }
      return $gameboard;
    }

    function makeResetButton(resetGui,resetGame) {
      var $resetbutton = $("button").attr("id", "resetbutton").append("Reset!");
      $memorygame.appendChild($resetbutton);
      $resetbutton.addEventListener('click',function() {//when clicked, reset both modules
        resetGui();
        resetGame();
      });
      return $resetbutton;
    }

    // is this function even needed if using jquery?
    function findCard(where) {
      //find all of the cards that are a child of the memorygame (best way to do this?)
      var $allcards = $("#memorygame > div");
      //return the card in the position put in as argument 'where'
      return $allcards[where];
    }


    // public methods:

    this.reset = function() {
      //fetch all cards by looking for div children of gameboard (incorporate id into jquery selector?) 
      var $allcards = $("div > div");
      $allcardw.removeClass().addClass("face-down");
      return $allcards;
    };

    this.show = function(where,what) {
      //create a variable and fetch tile being shown based on position "where"
      var $card = findCard(where); 
      //set fetched tile's value to "what"
      $card.attr("value", what)
      //remove "face-down" class from style of tile
           .removeClass("face-down")
      //add "face-up" class to style of tile
           .addClass("face-up");
    };

    this.removeSoon = function(whereArr) { 
      //jquery way to incorporate timeout?
      window.setTimeout(function() {
        for (var key in whereArr) {
          var $card = findCard(key);
          $card.removeClass("face-up")
               .addClass("matched");
        }
      }, 500);
    };
    
    this.hideSoon = function(whereArr) { 
      //jquery way to incorporate timeout? 
      window.setTimeout(function() {
        for (var key in whereArr) {
          var $card = findCard(key);
          $card.removeClass("face-up")
               .addClass("face-down");
        }
      }, 500);
    };

    //NEED TO figure out how to pass length into this
    var gameboard = makeBoard(cards.values.length); 
    makeResetButton(this.reset,resetGameFn);
  }

  

  return GUI;
})();

