const defaultColor = '#ffff00';
window.addEventListener('load', startUp, false);

let colorChoosen = null;
let numberChoosen = 30;
let rainBow = false;

let idx = 0;
const rainBowSize = 7;
const rainBowList = ['#9400D3', '#4B0082', '#0000FF', '#00FF00',
                    '#FFFF00', '#FF7F00', '#FF0000'];

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

            div.setAttribute('id', `${i}|${j}`);
    
            const divSize = (size - number * 2 * border) / number;
            div.style.width = `${divSize}px`;
            div.style.height = `${divSize}px`;
    
            divs.appendChild(div);
        }
    
        container.appendChild(divs);
    }

}

function chooseColor() {
    if (!rainBow) {
        return colorChoosen;
    } else {
        idx = (idx + 1) % rainBowSize;
        return rainBowList[idx];
    }
}

function addBackground(e) {
    this.style.backgroundColor = chooseColor();
}

function removeBackground(e) {
    e.style.backgroundColor = null;
}

function clearBackgroundColor(e) {
    const container = document.querySelector('.container');
    if (container) {
        const rows = container.childNodes;

        rows.forEach((r) => {
            const recs = r.childNodes;
            recs.forEach(removeBackground);
        });
    }
    setRainBow(false);
}

function addEvent() {
    const divs = document.querySelectorAll('.rectangle');
    
    divs.forEach(div => div.addEventListener('mouseover', addBackground));    
}

function game() {
    removeAllChildrenGrid();

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

function updateColorRainbowBtn() {
    const rainBowBtn = document.querySelector('#rainbow');
    if (rainBow) {
        rainBowBtn.style.backgroundColor = '#FF7F00';
    } else {
        rainBowBtn.style.backgroundColor = null;
    }
}

function setRainBow(state) {
    rainBow = state;
    idx = 0;
    updateColorRainbowBtn();
}

function updateAll(event) {
    colorChoosen = event.target.value;
    rainBow = false;

    setRainBow(false);
}

function removeAllChildrenGrid() {
    const container = document.querySelector('.container');

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function updateNumberOfRectangle(event) {
    if (numberChoosen === event.target.value) {
        return;
    }

    numberChoosen = event.target.value;

    const number = document.querySelector('#numberRectangle');
    number.textContent = numberChoosen;

    game();
}

function updateRainbow() {
    setRainBow(!rainBow);
}

function startUp() {
    colorChoosen = defaultColor;
    setColorPicker(defaultColor);
    const colorPicker = document.querySelector('#colorPicker');
    colorPicker.addEventListener('input', updateFirst, false);
    colorPicker.addEventListener('change', updateAll, false);
    
    const input = document.querySelector('input[type=range]');
    input.addEventListener('input', updateNumberOfRectangle);

    const clearBtn = document.querySelector('#clear');
    clearBtn.addEventListener('click', clearBackgroundColor);

    const rainBowBtn = document.querySelector('#rainbow');
    rainBowBtn.addEventListener('click', updateRainbow);
}

game();