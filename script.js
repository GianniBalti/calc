//All calculator functions

function add(a,b) {
    //console.log(a, b)
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

//Operation handler with two arguments and the operator value
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


//global variables
let buttons = document.querySelectorAll("button");
let curNumber = document.getElementById("currOperand");
let prevNumber = document.getElementById("prevOperand");
let operator = document.getElementById("operatorDiv");
let resultScreen = document.getElementById("resultScreen");


function updateScreen() {

    //looping over all the calc buttons and doing the neccesary action according to the input
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let input = button.innerText;
            //resultScreen.innerText = '';            
                       
            if (input === "DEL") {
                deleteLastInput();
            } else if (input === "AC") {
                clearScreen();

            } else if (input === "+") {
                if (resultScreen.innerText !== "") {
                    prevNumber.innerText = resultScreen.innerText;
                    resultScreen.innerText = "";
                    console.log(resultScreen.innerText);
                    console.log(prevNumber.innerText);
                    operator.innerText = input;
                }
                else if (prevNumber.innerText === "") {
                    return;
                } else {
                    operator.innerText = input;
                }
                

            } else if (input === "-") {
                if (resultScreen.innerText !== "") {
                    prevNumber.innerText = resultScreen.innerText;
                    resultScreen.innerText = "";
                    console.log(resultScreen.innerText);
                    console.log(prevNumber.innerText);
                    operator.innerText = input;
                }
                else if (prevNumber.innerText === "") {
                    return;
                } else {
                    operator.innerText = input;
                }

            }else if (input === "*") {
                if (resultScreen.innerText !== "") {
                    prevNumber.innerText = resultScreen.innerText;
                    resultScreen.innerText = "";
                    console.log(resultScreen.innerText);
                    console.log(prevNumber.innerText);
                    operator.innerText = input;
                }
                else if (prevNumber.innerText === "") {
                    return;
                } else {
                    operator.innerText = input;
                }

            }else if (input === "/") {
                if (resultScreen.innerText !== "") {
                    prevNumber.innerText = resultScreen.innerText;
                    resultScreen.innerText = "";
                    console.log(resultScreen.innerText);
                    console.log(prevNumber.innerText);
                    operator.innerText = input;
                }
                else if (prevNumber.innerText === "") {
                    return;
                } else {
                    operator.innerText = input;
                }

            }else if (input === "=") {
                checkOperation();

            }else {
                updateArgs(input);
            }            
        })
        
    })
}

//clears the screen
function clearScreen() {

    curNumber.innerText = "";
    prevNumber.innerText = "";
    operator.innerText = "";
    resultScreen.innerText = "";
}

//rounds the result to max three decimals
function roundTo3decimalsMax(halfProduct){
    halfProduct *= 1000;
    halfProduct = Math.round(halfProduct)
    return halfProduct / 1000
}

//Checks the operation and handles the result
function checkOperation() {
    if (prevNumber.innerText !== '' && operator.innerText !== '' && curNumber.innerText !== '') {
        let result = roundTo3decimalsMax(operate(operator.innerText, prevNumber.innerText, curNumber.innerText));
        curNumber.innerText = "";
        prevNumber.innerText = "";
        operator.innerText = "";
        resultScreen.innerText = result
        console.log(result);
        //return;
    }
}

//deletes the last input
function deleteLastInput() {
    // console.log(str);
    // let slicedString = str.slice(0, -1);
    // console.log(slicedString);
    // curNumber.innerText = slicedString;
    console.log('clicked!');
    console.log(prevNumber.innerText)

    if (curNumber.innerText === "" && operator.innerText === "") {
        let str = prevNumber.innerText;
        console.log(str);
        let slicedString = str.slice(0,-1);
        prevNumber.innerText = slicedString;
    } else if (prevNumber.innerText !== "" && curNumber.innerText === "") {
        let str = operator.innerText;
        console.log(str);
        let slicedString = str.slice(0, -1);
        operator.innerText = slicedString;
    } else {
        let str = curNumber.innerText;
        console.log(str);
        let slicedString = str.slice(0,-1);
        curNumber.innerText = slicedString;
    }
}

function updateArgs(value) {
    if (operator.innerText === '') {
        //prevNumber.innerText += value;
        if (prevNumber.innerText.includes(".") && value === ".") {
            return
        } else {
            prevNumber.innerText += value;
        }
    } else {
        if (curNumber.innerText.includes(".") && value === ".") {
            return
        } else {
            curNumber.innerText += value;
        }
        
    }
}

function main() {
    updateScreen();
    clearScreen();
}

main();