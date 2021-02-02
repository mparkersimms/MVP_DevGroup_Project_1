'use strict'

var deck = [];

function DeckCreator(source, name, sourceB) {
    this.name = name;
    this.sourceBack = sourceB;
    this.source = source;
    deckArray.push(this);

}
var deckArray = [];
for (var i = 0; i < 2; i ++){
new DeckCreator('https://lh3.googleusercontent.com/pw/ACtC-3fMhSMEwnYcKped3kNB2Cpape_F-qAl1EYnvQscCh2CaE5ahvfBafJA6MWaGZsTti3vhM1IzfngZSZ-D2m_6TsvolPOT4lKPREkVBpgqFOIHEvR7zN73sEpSpqz3hHlO7YI66RpwDljP5-jQpbw7-sW=w867-h870-no?authuser=0', 'ronaldcar');
new DeckCreator('https://lh3.googleusercontent.com/pw/ACtC-3cd8dpj6IL1wRb04Aoa5DMb4bx8JmXCzjQiZd_AMfA6VSqfpWtZD9-3cl7GEt8tatbgOV7oSoJgITDA9LUx8ECtdzKUtC59EDjpn78xaL9jwFagRbIQ4sX1_ZHPnjH1-bI1L9XeWE0gux8k2ql49gR2=w790-h870-no?authuser=0', 'tmnt');
//this one//
new DeckCreator('https://lh3.googleusercontent.com/pw/ACtC-3f2ezhvbUbrmiyWVNTqoUj7guWV_q93QMZfoPq_1hI6MucjkGQyEJdwFQaKai9YAQyuem4ryX69BMs65jpXnJa4y4RlsCgsP3oofZ6T6rSmmQQsSu1UklquuQ0AV5zPBGeZcbW7pFiCCEaS7o2Jf9h-=w952-h937-no?authuser=0', 'shaqbottle');
new DeckCreator('https://lh3.googleusercontent.com/pw/ACtC-3dzx7i85Eakl4QXU_J9cgkEn3b60j6By53OnWzYbV-H8LUKJCZJ5ign15nw8Fh05dFEmzibdTN0Y91-V0aGpWRKqmoptFGkiWD4GIXL6xOk4Tcacq3Jtd2qLNqBiEAfV17UpuGOU3uyYbBCqJ8BQhCE=w808-h500-no?authuser=0', 'lotr');
new DeckCreator('https://lh3.googleusercontent.com/pw/ACtC-3esKj2XX_9ZVlK0ruOav02s1GO-0KDNgI8iXDN_Q9N9bgrvpM5yVaf-gj9opl2wgkxhjVaPh3Uash4l64WpCPnVCAarIPjxUfFU8soA3Lnyl9RyAe2FZrQ3eqW_uokWSqlEOAE61gHYWKNgxKS6gXSW=w941-h937-no?authuser=0', 'david');
new DeckCreator('https://lh3.googleusercontent.com/pw/ACtC-3cPfbUwbYPMszbs_odsZlO8-o6x-yPeDQ7dYHnSwGk9rii2bs4VZaRahe4UAeCdTOMRzYw2ty9Wr0FLxhX-uPSAhhULnapEbGJXmM3w6PSvmSiIDZ-LBF3cIETac4r56w75liKXdSklJJViEwl9mlKDTg=w412-h420-no?authuser=0', 'honestwerk');
new DeckCreator('https://lh3.googleusercontent.com/pw/ACtC-3cAaUdF7AvJug9htB5CLNCwtnnkYhiSZVdwOEL4m0fbjb43SUaxROq4rg7_VFfdwMVdL8op6ej-tMYPrXa1TlIrChESE2uT6istKbuxAjit4ftzE68SMcaqev2YaS1JRoAWoUSIM6a-Uh4fdnm2ADys=w680-h393-no?authuser=0', 'kyloandbbyo');
new DeckCreator('https://lh3.googleusercontent.com/pw/ACtC-3cbOl1RJMNLlf-eZ-v_h1m98bParOOJ2i7hvAzcyDuu4hjaY9Or8gUnMHw3MCsIjQCQQYsMPaiC7E_nPUvFAP2J0b7Qmt9rG5seYv5hukCuMPhmh7IqW3SqaTBYhWDNSJ34RACPpGOmv2Rpn4Nsf22g=w1044-h927-no?authuser=0', 'monkeysaur');
}
console.log(deckArray);
function deckShuffle(deckArray){
    console.log(deckArray);
    for (var i = deckArray.length - 1; i > 0; i--) {
      var randomPosition = Math.floor(Math.random() * (i + 1));
      var currentPosition = deckArray[i];
      var newPosition = deckArray[randomPosition];
      deckArray[i] = newPosition;
      deckArray[randomPosition] = currentPosition;
    };
    return deckArray;
  };



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

      frontElement.setAttribute('id', deckArray[i].name);

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
    console.log(event.target.id);
    flippedCards.push(event.target.id);
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
    }
    
  function matchedCards(){
    numFlipped = 0;
    flippedCards = [];
    // displayDeck();
  }
  function unmatchedCards(){
    setTimeout(function(){
      var cardOne = document.getElementById(flippedCards[0]);
      var cardTwo = document.getElementById(flippedCards[1]);
      console.log(cardOne);
      console.log(cardTwo);
      cardOne.parentElement.classList.remove('show');
      cardTwo.parentElement.classList.remove('show');
      console.log(flippedCards);
      flippedCards = [];
    },1100);
    numFlipped = 0;
  // displayDeck();
}


// for (var i = 0; i < deckArray.length; i ++){
//     deckArray[i].addEventListener('click',flipCard);
// }


// var formElement = document.getElementById('form');
// formElement.addEventListener('submit', function(event){
//   console.log('test');
//   event.preventDefault();
//   console.log(event.target['name-field'].value);
//   var userName = event.target['name-field'].value;
//   console.log(userName);
//   var nameAsAString = JSON.stringify(userName);
//   localStorage.setItem('name', nameAsAString);
// });

// function showCard(event) {
//     event.target
// }