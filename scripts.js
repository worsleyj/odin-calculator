let num1 = 0;
let num2 = 0;
let displayValue = 0;
let operator = "";

const DEBUG = 1;

const display = document.querySelector(".display");
updateDisplay();

const numBtns = document.querySelectorAll(".num-button");
const operatorBtns = document.querySelectorAll(".operator-button");
const equalsBtn = document.querySelector(".equals-button");
const clearBtn = document.querySelector(".clear-button");

clearBtn.addEventListener("click", clear);

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
        if (num1 == 0) {
            inputNum(num1);
        } else if (num2 == 0) {
            inputNum(num2);
        }
        if (operator != "") {
            num1 = operate(operator, parseInt(num1), parseInt(num2));
            num2 = displayValue;
            updateDisplay();
        }

        operator = operatorBtn.textContent;
    })
})

equalsBtn.addEventListener("click", () => {
    num2 = displayValue;
    displayValue = operate(operator, parseInt(num1), parseInt(num2));
    num1 = displayValue;
    num2 = 0;
    operator = "";
    updateDisplay();
    displayValue = 0;
})

function clear() {
    num1 = 0;
    num2 = 0;
    displayValue = 0;
    operator = "";
    updateDisplay();
}

function inputNum(num) {
    if (num == num1) {
        num1 = displayValue;
        displayValue = 0;
    } else if (num == num2) {
        num2 = displayValue;
        displayValue = 0;
    }
}

function updateDisplay() {
    let roundedDisplayValue = +(Number(displayValue)).toFixed(5);
    display.textContent = roundedDisplayValue;

    if (DEBUG == 1) {
        console.log("NUM 1: " + num1 + ", NUM 2: " + num2 + ", OP: " + operator);
    }
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 == 0) {
        clear();
        return 0;
    } else return num1 / num2;
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
    } else return num2;
}

