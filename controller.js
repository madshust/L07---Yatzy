
let values = [];

export function getValues()
{
    return values
}

export function rollDice() {

    for (let i = 0; i < 5; i++) {
        values[i] = Math.floor(Math.random() * 6) + 1
    }
    getValues
}








