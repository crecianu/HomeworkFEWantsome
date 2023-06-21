// Folosind JS si manipularea DOM-ului, creati o tabla de sah.

const grid = document.getElementsByClassName('grid');

const rows = 8;
const columns = 8;
const colors = ['white', 'black'];

let index1 = 0;
let index2 = 1;
let aux = 0;


const table = [
    0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0,
    0, 1, 0, 1, 0, 1, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0,
]

function rowStartWhite(){
    for(let i = 0; i< columns; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        if(i % 2 === 0){
            box.classList.add('white');
        }else{
            box.classList.add('black');
        }
        grid[0].appendChild(box);
    }
}

function rowStartBlack(){
    for(let i = 0; i< columns; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        if(i % 2 === 0){
            box.classList.add('black');
        }else{
            box.classList.add('white');
        }
        grid[0].appendChild(box);
    }
}

for(let i = 0;i< rows; i++){
    if(i % 2 === 0){
        rowStartWhite();
    } else{
        rowStartBlack();
    }
}

// for(let i = 0; i < rows * columns; i++){
//     const box = document.createElement('div');
//     box.classList.add('box');
//     if(i % rows === 0 && i !== 0){
//         aux = index1;
//         index1 = index2; 
//         index2 = aux;
//     }
//     if(i % 2 === 0){
//         box.classList.add(colors[index1]);
//     } else {
//         box.classList.add(colors[index2]);
//     }

//     grid[0].appendChild(box);
// }