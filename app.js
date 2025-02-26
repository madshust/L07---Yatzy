import { rollDice } from "./controller.js";
import { showDice } from "./ui.js";


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

    showDice(diceArray);
    counter++;

}
)
