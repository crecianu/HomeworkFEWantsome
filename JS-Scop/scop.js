// acolade
// const sum = 30;

// scop
// let global = 10;

// scopul local al if-ului
// function test(a ,b){
//    if(sum > 20) {
//         const nume = 'Ciprian';
//         const rez = sum + global;
//         // console.log(rez); // nu da eroare => 40
    
//         for(let i = 0; i< 10; i++) {
//             // let a = i + sum; // da eroare? NU
//             // console.log("a=", a); // loop si afiseaza a-ul
//             // console.log(nume); // da eroare?  NU
//         }
    
//         // console.log(rez); // nu da eroare
//         // console.log(sum); // nu da eroare 
//     }
// }


// const nume = 'Ion'; // Da eroare?

// console.log(a);
// console.log(nume);
// console.log(global);

// var prenume = 12;

var sum = 1000;

function show(){
    let sum = 0;

    function loop(i){
       sum = sum + i;
    }

    // const prenume = 'Ioana';
    for(let i = 0; i< 10; i++) {
        loop(i);
        //var prenume = 'Ciprian';
        // console.log(prenume);
    }

    console.log(sum);
}

//show(); // prenume 1
//show(); // prenume 2
//show();


var students = [
    {id: 42, name: 'Ana'},
    {id: 72, name: 'Suzy'},
    {id: 80, name: 'Mara'},
    {id: 13, name: 'Diana'},
]

function getStudentName(studentId){

    // function doLoop(){
    for(i = 0; i< students.length; i++) {
        if(students[i].id === studentId) {
            return students[i].name;
        }
    }
    // return undefined;
    // }
    
    // const t = doLoop(); //undefined

    // if(t){
        // return t;
    // }

    return null;
}

var studentName = getStudentName(72);

// if(studentName){
    console.log(studentName);
// }




// var x = 42;

// function A(){
//     console.log(x);
// }

// function B(){
//     // x este creat local
//     // si este ignorat x-ul global
//     let x = 100;
//     A();

//     console.log('local X', x);
// }

// B();

// prenume = "Dana";

// console.log(prenume);


