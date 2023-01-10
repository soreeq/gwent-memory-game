var cards = ["ciri.png", "geralt.png", "jaskier.png","jaskier.png", "iorweth.png", "triss.png", "geralt.png", "yen.png", "ciri.png", "triss.png", "yen.png", "iorweth.png" ];
//alert (card[4]);

cards.sort(function() {
    return Math.random() - 0.5;
  });

console.log(cards);

for (var i = 0; i < 12; i++) {
    (function(i) {
      var element = document.getElementById('c' + i);
      element.addEventListener("click", function() {
        revealCard(i);
      });
    })(i);
  }

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 6;

function revealCard(nr){
    var opacityValue = $('#c'+nr).css('opacity');
    //alert('Opacity' + opacityValue);
    
    if(opacityValue != 0 && lock == false)
    {
        lock = true;
        var obraz = "url(img/" + cards[nr] + ")";


        $('#c' + nr).css('background-image', obraz);
        $('#c' + nr).addClass('cardA');
        $('#c' + nr).removeClass('card');

        if(oneVisible == false){
            // first card

            oneVisible = true;
            visible_nr = nr;
            lock = false;
        }else {
            //second card

            if(cards[visible_nr] == cards[nr]){

                setTimeout(function() {hide2Cards(nr, visible_nr)}, 750);
            }else {
                setTimeout(function() {restore2Cards(nr, visible_nr)}, 1000);
            }

            turnCounter++;
            $('.score').html('Turn counter: ' + turnCounter);
            oneVisible = false;
        }
    }
}

function hide2Cards(nr1, nr2){
    $('#c'+ nr1).css('opacity', '0');
    $('#c'+ nr2).css('opacity', '0');
    lock = false;
    pairsLeft--;

    if(pairsLeft == 0 ){
        $('.board').html('<br><h1> Win! <br> Done in ' + turnCounter + ' turns </h1>');
        var resetButton = document.createElement('button');
        resetButton.innerHTML = 'Reset game';
        resetButton.addEventListener('click', resetGame);
        resetButton.addClass('reset-button');
        document.body.appendChild(resetButton);
    }
}

function restore2Cards(nr1, nr2){
        $('#c' + nr1).css('background-image', 'url(img/karta.png)');
        $('#c' + nr1).addClass('card');
        $('#c' + nr1).removeClass('cardA');

        $('#c' + nr2).css('background-image', 'url(img/karta.png)');
        $('#c' + nr2).addClass('card');
        $('#c' + nr2).removeClass('cardA');


        lock = false;
}

function resetGame() {
    // ustaw początkowe wartości zmiennych
    oneVisible = false;
    turnCounter = 0;
    lock = false;
    pairsLeft = 6;
    $('.score').html('Turn counter: ' + turnCounter);
  
    // przetasuj karty
    cards.sort(function() {
      return Math.random() - 0.5;
    });

    for (var i = 0; i < 12; i++) {
        (function(i) {
          var element = document.getElementById('c' + i);
          element.addEventListener("click", function() {
            revealCard(i);
          });
        })(i);
      }
  
    // ustaw zdjęcia kart na początkowe
    for (var i = 0; i < 12; i++) {
      $('#c' + i).css('background-image', 'url(img/karta.png)');
      $('#c' + i).addClass('card');
      $('#c' + i).removeClass('cardA');
      $('#c' + i).css('opacity', '1');
    }
  
    // ustaw tekst na początkowy
    $('.board').html('');
  }
  
