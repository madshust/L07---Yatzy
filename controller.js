
export function rollDice(diceArray) {

    for (let i = 0; i < 5; i++) {
        if (diceArray[i].status != "selected") {
            diceArray[i].value = Math.floor(Math.random() * 6) + 1;
        }
    }

    return diceArray;

}

