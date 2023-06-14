const listLength = 22;
const productList = [];

function generateList() {
    for (let i = 0; i < listLength; i++) {
        const item = {
            id: `item-${i}`,
            title: `Title of product ${i}`,
            shortDescription:'Some text about the product that we want to sell.',
            img: `https://picsum.photos/200/300?random=${i}`,
            alt: `Item ${i}`,
            price: 100 + i * 10,
            currency: 'lei',
            reviews: [],
            stars: 3,
            countForItemsInBag: 0,
        }
        productList.push(item);
    }

    localStorage.setItem('productList', JSON.stringify(productList));
}

generateList();