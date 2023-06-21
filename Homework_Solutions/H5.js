/**
 * 
    verificati daca toate elementele unui array sunt numere pare folosind metoda every
    
    folosind forEach, afisati toate elementele unui array
    
    folosind reduce, adunati toate numerele dintr-un array
 * 
 */


const arr = [1, 2, 3, 4, "Reci", {}, [2, 3]];
const allPare = [2, 4, 6, 8];

const checkNumber = (el) => typeof el === 'number';
const checkPare = (el) => el % 2 === 0;
const checkListPare = (list) => list.filter(checkNumber).every(checkPare);

arr.forEach((el) => console.log(el));
// arr.reduce((acc, el) =>{

// }, {});

// console.log(checkListPare(arr));
// console.log(checkListPare(allPare));