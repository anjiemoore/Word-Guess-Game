// Variables

const pokemon = [
    "pikachu",
    "charmander",
    "squirtle",
    "eevee",
    "mew",
    "bulbasaur",
    "mewtwo",
    "vulpix",
    "jigglypuff",
    "lugia"
];

var word = pokemon[Math.floor(Math.random() * pokemon.length)];
var chosenWord = word;
let wins = 0;
let points = 0;
let wordLength;
let lettersGuessed = [];
let rightGuess = [];
let underscore = [];

// function gameStart () {

console.log(chosenWord);

let generateUnderscore = () => {
    for(let i =0; i < chosenWord.length; i++) {
        underscore.push('_');
    }
    return underscore;
}
console.log(generateUnderscore());

document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let lettersGuessed = String.fromCharCode(keycode);
    console.log(lettersGuessed);
});






