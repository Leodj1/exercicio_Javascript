const sumMultiples = require('./Part_03')

test('Suma de múltiplos de 5 y 7 hasta 1000', () => {
    const result = sumMultiples();

    const expected = 156361;
    expect(result).toBe(expected);
});





