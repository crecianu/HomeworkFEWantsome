// const form = document.getElementById('signUp');
// const inputList = document.querySelectorAll('input');

// for(let i = 0; i< inputList.length; i++){
//     const inputName = inputList[i].getAttribute('name');
//     const localStorageValue = localStorage.getItem(inputName);
//     inputList[i].value = localStorageValue;
// }

// const objFromLocalStorage = localStorage.getItem('objValue');
// console.log(typeof objFromLocalStorage);
// console.log(objFromLocalStorage.nume);


// const convertObj = JSON.parse(objFromLocalStorage);
// console.log(typeof convertObj);
// console.log(convertObj.nume);


// function getSpanElement(element){
//     return element.parentNode.querySelector('span');
// }

// // function hideShowError(input,errorMessage, conditionFunction){
// //     const spanElement = getSpanElement(input);
// //     if(conditionFunction(input.value)){
// //         spanElement.classList.replace('hide', 'show');
// //     } else{
// //         spanElement.classList.replace('show', 'hide');
// //     }

// //     spanElement.textContent = errorMessage;
// // }

// function hideShowErrorEmptyString(input){
//     const spanElement = getSpanElement(input);
//     if(input.value === ''){
//         spanElement.classList.replace('hide', 'show');
//     } else{
//         spanElement.classList.replace('show', 'hide');
//     }

//     spanElement.textContent = 'Trebuie sa fie completat';
// }

// function fourCharacters(input){
//     const spanElement = getSpanElement(input);

//     if(input.value.length < 4){
//         spanElement.classList.replace('hide', 'show');
//     } else{
//         spanElement.classList.replace('show', 'hide');
//     }

//     spanElement.textContent = 'Trebuie sa contina minim 4 caractere';
// }

// function checkPassword(input){
//     const spanElement = getSpanElement(input);

//     // parolamea
//     // P !== p

//     // Parolamea
//     // P !== P


//     // input.value[0].toUpperCase() !== input.value[0]
//     // Mai sus verific daca prima litera este litera mare

//     if(input.value.length < 8 || input.value[0].toUpperCase() !== input.value[0]){
//         spanElement.classList.replace('hide', 'show');
//     } else{
//         spanElement.classList.replace('show', 'hide');
//     }

//     spanElement.textContent = 'parola este gresita';
// }

// // function greaterThanFour(value){
// //     return value.length < 4;
// // }

// // function emptyString(value){
// //     return value === ''; 
// // }

// for(let i = 0; i < inputList.length; i++){
//     inputList[i].addEventListener('blur', (event) =>{
//         hideShowErrorEmptyString(event.target);

//         if(event.target.getAttribute('name') === 'userName' && event.target.value !== ''){
//             // hideShowError(event.target,'Trebuie sa contina minim 4 caractere', greaterThanFour)
//             fourCharacters(event.target)
//         }
//         if(event.target.getAttribute('name') === 'password' && event.target.value !== ''){
//             checkPassword(event.target);
//         }
        
//     })
// }

// form.addEventListener('submit', (event) =>{
//     event.preventDefault();

//     hideShowErrorEmptyString(event.target.userName);
//     hideShowErrorEmptyString(event.target.password);
//     hideShowErrorEmptyString(event.target.confirmPassword);

//     const spanElement = getSpanElement(event.target.confirmPassword);
//     if(event.target.password.value === event.target.confirmPassword.value){
//         spanElement.classList.replace('show', 'hide');
//     } else{
//         spanElement.classList.replace('hide', 'show');
//     }

//     spanElement.textContent = 'Parolele nu sunt egale';

//     // console.log(event.target.userName.value);
//     // console.log(event.target.password.value);
//     // console.log(event.target.confirmPassword.value);

//     const persoana = {
//         nume: 'Ciprian',
//         prenume: 'Ciprian',
//         varsta: 10
//     }

//     const array = [{}, 2 ,3];

//     localStorage.setItem('userName', event.target.userName.value);
//     localStorage.setItem('password', event.target.password.value);
//     localStorage.setItem('confirmPassword', event.target.confirmPassword.value);
//     localStorage.setItem('objValue', JSON.stringify(persoana));
//     localStorage.setItem('arrayValue', JSON.stringify(array));
// });

// const buttonAdd = document.getElementById('add-local');
// const buttonShow = document.getElementById('show-local');

// buttonAdd.addEventListener('click', () =>{
//     const nume = prompt('Introdu numele');
//     // localStorage.setItem('numele_meu', nume);
//     sessionStorage.setItem('numele_meu', nume);
// });

// buttonShow.addEventListener('click', () =>{
//     const nume = sessionStorage.getItem('numele_meu');
//     const p = document.createElement('p');
//     p.textContent = nume;

//     document.body.appendChild(p);
// })

// console.log(localStorage.getItem('nume'));


// PRACTICE LOCAL STORAGE

const produse = [
    {
        titlu:'Masini',
        cantitate: 200
    },
    {
        titlu:'Flori',
        cantitate: 20
    },
    {
        titlu: 'Telefoane',
        cantitate: 4
    }
]

localStorage.setItem('products', JSON.stringify(produse));
const localStorageItemString = localStorage.getItem('products');
const localStorageItemObj = JSON.parse(localStorageItemString);
console.log(localStorageItemObj);
localStorageItemObj.push({
    titlu:'Mese',
    cantitate: 20
});
localStorage.setItem('products', JSON.stringify(localStorageItemObj));