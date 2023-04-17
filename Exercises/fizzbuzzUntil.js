const fizzbuzzUntil = (num) => {
    for(let x = 1; x <= num; x++) {
        if (x % 3 === 0) {
            console.log('Fizz');
        } else if (x % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(x)
        }
    }
}

module.exports = fizzbuzzUntil;

// para llamarlo en node el codigo es:
// const fizzbuzzUntil = require('./fizzbuzzUntil');