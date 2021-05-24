console.log("Let's roll some dice, baby!")
console.log("---------------------------")

const Roll = () => {
    let dieValue = Math.floor(Math.random() * 6) + 1
    return dieValue
}

for (let i = 0; i < 10; i++) {
    let die1 = Roll()
    let die2 = Roll()

    let message = `${die1} + ${die2} = ${die1 + die2}`

    if (die1 == die2) {
        message += " DOUBLES!"
    }

    console.log(message)
}