// function A(){
//     return 10 + 20;
// }

// const A = () => 10 + 20;

// Declarat o functie
// function sum(a, b){
    // console.log('apelez o functie');
    // const rezultat = a + b;
    // for(let i = 0; i< 10; i++) {
    //     console.log(i);
    // }

    // const obj =  {
    //     name: 'Ciprian'
    // };

    // if(rezultat > 20){
    //     return 'Da, este mai mare ca 20';
    // }

    // console.log('Executam dupa if');

    // const rez2 = rezultat * 10;


//     return rezultat;
// }

// const apelezFunctia = prompt('Vrei sa apelezi?');

// console.log('Inainte de functie');

//Apelul functiei
// if(apelezFunctia ==='da'){

function sum(a, b){
    const resultat = a + b;
    return resultat;
}

function prod(a, b){
    const resultat = a * b; 
    return resultat;
}

function greet(name){
    const rezultat = sum(10, 20);

    const unString = `Hello ${name}, ce mai faci? Ai o varsta de ${rezultat}`;

    console.log(unString);

    return rezultat;
}

// console.log(prod(10, 20))

// const rez = sum(10, 20);
// const rezProd = prod(rez, 10);
// const rez1 = sum(10, 10);

// }

// console.log("10 + 20 =>", rez);
// console.log("20 * 10 =>", rezProd);
// console.log("10 + 10 =>", rez1);

// const hello = greet("Ciprian");
// const hello2 = greet("Ioana");
// console.log(hello);
// console.log(hello2);


function checkIfListAndSumTheList(list){
    let rez = 0;
    if(checkIfObj(list)){
        for(let j = 0; j < list.length ;j++){
            // sumaNumere = sumaNumere + insideList[j];
            if(checkIfNumber(list[j])){
                rez = sum(rez, list[j]);
            }
        }
    }

    return rez;
}

function checkIfObj(valoare){
    if(typeof valoare === 'object'){
        return true;
    }

    return false;
}

function checkIfNumber(valoare){
    if(typeof valoare === 'number'){
        // sumaNumere = sumaNumere + numberList[i];
        return true;
    }

    return false;
}


const numberList = [2, 30, 21, "cip", [20 ,30, "", 10, 10, 10, 10, 10, 10, 10, 10],  -2 , 10];
let sumaNumere = 0;

for(let i = 0; i < numberList.length; i++) {
    // const rezSum = checkIfNumber(numberList[i]);
    if(checkIfNumber(numberList[i])){
        sumaNumere = sum(sumaNumere, numberList[i]);
    }

    const rezSumList = checkIfListAndSumTheList(numberList[i])
    sumaNumere = sum(sumaNumere, rezSumList);
}

// console.log(sumaNumere); 

// const impartire = function(a, b){
//     const rezultat = a / b;

//     return rezultat;
// }

const impartire = (a, b) => a / b;


// function impartire(a, b){
//     return  a / b;
//     // return undefined;
// }



const rezImpartire = impartire(10, 2);

console.log(rezImpartire);



// const listA = [1, 2, 5 ,6];


// const rezultatFunctie = checkIfListAndSumTheList(listA);
// console.log(rezultatFunctie);