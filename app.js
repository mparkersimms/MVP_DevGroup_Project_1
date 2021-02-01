'use strict'

var deck = [];

function DeckCreator(source, name) {
    this.name = name;
    this.source = source;
    deckArray.push(this);

}
var deckArray = [];
for (var i = 0; i < 2; i ++){
new DeckCreator('https://via.placeholder.com/100', 'name');
new DeckCreator('https://via.placeholder.com/100', 'name');
new DeckCreator('https://via.placeholder.com/100', 'name');
new DeckCreator('https://via.placeholder.com/100', 'name');
new DeckCreator('https://via.placeholder.com/100', 'name');
new DeckCreator('https://via.placeholder.com/100', 'name');
new DeckCreator('https://via.placeholder.com/100', 'name');
new DeckCreator('https://via.placeholder.com/100', 'name');


}

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


