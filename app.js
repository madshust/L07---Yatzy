import { changeDiceStatus, gameOver, resetValues, rollDice } from "./controller.js";
import { lockDieUI, lockFieldUI, updateDice, updateScoreboard, resetValuesUI, updateSumAndTotalAndBonus, resetFieldsNotChosen } from "./ui.js";

let diceArray = [
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
]

let fieldArray = document.querySelectorAll(".number");

export function getValues() {
    let values = [];

    for (let i = 0; i < diceArray.length; i++) {
        values.push(diceArray[i].value);
    }
    return values;
}

const rollButton = document.getElementById("rollButton")


let counter = 0;

rollButton.addEventListener("click", function () {

    if (counter < 3) {
        diceArray = rollDice(diceArray);
        updateDice(diceArray);
        updateScoreboard();
        counter++;
        document.getElementById("counter").innerText = `Turn ${counter}`;
    } else {
        rollButton.disabled = true;
    }
});

const images = document.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        diceArray = changeDiceStatus(diceArray, i);
        lockDieUI(i, diceArray[i].status);
    });
}

const scores = document.getElementById("scoreboard");
scores.addEventListener("click", function (event) {
    let clickedField = event.target;

    if (clickedField.tagName === "INPUT" && clickedField.classList.contains("number")) {
        lockFieldUI(clickedField.id);
        clickedField.disabled = true;
        rollButton.disabled = false;
        updateSumAndTotalAndBonus(fieldArray);
        resetValues(diceArray);
        resetValuesUI();
        counter = 0;
        document.getElementById("counter").innerText = `Turn ${counter}`;
        resetFieldsNotChosen();
    }

    // Tjekker om spillet er ovre
    gameOver(fieldArray, diceArray);
})




