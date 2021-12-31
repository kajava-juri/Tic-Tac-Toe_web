//Guess the number game

let rng = Math.floor(Math.random() * 100) + 1;

localStorage.setItem('isAdded', 0);

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.getElementById('guessField');

let guessCount = 1;
let reset;

var guessesArray = [];
var lastArray = [];
var numberArray = [];

let globalGuesses = [];


function checkGuess(){
  let userGuess = Number(guessField.value);
  if(guessCount === 1) {
    guesses.textContent = 'Guesses: ';
  }
  guesses.textContent += userGuess + '|';
  globalGuesses.push(userGuess);

  if(userGuess == rng){
    lastResult.textContent = 'You guessed it!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = "The number was: " + rng;

    guessesArray.push(guesses.textContent);
    lastArray.push(lastResult.textContent);
    numberArray.push(lowOrHi.textContent);

    saveResult();
    setGameOver();
  }
  else if (guessCount == 10) {
    lastResult.textContent = 'Out of tries (10/10)';
    lastResult.style.backgroundColor = 'Red';
    lowOrHi.textContent = "The number was: " + rng;

    guessesArray.push(guesses.textContent);
    lastArray.push(lastResult.textContent);
    numberArray.push(lowOrHi.textContent);

    saveResult();
    setGameOver();
  }
  else {
    lastResult.textContent = 'Wrong! (' + guessCount + '/10)';
    lastResult.style.backgroundColor = 'Red';
    if(userGuess > rng) {
      lowOrHi.textContent = "It's lower";
    }
    if(userGuess < rng) {
      lowOrHi.textContent = "It's higher";
    }
  }
  guessCount++;
  guessField.value = userGuess;
}

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  let place = document.querySelector('.resetBtn');
  place.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  globalGuesses = [];

  lastResult.style.backgroundColor = 'white';

  rng = Math.floor(Math.random() * 100) + 1;
}

let list = document.querySelectorAll('.listOfNumbers li');
let randomNb;

let liElement;
let liLabel;
let list2 = document.querySelector('.listOfNumbers2');

function iniBtn(){
  for(let y = 0; y < list.length; y++) {
    randomNb = Math.floor(Math.random() * 100) + 1;
    list[y].textContent = randomNb;
    list[y].setAttribute('class', 'rgNumbers');
  }
}

const c = 0;
function iniBtn2(){
  for(let y = 0; y < 10; y++) {
    randomNb = Math.floor(Math.random() * 100) + 1;
    liElement = document.createElement('li');
    liElement.setAttribute('name','generatedLi');
    liElement.setAttribute('class', 'rgNumbers');
    liElement.textContent = randomNb;
    list2.append(liElement);
  }
}

function delBtn(){
  var allLiElements = document.getElementsByName('generatedLi');
  while(allLiElements.length > 0) {
    allLiElements[0].remove();
    allLiElements[0].parentNode.removeChild(allLiElements[0]);
  }
}

function saveResult(){
  console.log(guessesArray);
  console.log(lastArray);
  console.log(numberArray);

  let result = [];

  for(let i = 0; i < guessesArray.length; i++) {
    result.push({guess : guessesArray[i], result : lastArray[i], number : numberArray[i]})
  }
  console.log(result);

  const resultObj = {result};
  const stringified = JSON.stringify(resultObj);
  localStorage.setItem('results', stringified);
  localStorage.setItem('isAdded', 1);
}

