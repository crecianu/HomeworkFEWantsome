const cart = document.getElementById('cart');
const counter = localStorage.getItem('counter');

if(!counter) {
    localStorage.setItem('counter', 0);
} else {
    cart.textContent = counter;
}



