
function cardValidator(cardNumber) {
    const cardNumberInArr = Array.from(cardNumber.toString()).map(Number);
    const cardNumberPrepSum = [];
    const cardNumberPrepSumOne = [];
    const jumpLuhnEven = [];
    const jumpLuhnOdd = [];
    for (let el in cardNumberInArr) {
        if (el % 2 === 0) {
            jumpLuhnEven.push(cardNumberInArr[el] * 2)
        }
        else {
            jumpLuhnOdd.push(cardNumberInArr[el])
        }
    }
    for (let el of jumpLuhnEven) {
        if (el >= 10) {
            cardNumberPrepSum.push(Math.floor((el / 10) + el % 10))
        } else {
            cardNumberPrepSumOne.push(el)
        }
    }
    let sum = jumpLuhnOdd.reduce((x, y) => x + y) + cardNumberPrepSum.reduce((x, y) => x + y) + cardNumberPrepSumOne.reduce((x, y) => x + y)
    console.log(sum % 10 === 0 ? "true" : "false")
}

module.exports.cardValidator = cardValidator