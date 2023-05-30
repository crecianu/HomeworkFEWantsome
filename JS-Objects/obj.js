// console.log('merge');

// Problema

// const nume = 'Recianu';
// const prenume = 'Ciprian';
// const varsta = 28;
// const copii = 0;

// const infoCiprian = ['Recianu', 28 , 0, 'Ciprian'];
// infoCiprian[0] = 'Pop';

// const proprietate = prompt('Ce vrei sa afli?');

let nume = 'Recianu';
let copyNume = nume;

copyNume = 'Popescu';

console.log(nume);
console.log(copyNume);


let buletinCiprian = {
    nume: 'Recianu',
    prenume: 'Ciprian',
    varsta: 28,
    copii: 0,
    case: {
       localitatea: 'Marasesti',
       nr: 10 
    },
    note: [10, 9, 10, 10]
} // 0x1

const copyBuletinCiprian = Object.assign({}, buletinCiprian);
copyBuletinCiprian.case = Object.assign({}, buletinCiprian.case);
// const copyBuletinCiprian = {};
// copyBuletinCiprian.nume = buletinCiprian.nume;
// copyBuletinCiprian.prenume = buletinCiprian.prenume;
// copyBuletinCiprian.varsta = buletinCiprian.varsta;
// copyBuletinCiprian.copii = buletinCiprian.copii;


// buletinCiprian = {} // 0x2;

const arrayCarti = [
    {
        nume:''
    }
]


// console.log("Buletin Ciprian", buletinCiprian);
// console.log("Copie buletin", copyBuletinCiprian);

// copyBuletinCiprian.nume = 'Popescu';
buletinCiprian.nume = 'Popescu';
buletinCiprian.case.localitatea = 'Iasi';
copyBuletinCiprian.note[0] = 5;
copyBuletinCiprian.note[1] = 5;
copyBuletinCiprian.note[2] = 5;

console.log("Buletin Ciprian", buletinCiprian);
console.log("Copie buletin", copyBuletinCiprian);

// console.log(buletinCiprian.proprietate);
// console.log(buletinCiprian[proprietate]);






// const arrayNumere = [1, 2, 3, 4, 5];

// dot notation => buletinCiprian.nume

// console.log(buletinCiprian['varsta'])
// console.log(buletinCiprian.nuExista);

// buletinCiprian.casatorit = 'NO';

// buletinCiprian.note = arrayNumere;

// console.log(buletinCiprian);

// buletinCiprian.nume = 'Pop';
// buletinCiprian['varsta'] = 'Pop';

// console.log(buletinCiprian);

// console.log(buletinCiprian);

// console.log(buletinCiprian.nume);

const buletinIon = {
    nume: 'Popescu',
    prenume: 'Ion',
    varsta: 30,
    // copii: 2,
    // copil1:{
    //     nume: 'Popescu',
    //     prenume: 'Ioana'
    // },
    // copil2:{
    //     nume: 'Popescu',
    //     prenume: 'Camelia'
    // }
    copii: [
        {
            nume: 'Popescu',
            prenume: 'Ioana',
            varsta: 2
        },
        {
            nume: 'Popescu',
            prenume: 'Camelia',
            varsta: 10
        },
    ]
}



// const copiiIon = buletinIon.copii;

// for(let i =0; i < copiiIon.length; i++){
//     console.log(copiiIon[i].nume, copiiIon[i].prenume, copiiIon[i].varsta)
// }


// console.log(buletinIon.copii[0].varsta)

// console.log(buletinIon.copil1.prenume)

// const infoIon = ['Popescu', 'Ion', 30 , 2, ['Popescu', 'Ioana']];

// console.log(infoCiprian[1]);

// const varsta2 = 30;
// const copii2 = 2;
// const copii2Nume = 'Popescu';
// if(nume === 'Ciprian'){
//     console.log('Cip')
// }

// const nume2 = 'Popescu';
// const prenume2 = 'Ion';
// const copii2Prenume = 'Ioana';
