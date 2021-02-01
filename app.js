'use strict'

var deck = [];

function DeckCreator(source, name) {
    this.name = name;
    this.source = source;
    deckArray.push(this);

}
var deckArray = [];

new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');
new DeckCreator('https://via.placeholder.com/200', 'name');



function displayDeck (){
    console.log('test');
    var deckElement = document.getElementById('deck');
    for (var i = 0; i < deckArray.length; i++){
        var imageElement = document.createElement('img');
        imageElement.src = deckArray[i].source;
        deckElement.appendChild(imageElement);
    }
}

displayDeck();


