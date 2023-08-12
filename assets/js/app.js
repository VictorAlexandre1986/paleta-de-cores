const generateButton = document.querySelector('#btn_gerador');
const colorsDiv = document.querySelector('.colors');

function generateColors(){
    colorsDiv.innerHTML = ""

        for(let div = 0; div < 6; div++){
            const color = generateRandomColor();
            const colorDiv = document.createElement('div');
            colorDiv.style.background=color;
            const colorName = document.createElement('p');
            colorName.textContent=color;
            colorName.style.color=color;
            colorDiv.appendChild(colorName);
            colorsDiv.appendChild(colorDiv);
        }
}

function generateRandomColor(){
    const letters = '0123456789abcdef';
    let color ='#';

    for(let letter=0; letter<6; letter++){
        color +=letters[Math.floor((Math.random() * 16))];
    }

    return color
}


generateButton.addEventListener('click', generateColors)
