import { resetFieldsNotChosen, resetValuesUI, updateSumAndTotalAndBonus } from "./ui.js";

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
        diceArray[i] = { value: 1, status: "unselected" };
    }
    return diceArray;
}

export function gameOver(fieldArray, diceArray) {

    let counter = 0;
    let finalScore = calculateTotal(fieldArray);

    fieldArray.forEach(field => {
        if (field.disabled) {
            counter++;
        }
    })

    if (counter === 15) {
        if (confirm(`Game over. Your final score is: ${finalScore}\nWould you like to play again?`) == true) {
            resetGame(fieldArray, diceArray);
        }
    }
}

function resetGame(fieldArray, diceArray) {
    fieldArray.forEach(field => {
        field.disabled = false;
        field.classList.remove("locked");
    })

    updateSumAndTotalAndBonus(fieldArray);
    resetValues(diceArray);
    resetValuesUI();
    resetFieldsNotChosen();
}

export function calculateSum(fieldArray) {

    let sum = 0;

    for (let i = 0; i < 6; i++) {
        if (fieldArray[i].disabled) {
            sum += parseInt(fieldArray[i].value) || 0;
        }
    }

    return sum;
}

export function calculateTotal(fieldArray) {

    let sum = 0;
    let bonus = calculateBonus(fieldArray);

    for (let i = 0; i < fieldArray.length; i++) {
        if (fieldArray[i].disabled) {
            sum += parseInt(fieldArray[i].value) || 0;
        }
    }

    return sum + bonus;
}

export function calculateBonus(fieldArray) {
    let bonus = 0;

    let sum = calculateSum(fieldArray);

    return bonus = sum >= 63 ? 50 : 0;
}

