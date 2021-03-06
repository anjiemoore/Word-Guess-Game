// Variables

const pokemon = [
    {   name: "pikachu",
        image: 'pikachu.jpeg'
    },
    {
        name: "charmander",
        image: 'charmander.png'
    },
    {
        name: "squirtle",
        image: 'squirtle.jpg'
    },
    {
        name: "eevee",
        image: 'eevee.png'
    },
    {
        name: "mew",
        image: 'mew.png'
    },
    {
        name: "bulbasaur",
        image: 'bulbasaur.jpg'
    },
    {
        name: 'mewtwo',
        image: 'mewtwo.jpg'
    },
    {
        name: 'slowbro',
        image: 'slowbro.png'
    },
    {
        name: 'jigglypuff',
        image: 'jigglypuff.jpg'
    },
    {
        name: 'lugia',
        image: 'Lugia.png'
    }
]

const entries = Object.entries(pokemon);
const chosenWord = entries[Math.floor(Math.random() * entries.length)];
const chosenWordName = chosenWord[1].name;

for(let [key, value] of Object.entries(chosenWord)) {
    console.log(key, value);
}
let wins = 0;
let points = 0;
let wordLength;
let wrongGuess = [];
let rightGuess = [];
let underscore = [];

// function gameStart () {
let generateUnderscore = () => {
    for(let i =0; i < chosenWord[1].name.length; i++) {
        underscore.push('_');
    }
    return underscore;
}
console.log(generateUnderscore());

document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyWord = String.fromCharCode(keycode);

    if(chosenWord[1].name.indexOf(keyWord) > -1) {
        rightGuess.push(keyWord);
        for (var i=0; i<chosenWordName.length; i++) {
            if(chosenWordName[i] === keyWord) {
                underscore[i] = keyWord;
                console.log(underscore);
            }
        }
    if(underscore.join('') == chosenWord) {
        alert('You Win!');
        }
    } else {
        wrongGuess.push(keyWord);
        console.log(wrongGuess);

    }

});






