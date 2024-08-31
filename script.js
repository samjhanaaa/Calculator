const display = document.getElementById("display-result");

function displayValue(value) {
    display.textContent += value;
}

function findAnswer() {
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = "Your values are sus";
    }
}

function clearDisplay() {
    display.textContent = '';
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1);
}