try {
    printCharacterStats(4)
    printCharacterStats('ten')
    printCharacterStats(10)
} catch (err) {
    console.log(err)
}
function printCharacterStats(level) {
    if (isNaN(level)) {
        throw 'Parameter is not a number!'
    }
    console.log(`Your character is level ${level}`)
}