let container = document.querySelector(".container");
let element = document.createElement('button');
element.addEventListener("click", createGrid);
element.textContent = "Create Grid"
document.body.insertBefore(element, container);


function createGrid() {
    let gridNumbers = prompt("Please enter the size of your board as a number.");
    gridNumbers = parseInt(gridNumbers);
    if (!isNaN(gridNumbers) && gridNumbers > 0) {
        container.innerHTML = ''; // Clear any existing grid squares
        for (let i = 0; i < gridNumbers; i++) {
            let makeGrid = document.createElement("div");
            makeGrid.classList.add("grid-square");
            container.appendChild(makeGrid);
        }
    } else {
        alert("Please enter a valid number.");
    }
}

