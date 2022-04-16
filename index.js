// variables
let resetBtn = document.getElementById("reset");
let square = document.querySelector('.square')
let rgbGuess = document.getElementById("rgbToGuess");
let container = document.querySelector('.container');
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");

// Función para obtener un nro random
let random = (number) => {
    return Math.floor(Math.random() * (number + 1))
}

function randomColor(){
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`    
}


function squareQty(total){
    container.innerHTML = "";
    for(let i = 0; i < total; i++){
        let div = document.createElement('div');
        div.className = 'square';
        div.style.backgroundColor = randomColor();
        container.append(div);
    }
}

function reset(){
    let colorPick = randomColor();
    rgbGuess.innerHTML = colorPick;
    if(easyBtn.classList.contains('selected')){
        squareQty(3);
    }else{
        squareQty(6);
    }
}

window.addEventListener('load', () => {
    rgbGuess.innerHTML = `${randomColor()}`;
    squareQty(6);
    hardBtn.classList.add('selected');
})

resetBtn.addEventListener('click', () => reset());
easyBtn.addEventListener('click', (e) => {
    squareQty(3);
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
})
hardBtn.addEventListener('click', (e) => {
    squareQty(6);
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
})

