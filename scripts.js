// debug settings
const DEBUG_MODE = true;
const debug = document.querySelector("#debug-console");

if (DEBUG_MODE != true) {
    debug.innerHTML = ""
}

// main program 

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

plus.addEventListener("click", () => {
    if(operator != "") {
        calculate
    }
    operation(plus);
})
minus.addEventListener("click", () => {operation(minus);})
times.addEventListener("click", () => {operation(times);})
div.addEventListener("click", () => {operation(div);})

clear.addEventListener("click", () => {
    display = 0;
    setDisplay();

    if(DEBUG_MODE == true) {    
        debug.innerHTML= "DEBUG: ";
    }
})

equals.addEventListener("click", () => {
    calculate();
    operator = "";
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
    num1 = num1/1;
    num2 = num2/1;
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

function calculate() {
    num2 = display;
    display = operate(num1, num2, operator);
    setDisplay();
    num1 = 0;
    num2 = 0;

    if(DEBUG_MODE == true) {    
        debug.appendChild(document.createTextNode(" " + display)); }
    }

function operation(button) {
    num1 = display;
    display = 0;
    setDisplay();
    if(operator != "") {
        operator = button.textContent;
        calculate();
    } else {
        operator = button.textContent;
    }
}