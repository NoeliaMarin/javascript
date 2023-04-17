const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
    it('if number given is not % by 3, 5 or 15 returns the number', () => {
        expect(fizzBuzz(1)).toBe(1);
    })

    it('if number given is not % by 3, 5 or 15 returns the number', () => {
        expect(fizzBuzz(8)).toBe(8);
    })

    it('return Fizz if % by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
    })

    it('return Buzz if % by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
    })

    it('return FizzBuzz if % by 15', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })

    it('return FizzBuzz if % by 15', () => {
        expect(fizzBuzz(18)).toBe('Fizz');
    })

    it('return FizzBuzz if % by 15', () => {
        expect(fizzBuzz(20)).toBe('Buzz');
    })
  });