
const checkResult = (player, computer) => {
    if (player === computer) {
        return draw;
    } else if (player > computer) {
        return win;
    } else if (player < computer) {
        return lose;
    }
};

export default checkResult;