// console.log('merge');
// let counter = 0;
// const button = document.getElementById('stop');

// setTimeout(() =>{
//     console.log('am fost executat dupa o secunda');
// }, 5000);


// const idInterval = setInterval(() =>{
//     const seconds = document.getElementById('seconds');

//     counter = counter + 1;
//     if(counter !== 60){
//         if(counter < 10){
//             seconds.textContent = '0' + counter;
//         } else{
//             seconds.textContent = counter;
//         }
//     }else{
//         counter = 0;
//     }
// }, 1000);

// button.addEventListener('click', () =>{
//     clearInterval(idInterval);
// })

console.log('am fost executat imediat');
let counter = 0;

// function simulateBE(success, rejected){
//     console.log('Hey, ma apuc sa calculez datele tale');
//     const id = setInterval(() =>{
//         console.log('calculez....');
//     }, 500);

//     setTimeout(() => {
//         clearInterval(id);
//         console.log('Hey, am terminat treaba');
//         // simulam ca am trimis de la BE catre FE un obiect
//         // cu nume si prenume
//         success({
//             nume: 'Reci',
//             prenume: 'Ciprian',
//             varsta: 27
//         });
//         // rejected({
//         //     status: '500',
//         //     message: 'Hey, s-a intamplat ceva nasol'
//         // })
//     }, 3000);
// }

// const promise = new Promise(simulateBE);
const promise = fetch('./users.json');
console.log(promise);

// counter = counter + 1;
promise.then((response) => {
    console.log(response);
    if(response.ok && response.status === 200){
        return response.json();
    }

    // alert('Am primit o eroare');
    return Promise.reject({
        message: 'Am primit o eroare'
    });
}).then((response) =>{
    // Pot sa fac o logica in functie de raspuns sa afisez un mesaj diferit

    console.log('Uite ca am primit un raspuns de la BE');
    console.log(response);

    let returnObj;

    if(response.length > 0){
        returnObj = {
            message: 'Am luat un singur utilizator' + " " + response[2].nume + " " + response[2].prenume
        }
    } else{
        if(response.varsta > 25){
            returnObj = {
                message: 'Uite ca am primit de la BE:' + response.nume + " " + response.prenume + " pot sa beau"
            }
        } else{
            returnObj = {
                message: 'Uite ca am primit de la BE:' + response.nume + " " + response.prenume + " nu pot sa beau"
            }
        }
    
    }

    
    return returnObj;

}).then((resp2)=>{
    const p = document.createElement('p');
    p.textContent = resp2.message;
    document.body.appendChild(p);

    return 'Am terminat';
}).then((finish) =>{
    console.log(finish);
}).catch((error) =>{
    console.log(error);
    const p = document.createElement('p');
    p.textContent = error.message;
    document.body.appendChild(p);
});

for(let i = 0;i<10; i++) {
    const p = document.createElement('p');
    p.textContent = 'Item '+ i;
    document.body.appendChild(p);
}

// counter = counter + 2;

// console.log(counter);