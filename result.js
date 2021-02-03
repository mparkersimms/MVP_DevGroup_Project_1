"use strict";

var userNameFromLocalStorage = localStorage.getItem('name');
var userName = JSON.parse(userNameFromLocalStorage);
var roundsFromLocalStorage = localStorage.getItem("rounds");
var roundCount = JSON.parse(roundsFromLocalStorage);

var results = document.getElementById('results');
var p2Element = document.createElement('p');
p2Element.textContent = ("Congratulations " + userName + " it took you " + roundCount + " rounds to complete the game!");
results.appendChild(p2Element);
