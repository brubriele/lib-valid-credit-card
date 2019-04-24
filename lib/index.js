function luhnJump(arr) {
    let recalcDigits = []
    let preservedDigits = []
    for (let el in arr) {
        if (el % 2 === 0) {
            recalcDigits.push(arr[el]) // popular o array
        } else {
            preservedDigits.push(arr[el]) // resto do array
        }
    }
    console.log(recalcDigits)
    console.log(preservedDigits)
    multiplierArray(recalcDigits, preservedDigits)
}

luhnJump("2546987")

function multiplierArray(recalcDigits, preservedDigits) {
    let arrayComplete = preservedDigits.map(Number)
    let multResult = recalcDigits.map(Number).map((num) => {
        return num * num
    })
    console.log("aqui", arrayComplete + multResult)
}