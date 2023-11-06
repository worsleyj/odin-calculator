let num1 = 0;
let num2 = 0;
let operator = "";

const displayValue = document.querySelector("#display");
displayValue.textContent = 0;

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

const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const div = document.querySelector("#div");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");


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

plus.addEventListener("click", () => {operation(plus);})
minus.addEventListener("click", () => {operation(minus);})
times.addEventListener("click", () => {operation(times);})
div.addEventListener("click", () => {operation(div);})

clear.addEventListener("click", () => {
    setDisplay(0);
})

equals.addEventListener("click", () => {
    calculate();
    operator = "";
})

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num2 - num1;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num2 / num1;
}

function operate(num1, num2, operator) {
    num1 = num1/1;
    num2 = num2/1;
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    } else { 
        setDisplay(num1);
    }
}

function setDisplay(value) {
    displayValue.textContent = value;
}
function buttonInput(button) {
    setDisplay(button.textContent);
    num2 = num1;
    num1 = button.textContent;
}

function operation(button) {
    if (operator == "") {
        operator = button.textContent;
    } else {
        calculate();
        operator = button.textContent;
    }
}

function calculate() {
    num1 = operate(num1, num2, operator);
    setDisplay(num1);
}
