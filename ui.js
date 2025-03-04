import { calculateBonus, calculateSum, calculateTotal } from "./controller.js";
import { getResult } from "./rules.js";

let diceImages = [
    { value: 1, path: 'png/dice-six-faces-one.png' },
    { value: 2, path: 'png/dice-six-faces-two.png' },
    { value: 3, path: 'png/dice-six-faces-three.png' },
    { value: 4, path: 'png/dice-six-faces-four.png' },
    { value: 5, path: 'png/dice-six-faces-five.png' },
    { value: 6, path: 'png/dice-six-faces-six.png' },
];

export function updateDice(diceArray) {

    for (let i in diceArray) {
        const die = diceArray[i];

        const element = document.getElementById(`die${i}`)

        for (let img of diceImages) {
            if (img.value === die.value) {
                element.src = img.path;
                element.class = die.status === "selected" ? "selected" : "unselected";
            }
        }
    }
}

export function resetValuesUI() {
    const images = document.querySelectorAll("img");

    for (let i = 0; i < images.length; i++) {
        images[i].src = 'png/dice-six-faces-one.png';
        images[i].classList.remove("selected");
    }

}

export function lockDieUI(index, status) {
    const img = document.getElementById(`die${index}`);

    if (status === "selected") {
        img.classList.add("selected");
    } else {
        img.classList.remove("selected");
    }
}

export function lockFieldUI(fieldId) {
    const field = document.getElementById(fieldId);

    if (!field.classList.contains("locked")) {
        field.classList.add("locked");
    } else {
        field.classList.remove("locked");
    }
}

export function updateScoreboard() {

    const scoreboardValues = document.getElementById("scoreboard");
    const fields = scoreboardValues.querySelectorAll(".number");
    let scores = getResult();

    const mapping = {
        "1s": 1, "2s": 2, "3s": 3, "4s": 4, "5s": 5, "6s": 6,
        "onepair": 7, "twopairs": 8, "threesame": 9, "foursame": 10,
        "fullHouse": 11, "smallStraight": 12, "bigStraight": 13,
        "chance": 14, "yatzy": 15
    }

    fields.forEach(field => {
        if (!field.classList.contains("locked")) {
            let index = mapping[field.id];
            if (index !== undefined && scores[index] !== undefined) {
                field.value = scores[index];
            }
        }
    })
}

export function updateSumAndTotalAndBonus(fieldArray) {

    const sumField = document.getElementById("sumInput");
    sumField.value = calculateSum(fieldArray);

    const totalField = document.getElementById("totalInput");
    totalField.value = calculateTotal(fieldArray);

    const bonusField = document.getElementById("bonusInput");
    bonusField.value = calculateBonus(fieldArray);

}

export function resetFieldsNotChosen() {
    const scoreboard = document.getElementById("scoreboard");
    const fields = scoreboard.querySelectorAll(".number");

    fields.forEach(field => {
        if (!field.classList.contains("locked")) {
            field.value = 0;
        }
    })
}







