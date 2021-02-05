

'use strict'

// This function displays the deck of cards on the page


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
  }
}

displayDeck();


var roundCount = 0;
var flippedCards = [];
var numFlipped = 0;

// This function flips the cards when they are clicked on 

function flipCard(){
  flippedCards.push(event.target.getAttribute('name'));
  this.classList.add('show');

  numFlipped++;

  while(numFlipped == 2){
    console.log('test length');
    compareCards();
    break;
  }
}

// This function compares the two cards that are flipped to each other and determines if they match or not. 

function compareCards(){
  if (flippedCards[0]==flippedCards[1]){
    matchedCards();
  }else{
    unmatchedCards();
  }
  roundCount++;
  roundCountToLocalStorage();
    }

   //  This is the function that changes some class properties for cards that are matched, and updates the "matched cards array"


function matchedCards(){
  var cardOne = document.getElementsByName(flippedCards[0]);

  cardOne[0].parentElement.classList.add('matched');
  cardOne[1].parentElement.classList.add('matched');
  cardOne[0].parentElement.classList.remove('show');
  cardOne[1].parentElement.classList.remove('show');

  numFlipped = 0;
  flippedCards = [];
  
  //This if statement determines when the game ends by matching all the cards in the deck 

  var gameWin = document.getElementsByClassName('matched');
  if(gameWin.length == 16){
      setTimeout(function(){
    var win = document.getElementById('deck');
    win.style.display = 'none';
    var resultsButton = document.getElementById('results-button');
    resultsButton.style.display = 'flex'; 
  },1500);
  }
  
}

  // This function flips the cards back over if they are not a match
  
function unmatchedCards(){

  disableClicks();  
  
  setTimeout(function(){

    var test = document.getElementsByClassName('show');
    
    test[0].classList.remove('show');
    test[0].classList.remove('show'); 

    flippedCards = [];

    enableClicks();
  },1200);
  
  numFlipped = 0;

};

//This function enables cards to be clicked on 

function enableClicks(){
  var deck = document.getElementById('deck');
  deck.classList.remove('disabled');
}

// This function disables cards to be clicked on 

function disableClicks(){
  var deck = document.getElementById('deck');
  deck.classList.add('disabled');
}


//This function adds the round count to local storage to use on the results page 

function roundCountToLocalStorage(){
  var roundsAsAString = JSON.stringify(roundCount);
  localStorage.setItem("rounds",roundsAsAString);
}
