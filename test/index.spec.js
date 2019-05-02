const chai = require("chai");
const expect = chai.expect;
const cardValidator = require("../lib/index.js")

describe('Validador de Cartão de Crédito', () => {
    it('Deve retornar true', () => {
        expect(cardValidator.cardValidator(5368371546136151)).to.equal("true")
    });
    it('Deve retornar false', () => {
        expect(cardValidator.cardValidator(6062822004739268)).to.equal("false")
    });
    it('Deve retornar false', () => {
        expect(cardValidator.cardValidator(6062822204795268)).to.equal("false")
    });
    it('Deve retornar true', () => {
        expect(cardValidator.cardValidator(4485071250980189)).to.equal("true")
    });
    it('Deve retornar true', () => {
        expect(cardValidator.cardValidator(343532797404686)).to.equal("true")
    });
    it('Deve retornar true', () => {
        expect(cardValidator.cardValidator(30201653051514)).to.equal("true")
    });
    it('Deve retornar true', () => {
        expect(cardValidator.cardValidator(6011311458738973)).to.equal("true")
    });
    it('Deve retornar true', () => {
        expect(cardValidator.cardValidator(3569676135946592)).to.equal("true")
    });
})
   