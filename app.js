import { rollDice } from "./controller.js";
import { lockDice, updateDice } from "./ui.js";


const rollButton = document.getElementById("rollButton")

let diceArray = [
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
    { value: 1, status: "unselected" },
]

let counter = 1;

rollButton.addEventListener("click", function () {
    
    diceArray = rollDice(diceArray);

    updateDice(diceArray);
    counter++;
    document.getElementById("counter").innerText = `Turn ${counter}`;
}
)

const images = document.querySelectorAll('img');


for (let img of images) {
    img.addEventListener("click", function() {

        lockDice()

    })
}



