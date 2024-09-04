const drawButton = document.querySelector(".draw-button")
const inputMin = document.querySelector(".input-min")
const inputMax = document.querySelector(".input-max")
const mask = document.querySelector(".mask")
const drawnNumberBox = document.querySelector(".drawn-number-box")
const h3result = document.querySelector(".h3result")
const okButton = document.querySelector(".ok-button")

function drawLots() {
    const min = Math.ceil(inputMin.value)
    const max = Math.floor(inputMax.value)

    if (min >= max) {
        alert("O valor máximo deve ser maior que o valor mínimo!")
    } else {
        const drawnNumber = Math.floor(Math.random() * (max - min + 1)) + min

        mask.style.visibility = "visible"
        drawnNumberBox.style.visibility = "visible"
        okButton.style.transition = "100ms ease-in-out"

        h3result.textContent = drawnNumber
    }
}

function hideDrawnNumberBox() {
    mask.style.visibility = "hidden"
    drawnNumberBox.style.visibility = "hidden"
    okButton.style.transition = "none"
}

drawButton.addEventListener("click", drawLots)
okButton.addEventListener("click", hideDrawnNumberBox)