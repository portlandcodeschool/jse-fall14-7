
            var array = new Array;
            var win32deaCodeArray = new Array;



    function populate(size){
    for(var i = 0; i < size; i++){ //populate the array.
          array.push(i,i);

        }

    }
---------------------------------

function shuffle(o){ //v1.0 I didn't write this function, but it works.
    for(var j, x, i = o.length; i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};


---------------------------------
function compare(x){ // this is the basis for the match function 
    
    if (x === y) {
        alert('match!');
    }else if (x !== y) {

    };{

        y = x;
    }
}
//this is the expanded version of compare; it handles non-matches
// and resets y to undefined.
function compare(x){ // this is the basis for the match function 
    
    if (typeof(x) ==='number'&& typeof(y)==='undefined') {

        y = x

        //alert(y);
        console.log('y is now',y);

    }else if (array[x] === array[y]) {

        //alert('Match!')
        console.log('Match!');
        win32deadCodeArray.unshift(array[x],array[y]);
        array[x]=undefined;
        array[y]=undefined;
        y = undefined;
        x = undefined;


    }else if (array[x] !== array[y]) {

        //alert('try again!')
        console.log('Try Again!');

        y = undefined;
    };

        
}
---------------------------------
function reset(){
    while(array.length > 0) {//clears array
     array.pop();
    }
}

---------------------------------------// game is not linked to gui yet



    function makeBoard(h,w){
    var $tab, $row, $cell;
         
       $tab = $('<div>')
           .attr('id','game')
           .appendTo('#memorygame');
                    
                     
           for(var i = 0; i < h; i++){
                $row = $('<tr>')
                .appendTo($tab);
                for(var j = 0; j <w; j++){
                     var cellID = ('row'+i+'col'+j)
                     $cell = $('<td>')
                     .attr('id',cellID)
                     .click(function(){
                        return($(this).attr('id'));
                        })
                     .appendTo($row);
                }
             } 
         }
             $(makeBoard);
// }