// console.log(document.body.childNodes);
// console.log(document.body.childNodes[3].nodeName);

// returneaza elementele sub forma de array
// const element = document.body.getElementsByTagName('p');
// const elementDiv = document.body.getElementsByTagName('div');
// const elementUl = document.body.getElementsByTagName('ul');

// const elementsByClass = elementUl[0].getElementsByClassName('A');
// const elementsByClass = document.body.getElementsByClassName('A');

// console.log(elementsByClass);

// for(let i = 0; i < elementsByClass.length; i++){
//     // textContent
//     // innerHTML
//     // innerText
//     // console.log(elementsByClass[i].textContent);
//     // elementsByClass[i].textContent = "Altceva"
//     elementsByClass[i].style = 'color: green; font-size: 30px';
// }
// console.log(element[0].childNodes);
// console.log(elementDiv[0].childNodes);
// console.log(elementUl[0].childNodes);

// const element = document.getElementById('header');
// console.log(element.innerText);


// getElementById => putem sa-l punem doar pe document
// getElementsByClassName
// getElementsByTagName
// querySelectorAll
// querySelector

// const elementsByClass = document.body.getElementsByClassName('A B:first-child');
// const elementsByClass = document.querySelectorAll('ul.special > li:not(:last-of-type)');
// console.log(elementsByClass);
// for(let i = 0; i < elementsByClass.length; i++){
    // textContent
    // innerHTML
    // innerText
    // console.log(elementsByClass[i].textContent);
    // console.log(elementsByClass[i].innerText);
    // elementsByClass[i].textContent = "Altceva"
    // elementsByClass[i].style = 'color: red';
    // elementsByClass[i].style.color = 'red';
    // elementsByClass[i].style.backgroundColor = 'green';
// }

// console.log(document.body.parentNode);
// console.log(document.head.parentNode);

// const element = document.body.getElementsByClassName('hey');
// console.log(element[0].parentNode.parentNode);
// element[0].parentNode.style.backgroundColor='grey';


// console.log(ul);
// console.log(ul[0].children);
// console.log(ul[0].childNodes);

// ul[0].children[0].style.color='red';
// console.log(ul[0].children[0].parentNode)
// ul[0].childNodes[0].remove();

// console.log(ul[0].childNodes);
// console.log(ul[0].firstChild);
// console.log(ul[0].lastChild);

// console.log(ul[0].children);
// console.log(ul[0].firstElementChild.nextElementSibling);
// console.log(ul[0].lastElementChild);

// ul[0].style.color='red';
// const div = document.body.getElementsByClassName('special');

// console.log(div[0].children);

// div[0].children[1].nextElementSibling.style.color='red';
// div[0].children[1].previousElementSibling.style.color='green';

// console.log(document.getElementById('item1').childNodes[0]); //Selectez text-ul din interiorul paragrafului

const ul = document.querySelector('ul');

for(let i = 0; i< 10; i++){
    const li = document.createElement('li');
    li.textContent = `Hey uite ca am fost adaugat prin js ${i}` ;
    li.style.color='green';
    ul.appendChild(li);
}

// console.log(document.querySelectorAll('li'));
// document.querySelectorAll('li')[0].style.backgroundColor = 'purple';


// ul.children[3].remove();

console.log(ul);
// console.log(li);
