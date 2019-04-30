let chai = require("chai");
let expect = chai.expect;
let cardValidator = require("../lib/index.js")

describe('Validador de Cartão de Crédito', () => {
    it('Deve retornar true', () => {
        expect(cardValidator.cardValidator(6062822004739263)).to.equal("true")
    });
    it('Deve retornar false', () => {
        expect(cardValidator.cardValidator(6062822004739268)).to.equal("false")
    });
})
   