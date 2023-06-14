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

// console.log('am fost executat imediat');
let counter = 0;

const promise = new Promise((success, rejected)=>{
    console.log('Hey, ma apuc sa calculez datele tale');
    const id = setInterval(() =>{
        console.log('calculez....');
    }, 500);

    setTimeout(() =>{
        clearInterval(id);
        console.log('Hey, am terminat treaba');
        // success({
        //     nume: 'Reci',
        //     prenume: 'Ciprian'
        // });
        rejected({
            status: '404',
            message: 'Hey, s-a intamplat ceva nasol'
        })
    }, 3000);
});

counter = counter + 1;
promise.then((response) =>{
    console.log('Uite ca am primit un raspuns de la BE');
    console.log(response);
})

counter = counter + 2;
promise.catch((error) =>{
    console.log('Sa intamplat ceva');
    console.log(error);
})

console.log(counter);