let num1 = 0;
let num2 = 0;
let total = 0;
let operator = "";

const displayValue = document.querySelector("#display");
displayValue.textContent = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "grey";
}));

buttons.forEach(button => button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#f96d00";
}));

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
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");
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

decimal.addEventListener("click", () => {
    num1 = num1 + ".";
    setDisplay(num1);
})

backspace.addEventListener("click", () => {
    num1 = num1.substring(0, num1.length-1);
    setDisplay(num1);
})

clear.addEventListener("click", () => {
    setDisplay(0);
    num1 = num2 = total = 0;
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
    if(num1 != 0) {
        return num2 / num1;
    } else {
        alert("Cannot Divide by Zero!");
        setDisplay(0);
        num1 = num2 = total = 0;
        return num1;
    }
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
        return num1;
    }
}

function setDisplay(value) {
    displayValue.textContent = value;
}
function buttonInput(button) {
    if(num1 == total || num1 == 0) {
        num1 = button.textContent;
    } else {
        num1 = num1 + button.textContent;
    }
    setDisplay(num1);
}

function operation(button) {
    num2 = num1;
    num1 = 0;
    setDisplay(num2 + "   " + button.textContent)
    if (operator == "") {
        operator = button.textContent;
    } else {
        calculate();
        operator = button.textContent;
    }
}

function calculate() {
    total = operate(num1, num2, operator);
    setDisplay(total);
    num1 = total;
}
