applyDamage(25, 70).then(message => console.log(message))


function applyDamage(damage, currentHP) {
    return new Promise((resolve) => {
        const newHP = currentHP - damage
        setTimeout(() => {
            resolve(`the player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
        }, 1000)
    })
}