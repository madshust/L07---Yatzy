
export function rollDice(diceArray) {

    for (let i = 0; i < 5; i++) {
        if (diceArray[i].status !== "selected") {
            diceArray[i].value = Math.floor(Math.random() * 6) + 1;
        }
    }
    return diceArray;
}

export function changeDiceStatus(diceArray, index) {
    let newDiceArray = [];

    for (let i = 0; i < diceArray.length; i++) {
        if (i === index) {
            newDiceArray[i] = {
                value: diceArray[i].value,
                status: diceArray[i].status === "unselected" ? "selected" : "unselected",
            };
        } else {
            newDiceArray[i] = diceArray[i];
        }
    }

    return newDiceArray;
}

export function resetValues(diceArray) {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i] = {value: 1, status: "unselected"};
    }
    return diceArray;
}

export function lockField(fieldId) {
    
}

