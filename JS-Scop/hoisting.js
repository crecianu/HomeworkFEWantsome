// function A(){
//     console.log('merge');
// }

// a = 20;

// console.log(a);

// b = "Ciprian";

// c = b;

// console.log(c)


// var a;
// var b;
// var c;

// A();

// function A(){
//     prenume = 'Mara';
//     console.log(prenume);

//     var prenume;
// }


// function diff(num){
//     // var i = num;

//     for(var i = 0; i < 10; i++){
//         ///
//     }

//     //console.log(i);
// }

// diff(42);

function adunare(a, b) {
    return a + b;
}
function scadere(a, b) {
    return a - b;
}
function inmultire(a, b) {
    return a * b;
}
function impartire(a, b) {
    return a / b;
}

// a = 10
// b = 20 
// c = function(a, b) {
//     return (a + b) / 10;
// }
// function calculator(functionToExecute, b, c) {
//     if (typeof b !== 'number' || typeof c !== 'number') {
//         return 'variabila a nu este numar';
//     }

//     let sum = 0;

//     for(let i = 0 ; i < 10; i ++){
//         sum = sum + functionToExecute(b, c);
//     }
   
//     console.log(sum);
// }

// const divideByTen = function (a, b) {
//     return (a + b) / 10;
// }
// const a = 10;
// const b = 20;
// console.log(calculator(10, 20, adunare));
// console.log(calculator(10, 20, scadere));
// calculator(divideByTen, a, b);


// C()

// var B = function(){
//     console.log('nu merge');
// }

// var C = () => {
//     console.log('nu merge 2');
// }


// function loop(listToLoop, conditionFunction){
//     const filterList = [];

//     for(let i = 0; i< listToLoop.length; i++){
//         if(conditionFunction(list[i], i)){
//             filterList.push(list[i]);
//         }
//     }

//     return filterList;
// }


function greaterThenTen(value){
    if(value > 10){
        return true;
    }

    return false;
}

function greaterAndEqualThenFifty(value){
    if(value >= 50){
        return true;
    }

    return false;
}

function greaterThenFifty(value){
    if(value > 50){
        return true;
    }

    return false;
}

function isPar(value){
    if(value % 2 === 0){
        return true;
    }

    return false;
}

// const list = [1, 30, 4, 50, -5, 100];

// const filterByTen = loop(list, greaterThenTen);
// const filterByFifty = loop(list, greaterAndEqualThenFifty);
// const pare = loop(list, isPar);


// const filterByTen = list.filter(greaterThenTen)
// const filterByFifty = list.filter(greaterThenFifty)
// const pare = list.filter(isPar)
// const impare = list.filter(function(value){
   
// })

// for(let i = 0; i< list.length; i++){
//     if(list[i] > 10){
//         filterList.push(list[i]);
//     }
// }

// for(let i = 0; i< list.length; i++){
//     if(list[i] > 30){
//         filterList2.push(list[i]);
//     }
// }

// console.log(filterByTen);
// console.log(list);
// console.log(filterByTen);
// console.log(filterByFifty);
// console.log(impare);


// MAP
function customMap(listToLoop, functia){
    const returnList = [];

    for(let i = 0; i< listToLoop.length; i++){
        const rezultat = functia(listToLoop[i], i);
        returnList.push(rezultat);
    }

    return returnList;
}

const listDeVarste = [1, 30, 4, 50, -5, 100];



function imparte2LaFiecareValoare(value){
    return value / 2;
}

function trasformToObj(value){
    return value;
}


const addedTwo = listDeVarste.map(function adauga2LaFiecareValoare(value, index){
    console.log(index);
    return value + 2;
});
// const impartireLaDoi = list.map(imparte2LaFiecareValoare);
// const transform = customMap(listDeVarste, adauga2LaFiecareValoare);
// console.log(addedTwo);
// console.log(impartireLaDoi);
console.log(addedTwo);