const container = document.querySelector('.container');

const number = 16;

for (let i = 0; i < number; i++) {
    const divRow = document.createElement('div');
    divRow.setAttribute('class', `row ${i}`);

    for (let j = 0; j < number; j++) {
        const div = document.createElement('div');
        div.setAttribute('class', `column ${j}`);

        divRow.appendChild(div);
    }

    container.appendChild(divRow);
}