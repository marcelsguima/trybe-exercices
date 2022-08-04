const sum = require('./sum');

test('sum two values', () => {
    expect(sum(4,5)).toEqual(9);
});