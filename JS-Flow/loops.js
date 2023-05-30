
// let i = 0; => START (Initializam contorul de cate ori se va executa bucla);
// i< 10; (punem conditia de oprire)
// i = i + 1 (adudam  la i-ul precedent o unitate)
// i = i + 1  <=> i++

// %

// Afisam Elementele pare de la 0 la 20;

// console.log('Start Code');

// for(let i = 0; i < 20; i++){
//     if(i % 2 === 0){
//         console.log(i,'Numarul este par');
//     } else{
//         console.log(i,'Numarul este impar');
//     }
// }


// Input: array de numere
// ALG: creeam o variabila sum si ii dam valoarea 0 sau valoarea primului element din lista;
// parcurgem lista de numere si la fiecare iteratie adunam la variabila sum, elementul din acea iteratie
// Output: suma numerelor din array

// const numberList = [2, 30, 21, "cip", [20 ,30, 10, 10, 10, 10, 10, 10, 10, 10],  -2 , 10];
// let sum = 0;

// for(let i = 0; i < numberList.length; i++) {
//     // console.log('Suma precedenta', sum);
//     if(typeof numberList[i] === 'number'){
//         sum = sum + numberList[i];
//     }
//     // console.log(numberList[i], "type:", typeof numberList[i])
//     if(typeof numberList[i] === 'object'){
//         const insideList = numberList[i];
//         for(let j = 0; j < insideList.length ;j++){
//             sum = sum + insideList[j];
//         }
//     }
//     // console.log('Suma dupa adunare', sum);
//     // console.log(numberList[i]);
// }

// let stop = false;

// for(let i = 0 ;i < 100 && stop === false; i++){
//     if(i !== 0){
//         if(i % 2 === 0){
//             console.log(i,"->" ,i + 2);
//         }else{
//             console.log(i, "este impar")
//         }
//     }

//     if(i === 50){
//         stop = true;
//     }
// }

// let i = 100;
// let stop = false;

// while(i < 100){
//     // if(i !== 0){
//         if(i % 2 === 0){
//             console.log(i,"->" ,i + 2);
//         }else{
//             console.log(i, "este impar")
//         }
//     // }

//     // if(i === 50){
//     //     stop = true;
//     // }

//     i++;
// }

// let i = 100;

// do{
//     if(i !== 0){
//         if(i % 2 === 0){
//             console.log(i,"->" ,i + 2);
//         }else{
//             console.log(i, "este impar")
//         }
//     }

//     i++;
// }while(i < 100);

// console.log(numberList[0]);
// console.log(numberList[1]);
// console.log(numberList[2]);
// console.log(numberList[3]);
// console.log(numberList[4]);

// console.log('Suma finala este', sum);
// console.log('Finish Code');