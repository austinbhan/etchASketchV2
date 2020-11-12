let header = document.getElementById("header");
let container = document.createElement("div");
container.id = "container";
header.appendChild(container);

let gridTitle = document.createElement("gridTitle");
gridTitle.textContent = "Choose your Dimensions";
gridTitle.style = `text-align: center; 
                   font-size: 40px; 
                   margin: auto;`;
container.appendChild(gridTitle);

xButton.addEventListener("click", function(e) {    
    container.innerHTML = " ";
    let grid = prompt("How many rows and columns?");
    container.style.gridTemplateRows = `repeat(${grid}, auto)`;
    container.style.gridTemplateColumns = `repeat(${grid}, auto)`;
    let total = grid * grid;

    if (total > 2500) {
        alert("Your grid request is above 50x50, try again");
    }
    else {
        for (i = 0; i < total; i++) {
            let divElements = document.createElement("div");
            divElements.style.border = "1px solid black";
            divElements.onmouseover = function() {
                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                divElements.style.backgroundColor = `#${randomColor}`;
                }
            container.appendChild(divElements);
        };
    }
});
