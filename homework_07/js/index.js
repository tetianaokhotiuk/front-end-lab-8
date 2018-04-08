let turn = 0;
let boardLength = 196;
let itemLength = 225;
let allButs = document.getElementsByClassName('but');
let allItems = document.getElementsByClassName('item');
let gamers = document.getElementsByClassName('gamer');

function click() {
    turn++;
    if (turn % 2 === 0) {
        $(this).addClass('bulbWhite');
        $(".bulbWhite").unbind('click', click);
        $('#gamer2').addClass('turn');
        $('#gamer1').removeClass('turn');

    } else {
        $(this).addClass('bulb');
        $(".bulb").unbind('click', click);
        $('#gamer1').addClass('turn');
        $('#gamer2').removeClass('turn');
    }

    checkWinner('but bulb', 0, 'Gamer 1', 'but bulb finish');
    checkWinner('but bulbWhite', 1, 'Gamer 2', 'but bulbWhite finish');
}

$(document).ready(function() {
    $(".but").bind('click', click);
    $("div#unclickable").unbind('click', click);
});

function addBoard() {
    for (let i = 0; i < itemLength; i++) {
        $("#board").append('<div class="item"></div>');
    }

    $('.item').append('<div class="but"></div>');

    for (let i = 210; i < itemLength; i++) {
        allButs[i].id = 'unclickable';
    }

    let j = 14;
    while (j < itemLength) {
        allButs[j].id = 'unclickable';
        j += 15;
    }
}

addBoard();

function buttonCreation() {
    $(".final").append('<button type="submit" class="button">New game</button>');    
    $('.button').click(function() {
        location.reload();
    });
}

buttonCreation();

function checkWinner(style, gamer, winner, newStyle) {

    for (let i = 0; i < itemLength; i++) {
        if ((allButs[i].className == style) && (allButs[i + 1].className == style) && (allButs[i + 2].className == style) && (allButs[i + 3].className == style)) {
            allButs[i].className = newStyle;
            allButs[i + 1].className = newStyle;
            allButs[i + 2].className = newStyle;
            allButs[i + 3].className = newStyle;
            gamers[gamer].innerHTML = `${winner} won!!! Congrats!`
            gamers[gamer].className = 'winnerText';
            $('.header').css( "padding", "15px" );
            $(".but").unbind('click', click);
        }

        if ((allButs[i].className == style) && (allButs[i + 14].className == style) && (allButs[i + 28].className == style) && (allButs[i + 42].className == style)) {
            allButs[i].className = newStyle;
            allButs[i + 14].className = newStyle;
            allButs[i + 28].className = newStyle;
            allButs[i + 42].className = newStyle;
            gamers[gamer].innerHTML = `${winner} won!!! Congrats!`
            gamers[gamer].className = 'winnerText';
            $('.header').css( "padding", "15px" );
            $(".but").unbind('click', click);
        }

        if ((allButs[i].className == style) && (allButs[i + 15].className == style) && (allButs[i + 30].className == style) && (allButs[i + 45].className == style)) {
            allButs[i].className = newStyle;
            allButs[i + 15].className = newStyle;
            allButs[i + 30].className = newStyle;
            allButs[i + 45].className = newStyle;
            gamers[gamer].innerHTML = `${winner} won!!! Congrats!`
            gamers[gamer].className = 'winnerText';
            $('.header').css( "padding", "15px" );
            $(".but").unbind('click', click);
        }

        if ((allButs[i].className == style) && (allButs[i + 16].className == style) && (allButs[i + 32].className == style) && (allButs[i + 48].className == style)) {
            allButs[i].className = newStyle;
            allButs[i + 16].className = newStyle;
            allButs[i + 32].className = newStyle;
            allButs[i + 48].className = newStyle;
            gamers[gamer].innerHTML = `${winner} won!!! Congrats!`
            gamers[gamer].className = 'winnerText';
            $('.header').css( "padding", "15px" );
            $(".but").unbind('click', click);
        }
    }
}

