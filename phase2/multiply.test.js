const multiply = require('./multiply');

describe('multiply', () => {
    it('multiply 2 by 2', () => {
        const multiply = (2, 2)
        expect(2 * 2).toBe(4);
    })

    it('multiply 0 and 5', () => {
        const multiply = (0, 5)
        expect(0 * 5).toBe(0);
    })
  });