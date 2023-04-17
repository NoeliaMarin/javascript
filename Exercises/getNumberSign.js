const getNumberSign = (number) => {
    if (number === 0) {
        return 'zero';
    }  else if (number > 0) {
        return 'positive';
    } else {
        return 'negative';
    }
}

module.exports = getNumberSign;

// para llamarlo usar:
// const getNumberSign = require('./getNumberSign');