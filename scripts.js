let num1 = 0;
let num2 = 0;
let operator = "";
let display = "0"

const displayValue = document.querySelector("#display");
displayValue.textContent = display;

const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const clear = document.querySelector("#clear");

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const div = document.querySelector("#div");
const equals = document.querySelector("#equals");

zero.addEventListener("click", () => {buttonInput(zero);})
one.addEventListener("click", () => {buttonInput(one);})
two.addEventListener("click", () => {buttonInput(two);})
three.addEventListener("click", () => {buttonInput(three);})
four.addEventListener("click", () => {buttonInput(four);})
five.addEventListener("click", () => {buttonInput(five);})
six.addEventListener("click", () => {buttonInput(six);})
seven.addEventListener("click", () => {buttonInput(seven);})
eight.addEventListener("click", () => {buttonInput(eight);})
nine.addEventListener("click", () => {buttonInput(nine);})

clear.addEventListener("click", () => {
    display = 0;
    setDisplay();
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

function setDisplay() {
    displayValue.textContent = display;
}

function buttonInput(button) {
    if(display == 0) {
        display = button.textContent;
    } else {
        display = display + button.textContent;
    }
    setDisplay();

}
