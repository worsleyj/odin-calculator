let num1 = 0;
let num2 = 0;
let operator = "";

const addBtn = document.querySelector(".add-button");
const subtractBtn = document.querySelector(".subtract-button");
const multiplyBtn = document.querySelector(".multiply-button");
const divideBtn = document.querySelector(".divide-button");

addBtn.addEventListener("click", () => {
    operator = "+";
})

subtractBtn.addEventListener("click", () => {
    operator = "-";
})

multiplyBtn.addEventListener("click", () => {
    operator = "*";
})

divideBtn.addEventListener("click", () => {
    operator = "/";
})


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
    } else return "INVALID OPERATOR";
}


console.log(operate("*", 4, 5));