// variables
let resetBtn = document.getElementById("reset");
let rgbGuess = document.getElementById("rgbToGuess");
let container = document.querySelector('.container');
let easyBtn = document.getElementById("easyBtn");
let hardBtn = document.getElementById("hardBtn");
let h3mess = document.querySelector(".message")
let wrapperHeader = document.querySelector(".wrapperHead")
let bodyColor = "hsl(360, 35%, 0%)";

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
    resetBtn.innerText = "New Colors";
    h3mess.innerText = "";
    wrapperHeader.style.backgroundColor = "hsl(75, 100%, 35%)"
    easyBtn.classList.contains('selected') ? squareQty(3) : null;
    hardBtn.classList.contains('selected') ? squareQty(6) : null;
    clickSquare()
}

window.addEventListener('load', () => {
    squareQty(6);
    hardBtn.classList.add('selected');
    clickSquare()
})

resetBtn.addEventListener('click', () => reset());
easyBtn.addEventListener('click', (e) => {
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    reset();
    
})
hardBtn.addEventListener('click', (e) => {
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    reset();
})


function rtaCorrecta(){
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = rgbGuess.textContent;
    });
    resetBtn.innerText = "Play Again"    ;
    wrapperHeader.style.backgroundColor = rgbGuess.textContent;
}

function clickSquare(){
let squares = document.querySelectorAll('.square');
let randomIndex = (Math.floor(Math.random() * (squares.length)))
rgbGuess.innerHTML = squares[randomIndex].style.backgroundColor;

    squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            if(e.target.style.backgroundColor == rgbGuess.textContent){
                h3mess.innerHTML = "Acertaste, excelente!"
                rtaCorrecta();
            }else{
                h3mess.innerHTML = "Prueba de vuelta!"
                e.target.style.backgroundColor = bodyColor;
                e.target.style.border = "none";
            }
            
        })
    })

}

