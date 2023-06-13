// const button = document.querySelectorAll('.style-button');
// button.onclick = function(){
//     alert('AM fost apelat si prin JS o data');
// }

// button.onclick = function(){
//     alert('AM fost apelat si prin JS a doua oara');
// }
// function clickButton(){
//     const p = document.createElement('p');
//     p.textContent = 'Am fost creat la click';
//     p.addEventListener('mouseover', () =>{
//      p.style.backgroundColor='red';
//     });
//     p.addEventListener('mouseout', () =>{
//      p.style.backgroundColor='green';
//     });
//     document.body.appendChild(p);
//  }

// button.addEventListener('click', clickButton);
// button.addEventListener('click', function(){
//     alert('AM fost apelat si prin JS a doua oara');
// });

// const remove = document.getElementById('remove');

// remove.addEventListener('click', function(){
//     button.removeEventListener('click', clickButton);
//     // button.remove();
//  });

// const listLi = document.body.getElementsByTagName('li');
// const ul = document.body.getElementsByTagName('ul');
// const button = document.getElementById('but');
// ul[0].addEventListener('click', () =>{
//     console.log('am executat click-ul ul-ului');
// })
// button.addEventListener('click', (e) =>{
//     e.stopPropagation();
//     // document.body.style.backgroundColor = 'magenta';
//     // e.target.style.backgroundColor = 'green';
//     alert('hey, am apasat butonul');
// })

// function onClick(event){
//     event.stopPropagation();
//     // console.log(event);
//     // console.log(event.target.textContent);
//     event.target.textContent = 'change';
//     event.currentTarget.style.backgroundColor = 'green';
// }

// for(let i = 0; i< listLi.length; i++){
//     listLi[i].addEventListener('click', onClick)
// }

// document.body.addEventListener('mousemove', (e) =>{
//     console.log("X:", e.clientX, "Y", e.clientY);
// })

// const anchor = document.getElementsByTagName('a');
// anchor[0].addEventListener('click', (e) =>{
//     e.preventDefault();
//     // window.location = 'https://facebook.com';
// })

// const button = document.getElementById('getData');
// button.addEventListener('click', (event) =>{
//     const inputNume = document.getElementById('nume');
//     const inputPrenume = document.getElementById('prenume');
//     const inputPassword = document.getElementById('password');
//     if(inputNume.value !== '' && inputPrenume.value !== '' && inputPassword.value !==''){
//         console.log(inputNume.value, ' ', inputPrenume.value, ' ', inputPassword.value);
//     } else {
//         alert('Hey, nu ai introdus toate datele');
//     }
// })

const inputsList = ['nume', 'prenume', 'password', 'termenisiconditii'];


const form = document.getElementById('form');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    // inputurile
    // sub forma de obiect
    // event.target.nume 
    // event.target.prenume
    // event.target[inputsList[0]] <=> event.target.nume 
    const formInputs = event.target;

    // am vrut sa iau toate inputurile care sunt goale
    const emptyInputs = inputsList.filter((key) => {
        // resetam toate span-urile de la show la hide
        formInputs[key].nextElementSibling.classList.replace('show', 'hide');
        
        if(formInputs[key].getAttribute('type') === 'checkbox'){
            // daca checkbox-ul este check-ui valoarea lui checked o sa fie true
            // altfel o sa fie false
            return formInputs['termenisiconditii'].checked === false;
        }
        
        return formInputs[key].value === '';
    });

    console.log(emptyInputs);

    // daca lista mea are cel putin un element
    // atunci trebuie sa ii semnalez utilizatorului ca are elemente care nu au fost completate
    if(emptyInputs.length > 0){

        for(let i = 0; i< emptyInputs.length; i++){
            const key = emptyInputs[i];
            // ma duc pe fratele urmator al inputului si ii setez clasa de pe hide pe show
            //  formInputs[key] === input
            // formInputs[key].nextElementSibling.classList.replace('hide', 'show');
            formInputs[key].parentNode.querySelector('span.hide').classList.replace('hide', 'show');
        }

        return; //return undefined;
    }

    for(let i = 0; i< inputsList.length; i++){
        const key = inputsList[i];
        console.log(formInputs[key].value);
    }
})

const showHideButton = document.getElementById('show_hide');
showHideButton.addEventListener('click', (event) =>{
    const inputPassword = document.getElementById('password');
    if(inputPassword.getAttribute('type') === 'password'){
        inputPassword.setAttribute('type', 'text');
        event.target.textContent = 'hide';
    } else {
        inputPassword.setAttribute('type', 'password');
        event.target.textContent = 'show';
    }
})

// const listUL = document.getElementById('listElements');

// listUL.addEventListener('click', (event) => {
//     console.log(event.target.textContent);
//     console.log(event.currentTarget);
// });