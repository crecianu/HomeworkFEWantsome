// alert("Hey, sunt in fisier extern");
// alert("Hey, sunt in fisier extern 1");
// alert("Hey, sunt in fisier extern 2");
// console.log(2 + 10); // 1
// console.log(50 - 100); // 0
// console.log(10 !== 5);

// console.log(2 == "2");
// console.log(2 === "2");
// console.log(true && true);
// console.log(false || true);
// console.log(!(10 > 5));
// console.log("ciprian" + 3);
// ++
// --
// $variabila1;
// DECLARAT O VARIABILA CU NUMELE variabila
// const nume;
// let nume;
// var nume;

// Atribuire si Initializare
// const nume = "Ciprian";

// undefined , null , 0 , "" sunt valori falsy
// let age = null;
// const age2 = 50;



// const a = 10;
// const b = 20;
// const sum = a + b;
// let comparatie = a > b;
// let comparatieNegata = !comparatie;

// console.log(nume);
// console.log(sum / 10);
// console.log(comparatieNegata);

// // age = 100;
// console.log(age);

// const age = 20;

// const listaDeNumere = ["Ciprian", "Ioana", "Alex", 1, true, false, undefined, age, [1 ,2, 4]];
// const valoareDePeOPozitie = listaDeNumere[8][0];

// console.log(valoareDePeOPozitie);
// console.log(listaDeNumere.length);
// listaDeNumere.push(10);

// console.log(listaDeNumere);

const numeDePersoane = [1, "Ciprian", [20, 30]];

const rezultatAdunare = numeDePersoane[0]+ 10;
console.log(rezultatAdunare);

numeDePersoane[0] = rezultatAdunare;
numeDePersoane[1] = "Ciprian happy codding"; //NO


const nume1 = prompt("Introdu un nume de persoana");
const nume2 = prompt("Introdu alt nume de persoana");
// numeDePersoane.push(nume);
// numeDePersoane.unshift(nume);
// numeDePersoane o sa aibe o lungime de 3 => ca o sa avem access la 0 1 2

// numeDePersoane[10] = nume;



// numeDePersoane.push(nume);
// numeDePersoane.unshift(nume);
// numeDePersoane o sa aibe o lungime de 4 => ca o sa avem access la 0 1 2 3
// numeDePersoane.push(nume1);
// numeDePersoane.push(nume2);

numeDePersoane.push(nume2, nume1);
console.log(numeDePersoane);

// numeDePersoane[3] = 'Mara';

// console.log(numeDePersoane);

const valoareDinArray = numeDePersoane.pop(); // scoate valoare din array
const valoareLuataFaraPop = numeDePersoane[2]; //copie al valori din array

console.log(valoareDinArray);
console.log(numeDePersoane);
console.log(valoareLuataFaraPop);


// let variabilaA = 1 + 10;

// console.log(!variabilaA);