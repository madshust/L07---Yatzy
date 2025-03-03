import { getResult } from "./rules.js";

let diceImages = [
    { value: 1, path: 'png/dice-six-faces-one.png' },
    { value: 2, path: 'png/dice-six-faces-two.png' },
    { value: 3, path: 'png/dice-six-faces-three.png' },
    { value: 4, path: 'png/dice-six-faces-four.png' },
    { value: 5, path: 'png/dice-six-faces-five.png' },
    { value: 6, path: 'png/dice-six-faces-six.png' },
];

const images = document.querySelectorAll("img");

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

export function lockDieUI(index, status) {
    const img = document.getElementById(`die${index}`);

    if (status === "selected") {
        img.classList.add("selected");
    } else {
        img.classList.remove("selected");
    }
}

export function lockFieldUI(fieldId) {
    const field = document.getElementById(fieldId).classList.add("locked");
}

export function updateScoreboard() {

    let scores = getResult();

    document.getElementById("1s").value = scores[1];
    document.getElementById("2s").value = scores[2];
    document.getElementById("3s").value = scores[3];
    document.getElementById("4s").value = scores[4];
    document.getElementById("5s").value = scores[5];
    document.getElementById("6s").value = scores[6];
    document.getElementById("onepair").value = scores[7];
    document.getElementById("twopairs").value = scores[8];
    document.getElementById("threesame").value = scores[9];
    document.getElementById("foursame").value = scores[10];
    document.getElementById("fullHouse").value = scores[11];
    document.getElementById("smallStraight").value = scores[12];
    document.getElementById("bigStraight").value = scores[13];
    document.getElementById("chance").value = scores[14];
    document.getElementById("yatzy").value = scores[15];

}







