let turn = 0;
let boardLength = 196;
let itemLength = 225;
let allButs = document.getElementsByClassName('but');
let allItems = document.getElementsByClassName('item');
let gamers = document.getElementsByClassName('gamer');


$(document).ready(function(){

    $(".but").click(function(){
        
        turn++;
        if (turn%2===0) {
        	$(this).addClass('bulbWhite');
        	// gamers[1].className = 'turn';
        	// gamers[0].className = 'gamer';
        } else {
        	$(this).addClass('bulb');
        	// gamers[0].className = 'turn';
        	// gamers[1].className = 'gamer';
        }
        
		checkWinner('but bulb', 0,'Gamer 1', 'but bulb red');
		checkWinner('but bulbWhite', 1,'Gamer 2', 'but bulbWhite red');

    });
});

function addBoard(){
   for (var i = 0; i < itemLength; i++) {        
             $("#board").append('<div class="item"></div>');             
    }

    $('.item').append('<div class="but"></div>');

    for (var i = 210; i < itemLength; i++) {
       	allItems[i].innerHTML = '';
       }

   let j = 14;

   while ( j < itemLength) {
       	allItems[j].innerHTML = '';
       	j +=15;
       }
}

 addBoard();

 function buttonCreation() {
 	$("#board").after('<button type="submit" class="button">New game</button>');
    $('.button').click(function() {
	 	location.reload();
	 })
 }

 function checkWinner(style, gamer, winner, newStyle) {
 	
 	for (var i = 0; i < boardLength; i++) {
 		if ((allButs[i].className == style) && (allButs[i+1].className == style) && (allButs[i+2].className == style) && (allButs[i+3].className == style))
 		
 		{
 			allButs[i].className = newStyle;
 			allButs[i+1].className = newStyle;
 		    allButs[i+2].className = newStyle;
 		    allButs[i+3].className = newStyle;

 		    gamers[gamer].innerHTML = `${winner} won!!! Congrats!`
 		    gamers[gamer].className = 'winnerText';
 		    buttonCreation();	
        $( "div" ).click(function( event ) {
            event.stopImmediatePropagation();
        });
 		}

 		if ((allButs[i].className == style) && (allButs[i+14].className == style) && (allButs[i+28].className == style) && (allButs[i+42].className == style)) {
 			allButs[i].className = newStyle;
 			allButs[i+14].className = newStyle;
 		    allButs[i+28].className = newStyle;
 		    allButs[i+42].className = newStyle;

 		    gamers[gamer].innerHTML = `${winner} won!!! Congrats!`
 		    gamers[gamer].className = 'winnerText';
 		    buttonCreation();
 		}

 		if ((allButs[i].className == style) && (allButs[i+15].className == style) && (allButs[i+30].className == style) && (allButs[i+45].className == style)) {
 			allButs[i].className = newStyle;
 			allButs[i+15].className = newStyle;
 		    allButs[i+30].className = newStyle;
 		    allButs[i+45].className = newStyle;

 		    gamers[gamer].innerHTML = `${winner} won!!! Congrats!`
 		    gamers[gamer].className = 'winnerText';
 		    buttonCreation();
 		}

 		if ((allButs[i].className == style) && (allButs[i+13].className == style) && (allButs[i+26].className == style) && (allButs[i+39].className == style)) {
 			allButs[i].className = newStyle;
 			allButs[i+13].className = newStyle;
 		    allButs[i+26].className = newStyle;
 		    allButs[i+39].className = newStyle;

 		    gamers[gamer].innerHTML = `${winner} won!!! Congrats!`
 		    gamers[gamer].className = 'winnerText';
 		    buttonCreation();
 		}
 		

 		
 	}
 } 

 

console.log(allItems);
console.log(allButs);
console.log(gamers);


