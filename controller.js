
export function rollDice() {

    let result = [];

    for (let i = 0; i < 5; i++) {
        result[i] = Math.floor(Math.random() * 6) + 1
    }

    return result;
}