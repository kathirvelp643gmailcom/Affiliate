const products = [
    {
        name: 'Men\'s Jacket',
        link: 'https://amzn.to/3F48fIL',
        category: 'men',
    },
    {
        name: 'Women\'s Dress',
        link: 'https://affiliate-link.com/women-dress',
        category: 'women',
    },
    {
        name: 'Kids\' Toy',
        link: 'https://affiliate-link.com/kids-toy',
        category: 'kids',
    },
    {
        name: 'Sports Shoes',
        link: 'https://affiliate-link.com/sports-shoes',
        category: 'sports',
    },
    {
        name: 'Smartphone',
        link: 'https://amzn.to/3QKM8JM',
        category: 'gadgets',
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productLink = document.createElement('a');
        productLink.href = product.link;
        productLink.textContent = product.name;
        productLink.target = "_blank";

        productItem.appendChild(productLink);
        productList.appendChild(productItem);
    });
}

// Display products when the page loads
window.onload = displayProducts;

document.getElementById('categories').addEventListener('change', function() {
    const selectedCategory = this.value;
    const filteredProducts = products.filter(product => product.category === selectedCategory);
    products.length = 0;
    products.push(...filteredProducts);
    displayProducts();
});

// Replace this URL with the URL of your Google Apps Script Web App
const googleSheetsUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRhXdkoHZq2yz_twkaPrwCUC_nCjTprlyCuedQUkv2dEAHNH2gjivxVO9lyFRP4DOx-rKss74smS0Oc/pubhtml';

function fetchProducts() {
    fetch(googleSheetsUrl)
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(error => {
            console.error('Error fetching product data:', error);
        });
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Clear any previous content

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        const productLink = document.createElement('a');
        productLink.href = product.link;
        productLink.textContent = product.name;
        productLink.target = "_blank";

        productItem.appendChild(productLink);
        productList.appendChild(productItem);
    });
}

// Call fetchProducts when the page loads
window.onload = fetchProducts;
  