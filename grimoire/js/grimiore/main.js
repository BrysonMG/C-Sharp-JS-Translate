console.log("Do you believe in magic?")
console.log("------------------------")

const DisplaySpellBook = (book) => {
    console.log(book.Title)
    for (const spell of book.Spells) {
        console.log(`   ${spell.Name}`)
    }
}

const GetAllSpells = () => {
    const allSpells = []

    const spellMaker = (name, evil, energy) => {
        return {
            Name: name,
            IsEvil: evil,
            EnergyRequired: energy
        }
    }

    allSpells.push(spellMaker("Turn enemy into a newt", true, 5.1))
    allSpells.push(spellMaker("Conjure gold for 'charity'", false, 2.99))
    allSpells.push(spellMaker("Make the deaf hear", false, 12.2))
    allSpells.push(spellMaker("Make yourself a deity", true, 100))
    allSpells.push(spellMaker("Force your beliefs on another person", true, 2921.5))

    return allSpells
}

const MakeGoodSpellBook = (spellArray) => {
    const goodBook = {}
    goodBook.Title = "Good Book"
    goodBook.Spells = spellArray.filter(spell => spell.IsEvil === false)
    return goodBook
}

const MakeEvilSpellBook = (spellArray) => {
    const evilBook = {}
    evilBook.Title = "Evil Book"
    evilBook.Spells = spellArray.filter(spell => spell.IsEvil)
    return evilBook
}

DisplaySpellBook(MakeGoodSpellBook(GetAllSpells()))
console.log()
DisplaySpellBook(MakeEvilSpellBook(GetAllSpells()))