const getRandomThrow = () => {
    if (getZeroOneTwo === 0) {
        return rock;
    } else if (getZeroOneTwo === 1) {
        return paper;
    } else if (getZeroOneTwo === 2) {
        return scissors;
    }
};

export default getRandomThrow;