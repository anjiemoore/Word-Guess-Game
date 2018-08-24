// Variables

const pokemon = {
    pikachu: 
    {
        image: 'pikachu.jpeg'
    },
    charmander: 
    {
        image: 'charmander.png'
    },
    squirtle:
    {
        image: 'squirtle.jpg'
    },
    eevee:
    {
        image: 'eevee.png'
    },
    mew:
    {
        image: 'mew.png'
    },
    bulbasaur:
    {
        image: 'bulbasaur.jpg'
    },
    mewtwo:
    {
        image: 'mewtwo.jpg'
    },
    slowbro:
    {
        image: 'slowbro.png'
    },
    jigglypuff:
    {
        image: 'jigglypuff.jpg'
    },
    lugia:
    {
        image: 'Lugia.png'
    }
};

const entries = Object.entries(pokemon);
console.log(entries);
const word = entries[Math.floor(Math.random() * entries.length)];
console.log(word);
Object.entries(word).forEach(([key, value]) => console.log('${key} ${value}'));

// var word = pokemon[Math.floor(Math.random() * pokemon.length)];
// var chosenWord = word;
// for (var i = 0; i <)
let wins = 0;
let points = 0;
let wordLength;
let wrongGuess = [];
let rightGuess = [];
let underscore = [];

// function gameStart () {
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






