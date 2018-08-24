// Variables

const pokemon = [
    {
        name: "pikachu"
    },
    {
        name: "charmander"
    },
    {
        name: "squirtle"
    },
    {
        name: "eevee"
    },
    {
        name: 'mew'
    },
    {
        name: 'bulbasaur'
    },
    {
        name: 'mewtwo'
    },
    {
        name: 'vulpix'
    },
    {
        name: 'jigglypuff'
    },
    {
        name: 'lugia'
    }
];

var word = pokemon[Math.floor(Math.random() * pokemon.length)];
var chosenWord = word;
let wins = 0;
let points = 0;
let wordLength;
let wrongGuess = [];
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

document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyWord = String.fromCharCode(keycode);

    if(chosenWord.indexOf(keyWord) > -1) {
        rightGuess.push(keyWord);
        underscore[chosenWord.indexOf(keyWord)] = keyWord;

    if(underscore.join('') == chosenWord) {
        alert('You Win!');
        }
    } else {
        wrongGuess.push(keyWord);

    }

});






