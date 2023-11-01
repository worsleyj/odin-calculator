let num1 = 0;
let num2 = 0;
let operator = "";
let display = "0"

const displayValue = document.querySelector("#display");
displayValue.textContent = display;

const one = document.querySelector("#one")
const two = document.querySelector("#two")
const three = document.querySelector("#three")
const four = document.querySelector("#four")
const five = document.querySelector("#five")
const six = document.querySelector("#six")
const seven = document.querySelector("#seven")
const eight = document.querySelector("#eight")
const nine = document.querySelector("#nine")
const clear = document.querySelector("#clear");

one.addEventListener("click", () => {
    setDisplay(one);
})
two.addEventListener("click", () => {
    setDisplay(two);
})
three.addEventListener("click", () => {
    setDisplay(three);
})
four.addEventListener("click", () => {
    setDisplay(four);
})
five.addEventListener("click", () => {
    setDisplay(five);
})
six.addEventListener("click", () => {
    setDisplay(six);
})
seven.addEventListener("click", () => {
    setDisplay(seven);
})
eight.addEventListener("click", () => {
    setDisplay(eight);
})
nine.addEventListener("click", () => {
    setDisplay(nine);
})
clear.addEventListener("click", () => {
    displayValue.textContent = 0;
})

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}

function setDisplay(num) {
    displayValue.textContent = num.textContent;
}