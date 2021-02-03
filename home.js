'use strict'; 

var newDeckArray = new DeckCreator([]);


for (var i = 0; i < newDeckArray.length; i ++){
        newDeckArray[i].addEventListener('click',flipCard);
    }
    
    
    var formElement = document.getElementById('form');
    formElement.addEventListener('submit', function(event){
      console.log('test');
      event.preventDefault();
      console.log(event.target['name-field'].value);
      var userName = event.target['name-field'].value;
      console.log(userName);
      var nameAsAString = JSON.stringify(userName);
      localStorage.setItem('name', nameAsAString);
    });
    
    function showCard(event) {
        event.target
    }