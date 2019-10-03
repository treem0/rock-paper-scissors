import getRandomThrow from './get-random-throw.js';
import checkResults from './check-result.js';

const playGame = document.getElementById('my-button');



const rock = 0;
const paper = 1;
const scissors = 2;


const makeThrow = () => {
    const selectedRadioButton = document.querySelector('input: checked');
    const userSelectedThrow = selectedRadioButton.value;

    const zeroOneTwo = getZeroOneTwo(2);
    const randomThrow = zeroOneTwo; 
};


//console.log(getZeroOneTwo(3));

