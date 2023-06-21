/*
    calculati media aritmetica a unui array de numere;

    avand un array cu numere, valori boolene si stringuri calculati suma tuturor numerelor. Ignorati toate valorile care nu sunt de tip numar;

    BONUS: creati un program care afiseaza primele 20 numere din sirul lui Fibonacci;

* */


const arr = [1, 40, 200, 'Reci', {}, [], 55];
let sum = 0;
let contor = 0;
let newArr = []

for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
        contor = contor + 1;
        newArr.push(arr[i]);
        sum = sum +  arr[i];
    }
}

console.log(sum / newArr.length);
console.log(sum / contor);