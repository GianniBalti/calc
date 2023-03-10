function add(a,b) {
    console.log(a, b)
    return parseFloat(a) + parseFloat(b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b != '0'){
        return a/b
    } else {
        alert("STOP IT!");
        return "A blackhole has been created!"
    }
}

function operate(operator, firstArg, secondArg) {
    switch(operator) {
        case '+':
            return add(firstArg,secondArg);
            break;
        case '-':
            return subtract(firstArg,secondArg);
            break;
        case 'x':
            return multiply(firstArg,secondArg);
            break;
        case '*':
            return multiply(firstArg,secondArg);
        case '/':
            return divide(firstArg,secondArg);
            break;
    }
}

let buttons = document.querySelectorAll("button");
let curNumber = document.getElementById("currOperand");
let prevNumber = document.getElementById("prevOperand");
let operator = document.getElementById("operatorDiv");
let resultScreen = document.getElementById("resultScreen");




let string = "";
let sum = 0;


function updateScreen() {

    //Input van de knop bvb = input = 5
    //Deze input moeten we bewaren in een nieuwe variabele currInput?
    //De volgende input moet aan de currInput geplakt worden
    //nextInput?
    //currInput = currInput + nextInput
    //finalInput = currInput?
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let input = button.innerText;
            resultScreen.innerText = '';
            //clearScreen();
            
                       
            if (input === "DEL") {
                deleteLastInput();
            } else if (input === "AC") {
                clearScreen();

            } else if (input === "+") {
                operator.innerText = input;

            } else if (input === "-") {
                operator.innerText = input;

            }else if (input === "*") {
                operator.innerText = input;

            }else if (input === "/") {
                operator.innerText = input;

            }else if (input === "=") {
                checkOperation();

            } else {
                updateArgs(input);
            }            
        })
        
    })
}

function clearScreen() {

    curNumber.innerText = "";
    prevNumber.innerText = "";
    operator.innerText = "";
    resultScreen.innerText = "";
    string = "";
}

function roundTo5decimalsMax(halfProduct){
    halfProduct *= 1000;
    halfProduct = Math.round(halfProduct)
    return halfProduct / 1000
}

function checkOperation() {
    if (prevNumber.innerText !== '' && operator.innerText !== '' && curNumber.innerText !== '') {
        let result = roundTo5decimalsMax(operate(operator.innerText, prevNumber.innerText, curNumber.innerText));
        curNumber.innerText = "";
        prevNumber.innerText = "";
        operator.innerText = "";
        resultScreen.innerText = result
    }
}

function deleteLastInput() {
    // console.log(str);
    // let slicedString = str.slice(0, -1);
    // console.log(slicedString);
    // curNumber.innerText = slicedString;
    console.log('clicked!');
    console.log(prevNumber.innerText)

    if (curNumber.innerText === "") {
        let str = prevNumber.innerText;
        console.log(str);
        let slicedString = str.slice(0,-1);
        prevNumber.innerText = slicedString;
    } else {
        let str = curNumber.innerText;
        console.log(str);
        let slicedString = str.slice(0, -1);
        curNumber.innerText = slicedString;
    }
}

function updateArgs(value) {
    if (operator.innerText === '') {
        prevNumber.innerText += value;
    } else {
        curNumber.innerText += value;
    }
}

function main() {
    updateScreen();
    clearScreen();
}

main();