let diceImages = [
    { value: 1, path: 'png/dice-six-faces-one.png' },
    { value: 2, path: 'png/dice-six-faces-two.png' },
    { value: 3, path: 'png/dice-six-faces-three.png' },
    { value: 4, path: 'png/dice-six-faces-four.png' },
    { value: 5, path: 'png/dice-six-faces-five.png' },
    { value: 6, path: 'png/dice-six-faces-six.png' },
];

let containerNode = document.getElementById("diceContainer")

export function showDice(diceArray) {

    containerNode.innerHTML = '';

    for (let dice of diceArray) {

        for (let diceImage of diceImages) {

            if (diceImage.value === dice.value) {
                let img = document.createElement("img")
                img.src = diceImage.path
                img.id = dice.status === "selected" ? "selected" : "unselected";
                containerNode.appendChild(img)
            }
        }
    }
}







