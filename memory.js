var cards = ["ciri.png", "geralt.png", "jaskier.png","jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png" ];
//alert (card[4]);

console.log(cards);

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

c0.addEventListener("click", function(){    revealCard(0); });
c1.addEventListener("click", function(){    revealCard(1); });
c2.addEventListener("click", function(){    revealCard(2); });
c3.addEventListener("click", function(){    revealCard(3); });

c4.addEventListener("click", function(){    revealCard(4); });
c5.addEventListener("click", function(){    revealCard(5); });
c6.addEventListener("click", function(){    revealCard(6); });
c7.addEventListener("click", function(){    revealCard(7); });

c8.addEventListener("click", function(){    revealCard(8); });
c9.addEventListener("click", function(){    revealCard(9); });
c10.addEventListener("click", function(){    revealCard(10); });
c11.addEventListener("click", function(){    revealCard(11); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;

function revealCard(nr){
    var opacityValue = $('#c'+nr).css('opacity');
    //alert('Opacity' + opacityValue);
    
    
    var obraz = "url(img/" + cards[nr] + ")";
    var rewers = "url(img/karta.png)";
    $('#c' + nr).css('background-image', obraz);
    
    $('#c' + nr).addClass('cardA');
    $('#c' + nr).removeClass('card');

    if(oneVisible == false){
        // first card

        oneVisible = true;
        visible_nr = nr;
    }else {
        //second card

        if(cards[visible_nr] == cards[nr]){

            setTimeout(function() {hide2Cards(nr, visible_nr)}, 750);
        }else {
            $('#c' + nr).css('background-image', rewers);
            $('#c' + visible_nr).css('background-image', rewers);
        }

        turnCounter++;
        $('.score').html('Turn counter: ' + turnCounter);
        oneVisible = false;
    }
}

function hide2Cards(nr1, nr2){
    $('#c'+ nr1).css('opacity', '0');
    $('#c'+ nr2).css('opacity', '0');
}