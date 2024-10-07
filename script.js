const productList = document.getElementById('product-list');
/*const products = [
    { id: 1, name: 'Product 1', price: 20, image: 'https://tse3.mm.bing.net/th?id=OIP.ZUktNr4TbMEsqzJ62haeSgHaHa&pid=Api&P=0&h=180' },
    { id: 2, name: 'Product 2', price: 30, image: 'https://tse4.mm.bing.net/th?id=OIP.T3tbPj9n4-z5QSZDQH2tiQHaKn&pid=Api&P=0&h=180' },
    { id: 3, name: 'Product 3', price: 80, image: 'https://tse4.mm.bing.net/th?id=OIP.uk4HvdXE1uEQ9dw4z0QNtQHaHa&pid=Api&P=0&h=180' },
    { id: 4, name: 'Product 4', price: 20, image: 'https://tse4.mm.bing.net/th?id=OIP.0aWSUxcB7gTiXNu_nFOWHgHaHa&pid=Api&P=0&h=18' },
    { id: 5, name: 'Product 5', price: 80, image: 'https://tse2.mm.bing.net/th?id=OIP.q0oBWF6NqA2wA0xl2ImevQHaHW&pid=Api&P=0&h=180' },
    { id: 6, name: 'Product 6', price: 100, image: 'https://tse1.mm.bing.net/th?id=OIP.WNK1ovuXmgOS1FeQAZDmiQAAAA&pid=Api&P=0&h=180' },
    { id: 7, name: 'Product 7', price: 500, image: 'https://tse1.mm.bing.net/th?id=OIP.m52Dkey70zMu1lZqxbiwEQHaHa&pid=Api&P=0&h=180' }  
];
*/
function displayProducts(products) {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
    });
}
function fetchProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => console.error('Error fetching products:', error));
}
const cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.name} has been added to your cart.`);
    }
}
fetchProducts();

 
