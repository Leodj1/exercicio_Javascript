const chai = require('chai');
const expect = chai.expect;
const findMaxMinIndices = require('./findMaxMinIndices');

describe('Función findMaxMinIndices', () => {

    it('debería devolver los índices correctos para el valor mínimo y máximo', () => {
        const result = findMaxMinIndices([1, 3, 7, 6, 0, -1]);
        expect(result.minIndex).to.equal(5); 
        expect(result.maxIndex).to.equal(2); 
    });

    it('debería devolver el primer índice si hay valores repetidos', () => {
        const result = findMaxMinIndices([1, 3, 7, 7, 0, 0]);
        expect(result.minIndex).to.equal(4); 
        expect(result.maxIndex).to.equal(2); 
    });

    it('debería manejar arrays con un solo elemento con el valor 5', () => {
        const result = findMaxMinIndices([5]);
        expect(result.minIndex).to.equal(0);
        expect(result.maxIndex).to.equal(0);
    });
    
});

