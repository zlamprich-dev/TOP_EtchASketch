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
            index = makeGrid.classList
            square = index;
            console.log(typeof (square), `${square}`)
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
    return `rgb(${random(0, 255)} ${random(0, 255)}} ${random(0, 255)})`
}

function applyRandomColor(x) {
    let applyStyle = document.getElementsByClassName(`.${x}`);
    for (let i = 0; i <= applyStyle.length; i++) {
        applyStyle.addEventListener('mouseover', () => {
            applyStyle.style.backgroundColor = 'black';
        });
    }

}