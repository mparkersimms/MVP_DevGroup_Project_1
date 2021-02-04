'use strict'; 



// This function allows the user to enter their name and stores their name in local storage 
    
    
var formElement = document.getElementById('form');
formElement.addEventListener('submit', function(event){  
  event.preventDefault();
  var userName = event.target['name-field'].value;
  var nameAsAString = JSON.stringify(userName);
  localStorage.setItem('name', nameAsAString);
});
    
    