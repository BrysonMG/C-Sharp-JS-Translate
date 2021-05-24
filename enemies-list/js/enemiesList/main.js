console.log("My Enemies List!")
console.log("----------------")

const getEnemies = () => {
    const enemies = []

    const constructor = (first, last, offenses, hated) => {
        return {
            FirstName: first,
            LastName: last,
            Offenses: offenses,
            IsReallyHated: hated
        }
    }

    enemies.push(constructor("Joshua", "Flowers", [
        "Being a jerk to me in elementary school",
        "Not being nice to me in elementary school"
    ], true))
    enemies.push(constructor("Darth", "Vader", [
        "Cut off Luke's hand",
        "Murdered all those kids",
        "Unkind management practices"
    ], false))
    enemies.push(constructor("Betty", "Rudelady", [
        "Phone calls in the theater",
        "Phone calls on the bus",
        "Phone calls in line at the grocery store",
        "Poor conversationalist"
    ], true))
    enemies.push(constructor("Leon", "Peck", [
        "Keeps giving me a hotplate"
    ], false))

    return enemies
}

const enemies = getEnemies()

for (const enemy of enemies) {
    if (enemy.IsReallyHated) {
        console.log(`${enemy.FirstName} ${enemy.LastName} (Really, really dislike!)`)
    } else {
        console.log(`${enemy.FirstName} ${enemy.LastName}`)
    }
}

