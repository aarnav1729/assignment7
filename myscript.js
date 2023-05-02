const display = document.querySelector('.display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');

let currentDisplay = 0;

// Add event listeners for digit buttons
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentDisplay += button.textContent;
        display.textContent = currentDisplay;
    });
});

// Add event listeners for operator buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentDisplay += button.textContent;
        display.textContent = currentDisplay;
    });
});

// Add event listener for clear button
clearButton.addEventListener('click', () => {
    currentDisplay = "0";
    display.textContent = currentDisplay;
});

// Add event listener for equal button
equalsButton.addEventListener('click', () => {
    let result = eval(currentDisplay);
    currentDisplay = result.toString();
    display.textContent = currentDisplay;
});