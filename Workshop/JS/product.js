// pseudocod

// 1. Luam id-ul din url
// 2. Parcurgem lista si cautam id-ul din url
// 3. Luam din produsul identificat prin id, toate proprietatile de care avem nevoie


// returneaza o lista de elemente
// daca nu exista id-ul cautat, se returneaza []
// const product = productList.filter(function(){
//     return element.id === parms.productId
// });
// const product = findProduct();
// let product;

// for(let product of productList){
//     if(product === parms.productId){
//         return product;
//     }
// }

// function findProduct(){
//     for(let i = 0; product.length; i++){
//         if(product[i].id === parms.productId){
//             return product[i];
//         }
//     }
// }

// for(let i = 0; product.length; i++){
//     if(product[i].id === parms.productId){
//         product =  product[i];
//     }
// }

const searchParams = new URLSearchParams(window.location.search);
const parms = Object.fromEntries(searchParams.entries());

console.log(parms.productId);

const productListString = localStorage.getItem('productList');

if (!productListString) {
    alert('Ceva s-a intamplat, trebuie vazut in localStorage');
}

const productList = JSON.parse(productListString);


// find returneaza un singur element
// daca nu exista id-ul cautat, se returneaza undefined
const product = productList.find(function(element){
    return element.id === parms.productId
});

if (!product) {
    alert('Produsul nu a fost gasit');
} else{
    const title = document.querySelector('.title');
    const img = document.querySelector('.image-container img');
    const price = document.querySelector('.price');
    const description = document.querySelector('.product-informations');
    
    title.textContent = product.title;
    img.setAttribute('src', product.img);
    img.setAttribute('alt', product.alt);
    price.textContent = `${product.price} ${product.currency}`;
    description.textContent= product.shortDescription;
}

