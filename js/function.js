
function getNoNumber(inputValue) {
    if (isNaN(inputValue)) {
        alert("Please put here a valid number");
        return;
    }
}

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;
}

function getElementValueById(elementFieldId) {
    const elementTotal = document.getElementById(elementFieldId);
    const previousElementTotalString = elementTotal.innerText;
    const previousElementTotal = parseFloat(previousElementTotalString);
    return previousElementTotal;
}

function setTextElementValueById(elementFieldId, newValue) {
    const textEelment = document.getElementById(elementFieldId);
    textEelment.innerText = newValue;
}

document.getElementById("btn-both").addEventListener("click", function () {
    const newAmount = getInputFieldValueById(getNoNumber("both-input"));
    const previousDoubleTotal = getElementValueById("double-total");
    const newDoubleTotal = previousDoubleTotal + (newAmount * 2);
    setTextElementValueById("double-total", newDoubleTotal);
    const previousTripleTotal = getElementValueById("triple-total");
    const newTripleTotal = previousTripleTotal + (newAmount * 3);
    setTextElementValueById("triple-total", newTripleTotal);
})

document.getElementById("btn-double").addEventListener("click", function () {
    const newDoubleAmount = getInputFieldValueById(getNoNumber("double-input"));
    const previousDoubleTotal = getElementValueById("double-total");
    const newDoubleTotal = previousDoubleTotal + (newDoubleAmount * 2);
    setTextElementValueById("double-total", newDoubleTotal);
})

document.getElementById("btn-triple").addEventListener("click", function () {
    const newTripleAmount = getInputFieldValueById(getNoNumber("triple-input"));
    const previousTripleTotal = getElementValueById("triple-total");
    const newTripleTotal = previousTripleTotal + (newTripleAmount * 3);
    setTextElementValueById("triple-total", newTripleTotal);
})