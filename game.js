

'use strict'




function displayDeck (){
    deckShuffle(deckArray);
    console.log('test');
    for (var i = 0; i < deckArray.length; i++){

      var deckElement = document.getElementById('deck');

      var cardOuterElement = document.createElement('div');
      
      var cardInnerElement = document.createElement('div');
      
      var frontElement = document.createElement('div');
      
      var imageElement = document.createElement('img');

      cardOuterElement.classList.add('card-outer');
      frontElement.classList.add('front');
      cardInnerElement.classList.add('card-inner');

      frontElement.setAttribute('id', deckArray[i].name1);
      frontElement.setAttribute('name',deckArray[i].name2);

      deckElement.appendChild(cardOuterElement);
      cardOuterElement.appendChild(cardInnerElement);
      cardInnerElement.appendChild(frontElement);
      cardInnerElement.appendChild(imageElement);
    
      imageElement.src = deckArray[i].source;
      cardInnerElement.addEventListener('click',flipCard);
        // console.log('test');
    ;
    
    }
}

displayDeck();

var roundCount = 0;
var flippedCards = [];
var numFlipped = 0;
console.log(numFlipped);


function flipCard(){
    console.log(event.target.getAttribute('name'));
    flippedCards.push(event.target.getAttribute('name'));
    this.classList.add('show');
    numFlipped++;
    console.log(flippedCards);
    while(numFlipped == 2){
      console.log('test length');
      compareCards();
      break;
    }
}


function compareCards(){
  console.log(flippedCards);
  if (flippedCards[0]==flippedCards[1]){
    matchedCards();
  }else{
    unmatchedCards();
  }
  roundCount++;
  roundCountToLocalStorage();
    }
    
  function matchedCards(){
    var cardOne = document.getElementsByName(flippedCards[0]);
    console.log(cardOne);
    console.log(cardOne[0]);
    console.log(cardOne[1]);

    cardOne[0].parentElement.classList.add('matched');
    cardOne[1].parentElement.classList.add('matched');
    cardOne[0].parentElement.classList.remove('show');
    cardOne[1].parentElement.classList.remove('show');
    numFlipped = 0;
    flippedCards = [];
    
    var gameWin = document.getElementsByClassName('matched');
    console.log(gameWin.length)
    if(gameWin.length == 2){
      var win = document.getElementById('deck');
      win.style.display = 'none';
      var button = document.getElementById('button');
      button.style.display = 'inline-block';
    

      
    }
    // displayDeck();
  }
  
  function unmatchedCards(){
    disableClicks();
    
    
    setTimeout(function(){
      var test = document.getElementsByClassName('show');
      console.log(test[0]);
      console.log(test[1]);
      test[0].classList.remove('show');
      test[0].classList.remove('show');
      // var cardOne = document.getElementById(flippedCards[0]).getElementsByClassName('show');
      // var cardTwo = document.getElementById(flippedCards[1]);
      // console.log(cardOne);
      // console.log(cardTwo);
      // cardOne.parentElement.classList.remove('show');
      // cardTwo.parentElement.classList.remove('show');
      console.log(flippedCards);
      flippedCards = [];
      enableClicks();
    },1100);
    
    console.log('why?');
    numFlipped = 0;
  // displayDeck();
};
function enableClicks(){
  console.log('enable');
  var deck = document.getElementById('deck');
  deck.classList.remove('disabled');
}
function disableClicks(){
  var deck = document.getElementById('deck');
  deck.classList.add('disabled');
}

function roundCountToLocalStorage(){
    var roundsAsAString = JSON.stringify(roundCount);
    localStorage.setItem("rounds",roundsAsAString);
}