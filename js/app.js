'use strict'

// This constructor creates the deck of cards for the game

var deck = [];

var DeckCreator = function(source, name1, name2) {
    this.name1 = name1;
    this.name2 = name2;
    this.source = source;
    deckArray.push(this);
}

var deckArray = [];
new DeckCreator('assets/10.png', 'one1','one');
new DeckCreator('assets/10.png', 'one2','one');
new DeckCreator('assets/11.png', 'two1','two');
new DeckCreator('assets/11.png', 'two2','two');
new DeckCreator('assets/12.png', 'three1','three');
new DeckCreator('assets/12.png', 'three2','three');
new DeckCreator('assets/13.png', 'four1','four');
new DeckCreator('assets/13.png', 'four2','four');
new DeckCreator('assets/14.png', 'five1','five');
new DeckCreator('assets/14.png', 'five2','five');
new DeckCreator('assets/15.png', 'six1','six');
new DeckCreator('assets/15.png', 'six2','six');
new DeckCreator('assets/16.png', 'seven1','seven');
new DeckCreator('assets/16.png', 'seven2','seven');
new DeckCreator('assets/17.png', 'eight1','eight');
new DeckCreator('assets/17.png', 'eight2','eight');


// This is the function to randomize the deck of cards

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


