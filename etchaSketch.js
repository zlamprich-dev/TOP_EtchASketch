let container = document.querySelector(".container");
let element = document.createElement('button');
element.addEventListener("click", createGrid);
element.textContent = "Create Grid"
document.body.insertBefore(element, container);


let hover;
let square;

function createGrid(index) {
    let gridNumbers = prompt("Please enter the size of your board as a number.");
    gridNumbers = parseInt(gridNumbers);
    if (!isNaN(gridNumbers) && gridNumbers > 0) {
        container.innerHTML = '';
        for (let i = 0; i < gridNumbers; i++) {
            let makeGrid = document.createElement("div");
            console.log(`.${square}`)
            makeGrid.classList.add("grid-square");
            container.appendChild(makeGrid);

            makeGrid.addEventListener('mouseover', () => {
                makeGrid.style.backgroundColor = randomColor();
            });
        }
    } else {
        alert("Please enter a valid number.");
    }
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}


function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}