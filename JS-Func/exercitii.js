// Creati o functie care printeaza “Hello world!” la consola. 
// Modificati-o astfel incat mesaj sa fie configurabil.

function sayHello(mesaj){
    console.log(mesaj);
}

sayHello("Hello World!");
sayHello("Hello Iasi!");


// Creati o functie care calculeaza si returneaza media aritmetica a doua numere.


function mediaAritmetica(a ,b){
    return (a + b) / 2;
}

const rezultat = mediaAritmetica(20, 5);
console.log(rezultat);

// Ridicarea la putere

// function pow(a, b){
//     return a ** b;
// }

const Helper = {
    pow: function (a, b){
        return a ** b;
    }
}

//Object.assign({}, person)
const rezultatPow = Helper.pow(10, 20);

console.log(rezultatPow);


// Creati o functie cu doi parametri. 
// Primul parametru este un sir de caractere, 
// iar cel de-al doilea este un caracter. 
// Numarati de cate ori apare al doilea 
// parametru in string-ul din primul parametru.

function countLetter(inputString, letter){
    // un sir de caractere poate fi privit ca o lista
    // "BBA" => 0 -> B 1 -> B 2 -> A

    let sum = 0;

    for(let i = 0; i< inputString.length; i++){
        if(inputString[i] === letter){
            sum = sum + 1;
        }
    }

    return sum;
}

const count = countLetter("BBAbbCCBBRRTT", "B");

console.log("Count letters", count);