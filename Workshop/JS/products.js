const ITEMS_PER_PAGE = 8;
// let counter = 0;
const productListString = localStorage.getItem('productList');

if (!productListString) {
    alert('Ceva s-a intamplat, trebuie vazut in localStorage');
}

const productList = JSON.parse(productListString);


function createImg(imgUrl, alt) {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', imgUrl);
    imgElement.setAttribute('alt', alt);
    return imgElement;
}

function createCustomElement(element, text, elementClass) {
    const newElement = document.createElement(element);
    newElement.textContent = text;
    if (elementClass) {
        newElement.classList.add(elementClass);
    }

    return newElement;
}

function createCardElement(id, imgUrl, imgAlt, productTitle, productPrice, currency, productDescription) {
    const card = document.createElement('div');
    const anchor = document.createElement('a');
    const container = document.createElement('div');
    card.classList.add('card');
    anchor.setAttribute('href', `/Workshop/product.html?productId=${id}`);

    const img = createImg(imgUrl, imgAlt);
    const title = createCustomElement('h3', productTitle);
    // price + " " + currency
    const price = createCustomElement('p', `${productPrice} ${currency}`, 'price');
    const description = createCustomElement('p', productDescription);
    const addToCart = createCustomElement('button', 'Add to Cart');

    addToCart.classList.add('addToCart');
    addToCart.addEventListener('click', (e) => {
        // e.stopPropagation();
        e.preventDefault();
        const cart = document.getElementById('cart');
        // counter = counter + 1;
        const counterString = localStorage.getItem('counter');
        const counterNumber = parseInt(counterString);
        localStorage.setItem('counter', counterNumber + 1);
        cart.textContent = counterNumber + 1;
    })
    
    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(price);
    container.appendChild(description);
    container.appendChild(addToCart);
    anchor.appendChild(container);
    card.appendChild(anchor);

    return card;
}


function generateList(list, start, end){
    const productListElement = document.querySelector('.product-list');
    const pagination = document.querySelector('.pagination');

    productListElement.innerHTML = '';
    pagination.innerHTML = '';

    if(list.length <=0){
        productListElement.innerHTML = '<p>Nu avem iteme de afisat</p>';
    }


    // const productListElement = document.getElementsByClassName('product-list');
    
   

    // guard
    if (!productListElement) {
        alert('S-a intamplat ceva gresit');
        return;
    }

    for (let i = start; i < end && i < list.length; i++) {
        const product = list[i];
        const cardElement = createCardElement(product.id, product.img, product.alt, product.title, product.price, product.currency, product.shortDescription);
        productListElement.appendChild(cardElement);
    }  

    const generatedOl = generatePagination(list);
    pagination.appendChild(generatedOl);
}

// 45 => 45 / 8 => 6
// 20 => 20 / 8 => 3

// 1 2 3 4 5 6
// 1 2 3

// ai imparti lungimea listei la o constanta (8) 
// daca are rest, mai adaug cu o pagina in plus
// <ol>
//    <li>1</li>
//    <div>2</div>
//    <div>4</div>
//    <div>5</div>
// </ol>

function generatePagination(list){
    let page = Math.floor(list.length / ITEMS_PER_PAGE);
    const pageRest = list.length % ITEMS_PER_PAGE;
    if(pageRest > 0){
        page = page + 1;
    }
    
    const ol = document.createElement('ol');
    for(let i = 1; i<= page; i++){
        const li = document.createElement('li');
        li.textContent = i;
        li.addEventListener('click', (event) =>{
            // for(let i = 0; i< page ;i++){
            //     if(event.target.textContent === i){
            //         const count = parseInt(event.target.textContent);

            //         // 1 => 0 -> 3 => 0 , 4
            //         // 2 => 4 -> 7 => 2 , 6
            //         // 3 => 8 -> 11
            //         // 4 => 12 -> 15
            //         // const start = ITEMS_PER_PAGE * 0;
            //         // const end = ITEMS_PER_PAGE * 1;
                    
            //         const start = ITEMS_PER_PAGE * i;
            //         const end = (ITEMS_PER_PAGE * count) - 1;
            //         generateList(start, end);
            //     }
            // }

            // 1
            // 2
            // 3
            // 4
            const count = parseInt(event.target.textContent);

            const start = ITEMS_PER_PAGE * (count - 1);
            const end = ITEMS_PER_PAGE * count;
            generateList(list, start, end);
        });
        ol.appendChild(li);
    }

    return ol;
}

function searchByInput(){
    const input = document.getElementById('search');
    // converteste toate caracterele mari in caractere mici
    // ProducT => product
    const searchText = input.value.toLowerCase();

    // if product tile 

    const filterList = productList.filter((product) =>{
        const lowerLetters = product.title.toLowerCase();
        const price = product.price + '';

        return lowerLetters.includes(searchText) || price.includes(searchText);
    });

    generateList(filterList, 0, ITEMS_PER_PAGE);
}

const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', () =>{
    searchByInput()
})

generateList(productList, 0, ITEMS_PER_PAGE);

const input = document.getElementById('search');
input.addEventListener('keypress', (e) =>{
    if(e.code === 'Enter'){
        searchByInput()
    }
})
