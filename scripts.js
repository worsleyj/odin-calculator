let num1 = 0;
let num2 = 0;
let displayValue = 0;
let operator = "";

const display = document.querySelector(".display");
display.textContent = displayValue;

const numBtns = document.querySelectorAll(".num-button");
const operatorBtns = document.querySelectorAll(".operator-button");
const equalsBtn = document.querySelector(".equals-button");

numBtns.forEach(numBtn => {
    numBtn.addEventListener("click", () => {
        if (displayValue == 0 || displayValue == "INV") {
            displayValue = numBtn.textContent;
        } else {
            displayValue += numBtn.textContent;
        }
        console.log(displayValue);
        updateDisplay();
    })
})

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
        operator = operatorBtn.textContent;
        console.log(operator);
    })
})

equalsBtn.addEventListener("click", () => {
    displayValue = operate(operator, num1, num2)
    updateDisplay();
})

function updateDisplay() {
    display.textContent = displayValue;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    } else return "INV";
}


console.log(operate("*", 4, 5));