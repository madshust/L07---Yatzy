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

export function lockDice(diceArray) {

    images.forEach((img, index) => {
        img.addEventListener("click", function () {

            let dice = diceArray[index];

            if (dice.status === "unselected") {
                dice.status = "selected";
                img.classList.add("selected")
            } else {
                dice.status = "unselected";
                img.classList.remove("selected");
            }
        })
    })
}







