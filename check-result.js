
const checkResult = (player, computer) => {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'scissors' || player === 'scissors' && computer === 'paper' || player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'rock' && computer === 'paper' || player === 'scissors' && computer === 'rock' || player === 'paper' && computer === 'scissors') {
        return 'lose';
    }
};

export default checkResult;



/* rock = 0
paper = 1
scissors = 2 */