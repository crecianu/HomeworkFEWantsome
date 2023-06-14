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
    const addToCartButton = document.getElementById('addToCart');
    const removeToCartButton = document.getElementById('removeToCart');
    const reviewList = document.getElementById('review-list');

    for(let i = 0; i< product.reviews.length; i++){
        const li = document.createElement('li');
        li.textContent = product.reviews[i];
        reviewList.appendChild(li);
    }

    addToCartButton.addEventListener('click', (e) => {
        // e.stopPropagation();
        e.preventDefault();
        const cart = document.getElementById('cart');
        const counterString = localStorage.getItem('counter');
        const counterNumber = parseInt(counterString);
        localStorage.setItem('counter', counterNumber + 1);
        cart.textContent = counterNumber + 1;
    });
    removeToCartButton.addEventListener('click', (e) => {
        // e.stopPropagation();
        e.preventDefault();
        const cart = document.getElementById('cart');
        const counterString = localStorage.getItem('counter');
        const counterNumber = parseInt(counterString);

        if(counterNumber - 1 <= 0){
            localStorage.setItem('counter', 0);
            cart.textContent = 0;
        } else{
            localStorage.setItem('counter', counterNumber - 1);
            cart.textContent = counterNumber - 1;
        }
    });

    title.textContent = product.title;
    img.setAttribute('src', product.img);
    img.setAttribute('alt', product.alt);
    price.textContent = `${product.price} ${product.currency}`;
    description.textContent= product.shortDescription;


    const input = document.getElementById('addReview');
    input.addEventListener('keypress', (e) =>{
        if(e.code === 'Enter'){
            const li = document.createElement('li');
            li.textContent = e.target.value;
            reviewList.appendChild(li);

            const productListString = localStorage.getItem('productList');
            const productList = JSON.parse(productListString);
            product.reviews.push(e.target.value);

            const index = productList.findIndex((el) =>{
                return el.id === product.id;
            })
            console.log(index);

            productList[index] = product;

            localStorage.setItem('productList', JSON.stringify(productList));
        }
    })
}

