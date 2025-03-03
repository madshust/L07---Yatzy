import { changeDiceStatus, rollDice } from "./controller.js";
import { lockDieUI, lockFieldUI, updateDice, updateScoreboard } from "./ui.js";

let diceArray = [
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
]

export function getValues() {
    let values = [];

    for (let i = 0; i < diceArray.length; i++) {
        values.push(diceArray[i].value);
    }
    return values;
}

const rollButton = document.getElementById("rollButton")


let counter = 1;

rollButton.addEventListener("click", function () {

    diceArray = rollDice(diceArray);
    updateDice(diceArray);
    updateScoreboard();
    counter++;
    document.getElementById("counter").innerText = `Turn ${counter}`;
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

    if (clickedField.tagName === "INPUT") {
        lockFieldUI(clickedField.id);
    }

})



