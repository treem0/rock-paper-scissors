import getRandomThrow from './get-random-throw.js';
import checkResults from './check-result.js';

const playGame = document.getElementById('press-play');
const resultSpan = document.getElementById('result-goes-here');
const winSpan = document.getElementById('num-wins');
const lossSpan = document.getElementById('num-losses');
const tieSpan = document.getElementById('num-ties');

let numberOfWins = 0;
let numberOfLoses = 0;
let numberOfTies = 0;

function userWin() {
    resultSpan.textContent = 'You are the Winner!';
    numberOfWins ++;
    winSpan.textContent = numberOfWins;
}

function userLose() {
    resultSpan.textContent = 'You lost!';
    numberOfLoses ++;
    lossSpan.textContent = numberOfLoses;
}

function userDraw() {
    resultSpan.textContent = 'It is a draw!';
    numberOfTies ++;
    tieSpan.textContent = numberOfTies;
}

const makeThrow = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedThrow = selectedRadioButton.value;

    const randomThrow = getRandomThrow();

    const result = checkResults(userSelectedThrow, randomThrow);
    return result;
};

//console.log(makeThrow(userSelectedThrow, randomThrow));
playGame.addEventListener('click', () => {
    const throw1 = makeThrow();
    if (throw1 === 'win') {
        userWin();
    } else if (throw1 === 'lose') {
        userLose();
    } else if (throw1 === 'draw') {
        userDraw();
    }
});



