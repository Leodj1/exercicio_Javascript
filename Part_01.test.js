const chai = require('chai');
const expect = chai.expect;

function mdc(a, b) {
    if (b == 0) {
        return Math.abs(a);
    }
    return mdc(b, a % b);
}

describe('Función mdc', () => {
    it('debería devolver "a" si b es 0', () => {
        expect(mdc(5, 0)).to.equal(5);
    });

    it('debería devolver 1 para dos números primos', () => {
        expect(mdc(3, 5)).to.equal(1);
    });

    it('debería devolver el número menor si uno es múltiplo del otro', () => {
        expect(mdc(20, 40)).to.equal(20);
        expect(mdc(40, 20)).to.equal(20);
    });

    it('debería calcular el MCD correctamente para números arbitrarios', () => {
        expect(mdc(12, 15)).to.equal(3);
    });

    it('debería manejar números negativos', () => {
        expect(mdc(-20, 40)).to.equal(20);
        expect(mdc(20, -40)).to.equal(20);
    });
});
