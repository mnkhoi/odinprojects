const grid = document.querySelector('.container');
const gridSize = grid.offsetWidth;

let size = 16;
let mode = 'color';
let color = 'black';

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const clearButton = document.querySelector('.clear');
const eraserButton = document.querySelector('.eraser');
const colorMode = document.querySelector('.color-mode');
const colorPicker = document.querySelector('#color');
const sizePicker = document.querySelector('#size');

clearButton.addEventListener('click', clearScreen);
eraserButton.addEventListener('click', () => activateButton('erase'));
colorMode.addEventListener('click', () => activateButton('color'));
colorPicker.addEventListener('change', (e) => (color = e.target.value));
sizePicker.addEventListener('change',(e) => changeSize(e));

function activateButton(e) {
    if(mode == 'erase'){
        eraserButton.classList.remove('active');
    }else if(mode == 'color') { 
        colorMode.classList.remove('active');
    }

    if(e == 'erase'){
        eraserButton.classList.add('active');
    }else if(e == 'color') {
        colorMode.classList.add('active');
    }

    mode = e;
}

function changeSize(e){
    size = e.target.value;
    const text = document.querySelector('.range-text');
    text.textContent = `${size} x ${size}`;
    clearScreen();
}

function fill() {
    for(let i = 0; i < size * size; i++){
        const block = document.createElement("div");
        block.className = "block"
        block.style.width = `${gridSize/size}px`
        block.style.height = block.style.width
        block.addEventListener('mouseover', changeColour)
        block.addEventListener('mousedown', changeColour)
        grid.appendChild(block);
    }
}

function changeColour(e) {
    if (e.type == 'mouseover' && !mouseDown) return;
    if (mode == 'color'){
        this.style.backgroundColor = color;
    }else if (mode == 'erase'){
        this.style.backgroundColor = 'white';
    }
}

function clearScreen() {
    grid.innerHTML = '';
    fill();
}

window.onload = () =>{
    fill();
}