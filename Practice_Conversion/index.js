console.log('merge');

let width = window.innerHeight;
let height = window.innerWidth;

window.addEventListener('resize', () =>{
    height = window.innerHeight;
    width= window.innerWidth;
})

console.log(width);
console.log(height);




// const AllLanguages = {
//     en: {
//         TITLE: 'Title',
//         HEADER: 'Header',
//         BUTTON_SUCCESS: 'Success',
//         BUTTON_EROOR: 'Error',
//     },
//     ro: {
//         TITLE: 'Titlue',
//         HEADER: 'Titlu Principal',
//         BUTTON_SUCCESS: 'Success',
//         BUTTON_EROOR: 'Eroare',
//     }
// }


// buttonChangeLanguage.addEventListener('click',(e) =>{
//     const lang = e.target.textContent;
//     const objText = AllLanguages[lang];

//     //for peste toate elementele si aplicam traducerile

//     //local storage sa pui obiectul pentru language-ul respectiv
//     localStorage.setItem('lang', objText);

// })




function firstResponse(response){
    if(response.ok && response.status === 200){
        return response.json();
    }

    return Promise.reject();
}

function errorResponse(error){
    alert('eroare');
}

fetch('https://api.exchangerate-api.com/v4/latest/EUR').then(firstResponse).then((successResponse) =>{
    //console.log(successResponse.rates);
    const keyList = Object.keys(successResponse.rates);
    // console.log(keyList);

    const fromCurencyDropdown = document.getElementById('from_curency');
    const toCurencyDropdown = document.getElementById('to_curency');

    keyList.forEach((key) =>{
        const optionFrom = document.createElement('option');
        const optionTo = document.createElement('option');
        optionFrom.value=key;
        optionFrom.textContent=key;

        optionTo.value=key;
        optionTo.textContent=key;

        fromCurencyDropdown.appendChild(optionFrom);
        toCurencyDropdown.appendChild(optionTo);
    });
}).catch(errorResponse)


// fromCurency = 'EUR' sau 'AOA' sau 'RON'
// toCurency = 'EUR' sau 'AOA' sau 'RON'
function fetchCurency(fromCurencyInput, toCurencyInput, fromInput){
    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurencyInput.value}`).then(firstResponse).then((successResponse) =>{
        const rates = successResponse.rates;

        const toInput =  document.getElementById('to');

        // am luat informatia data de API
        const fromCurencyValue = rates[fromCurencyInput.value];
        const toCurencyValue = rates[toCurencyInput.value];

        // Am modificat inputurile cu valorile din API
        fromInput.value = fromCurencyValue;
        toInput.value= toCurencyValue;

    }).catch(errorResponse)
}

const convertButton = document.getElementById('convert');
convertButton.addEventListener('click', () =>{
    const fromCurencyDropdown = document.getElementById('from_curency');
    const toCurencyDropdown = document.getElementById('to_curency');

    const fromInput =  document.getElementById('from');

    if(fromCurencyDropdown.value !== "" && toCurencyDropdown.value !== "" && fromInput.value !== ""){
        fetchCurency(fromCurencyDropdown, toCurencyDropdown, fromInput);
    } else{
        alert('Nu au fost introduse toate datele');
    }
})