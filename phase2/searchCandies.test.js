const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('return the right candy names', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });

    it('been more expecific returns the right name', () => {
        expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
    });

    it('given just one letter it return the matching names', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });

    it('given just one letter and a more extrict number it return the matching names', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
    });

    it('given a string in lower case it return the matching names', () => {
        expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
    });
})