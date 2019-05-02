
function cardValidator(cardNumber) {
  const cardNumberInArr = Array.from(cardNumber.toString()).map(Number);
  const luhnJump = cardNumberInArr.map((v, i) => (
    i % 2 === 0 ? (v * 2) : v
  ))
  const luhnDouble = luhnJump.map((v) => (
    v >= 10 ? Math.floor((v / 10) + (v % 10)) : v
  ))
  const sum = luhnDouble.reduce((x, y) => x + y)
  return sum % 10 === 0 ? "true" : "false"
}

module.exports.cardValidator = cardValidator;