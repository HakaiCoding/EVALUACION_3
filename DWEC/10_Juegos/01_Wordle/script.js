// Array con 10 palabras
const WORDS = ['RELOJ', 'PINZA', 'NEGRO', 'OVEJA', 'CASCO', 'PLATO', 'TARTA', 'CINCO', 'CEBRA', 'MOSCA'];
// Palabra aleatoria del array WORDS
const WORD = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log(WORD);
// Array con las letras de la palabra
const WORD_LETTERS = WORD.split('');
// Array que almacena las letras introducidas por el usuario
let userLetters = [];
// NodeList que contiene todos los elementos con clase "letter-box"
const queryLetterBoxes = document.querySelectorAll('.letter-box');
// Convertir queryLetterBoxes en un Array
const letterBoxes = Array.from(queryLetterBoxes);
//
let indexChecker = 0;
let winCounter = 0;
let keypressCounter = 0;



let currentLetterBoxIndex = 0;
let currentLetterBox = letterBoxes[currentLetterBoxIndex];
currentLetterBox.style.border = '5px solid purple';
currentLetterBox.focus();

document.addEventListener('keydown', (event) => {
    if (event.key.match(/^[A-Za-z]$/)) {
        currentLetterBox.textContent = event.key.toUpperCase();
        userLetters.push(event.key.toUpperCase());
        currentLetterBox.style.border = '';
        currentLetterBoxIndex++;

        if (currentLetterBoxIndex % 5 === 0) {
            winCounter = 0;
            for (let i = 0; i < userLetters.length; i++) {
                if (userLetters[i] === WORD_LETTERS[i]) {
                    letterBoxes[indexChecker].style.backgroundColor = 'green';
                    winCounter++;
                } else if (WORD_LETTERS.includes(userLetters[i])) {
                    letterBoxes[indexChecker].style.backgroundColor = 'yellow';
                } else {
                    letterBoxes[indexChecker].style.backgroundColor = 'red';
                }
                indexChecker++;
            }
            if (winCounter === 5) {
                alert('¡Has ganado!');
            }
            userLetters = [];
        }

        currentLetterBox = letterBoxes[currentLetterBoxIndex];
        if (currentLetterBox) {
            currentLetterBox.style.border = '5px solid purple';
            currentLetterBox.focus();
        } else {
            alert('¡Fin del juego!');
        }
    }
    else if (event.key === 'Backspace') {
        currentLetterBox.textContent = '';
        currentLetterBox.style.border = '';

        currentLetterBoxIndex--;
        if(currentLetterBoxIndex < 0) {
            currentLetterBoxIndex = 0;
        }

        currentLetterBox = letterBoxes[currentLetterBoxIndex];
        currentLetterBox.style.border = '5px solid purple';
        currentLetterBox.focus();
    }
});