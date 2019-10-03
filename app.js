import getRandomThrow from './get-random-throw.js';
import checkResults from './check-result.js';

const playGame = document.getElementById('my-button');
const resultSpan = document.getElementById('result-goes-here');
const winSpan = document.getElementById('num-wins');
const lossSpan = document.getElementById('num-losses');
const tieSpan = document.getElementById('num-ties');



const makeThrow = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const userSelectedThrow = selectedRadioButton.value;

    const zeroOneTwo = getRandomThrow();
    const randomThrow = getRandomThrow(zeroOneTwo); 
    const userDraw = (userSelectedThrow === randomThrow);

    const result = checkResults(userSelectedThrow, randomThrow);
    console.log(makeThrow(userSelectedThrow, randomThrow));
};

//console.log(makeThrow(userSelectedThrow, randomThrow));
playGame.addEventListener('click', makeThrow);



