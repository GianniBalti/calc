let numberContainer = document.getElementById("numberContainer");
console.log(numberContainer.className);

function createNumberDivs() {
    for (let index = 0; index < 9; index++) {
        const numberDiv = document.createElement("div");
        numberDiv.id = "numberCell";
        numberDiv.className = `"number-button-${index+1}"`; 
        numberContainer.append(numberDiv);
        
    }
}

function main() {
    createNumberDivs();
}

main();