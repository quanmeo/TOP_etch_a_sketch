const defaultColor = '#000000';
window.addEventListener('load', startUp, false);

let colorChoosen = null;
let numberChoosen = 30;

function drawGrid(number) {

    const container = document.querySelector('.container');
    
    const size = 600;
    
    const border = 0;
    
    for (let i = 0; i < number; i++) {
        const divs = document.createElement('div');
        divs.classList.add('row');
    
        for (let j = 0; j < number; j++) {
            const div = document.createElement('div');
            div.classList.add('rectangle');
    
            const divSize = (size - number * 2 * border) / number;
            div.style.width = `${divSize}px`;
            div.style.height = `${divSize}px`;
    
            divs.appendChild(div);
        }
    
        container.appendChild(divs);
    }

}

function addBackground(e) {
    this.style.backgroundColor = colorChoosen;
}

function removeBackground(e) {
    this.style.backgroundColor = null;
}

function addEvent() {
    const divs = document.querySelectorAll('.rectangle');
    
    divs.forEach(div => div.addEventListener('mouseover', addBackground));
    
    divs.forEach(div => div.addEventListener('mouseleave', removeBackground));
}

function game() {
    drawGrid(numberChoosen);

    addEvent();
}

function setColorPicker(color) {

    const input = document.querySelector('#colorPicker');

    input.style.backgroundColor = color;
}
function updateFirst(event) {
    const color = event.target.value;

    setColorPicker(color);
}

function updateAll(event) {
    colorChoosen = event.target.value;
}

function startUp() {
    colorChoosen = defaultColor;
    setColorPicker(defaultColor);
    const colorPicker = document.querySelector('#colorPicker');
    colorPicker.addEventListener('input', updateFirst, false);
    colorPicker.addEventListener('change', updateAll, false);
}

game();