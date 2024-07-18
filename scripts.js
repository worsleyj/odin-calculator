let num1 = 0;
let num2 = 0;
let displayValue = 0;
let operator = "";

const DEBUG = 1;

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
        if (num1 == 0) {
            console.log("ONE");

            inputNum(num1);
        } else if (num2 == 0) {
            console.log("TWO");

            inputNum(num2);
        }
        if (operator != "") {
            console.log("THREE");
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
    updateDisplay();
})

function inputNum(num) {
    if (num == num1) {
        num1 = displayValue;
        displayValue = 0;
        updateDisplay();
    } else if (num == num2) {
        num2 = displayValue;
        displayValue = 0;
        updateDisplay();
    }
}

function updateDisplay() {
    display.textContent = displayValue;

    if (DEBUG == 1) {
        console.log("NUM 1: " + num1 + ", NUM 2: " + num2 + ", OP: " + operator);
    }
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

