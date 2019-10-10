const checkResult = (player, computer) => {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'scissors' || player === 'scissors' && computer === 'paper' || player === 'paper' && computer === 'rock') {
        return 'win';
    } else if (player === 'rock' && computer === 'paper' || player === 'scissors' && computer === 'rock' || player === 'paper' && computer === 'rock') {
        return 'lose';
    }
};

export default checkResult;

