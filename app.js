const myButton = document.getElementById('my-button');



const rock = 0;
const paper = 1;
const scissors = 2;


function getZeroOneTwo(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const getRandomThrow = () => {
    if (getZeroOneTwo === 0) {
        return rock;
    } else if (getZeroOneTwo === 1) {
        return paper;
    } else if (getZeroOneTwo === 2) {
        return scissors;
    }
}

console.log(getZeroOneTwo(3));

