// Track the quantity of items the user wants to add
let  quantity = 1 ;

// Product data array with image, thumbnail, name, and price
let products = [{
    image: 'images/image-product-1.jpg',
    thumbnail: 'images/image-product-1-thumbnail',
    name:'product-1',
    price: '125.00',
    quantity: 0,
}, {
    image: 'images/image-product-2.jpg',
    thumbnail: 'images/image-product-2-thumbnail',
    name:'product-2',
    price: '125.00',
    quantity: 0,
}, {
    image: 'images/image-product-3.jpg',
    thumbnail: 'images/image-product-3-thumbnail',
    name:'product-3',
    price: '125.00',
    quantity: 0,
}, {
    image: 'images/image-product-4.jpg',
    thumbnail: 'images/image-product-4-thumbnail',
    name:'product-4',
    price: '125.00',
}];

// Track the currently selected product and its index
let currentProductIndex = 0;
let currentProduct = products[currentProductIndex];

// DOM references for cart display and counter
let variable = document.querySelector('.cart-variable');
let ProductinCart = 0;

// Cart array to store cart items
let cart = [];
let cartItemId = 0; // Unique ID counter for cart items

// Variables for building cart HTML and thumbnails
let thumbnails = '';
products.forEach((product) => {
    let thumbnailHTML = `<button class="thumbnail-container-${product.name}">
    <img src="./images/image-${product.name}-thumbnail.jpg" alt="" class="thumbnail">
    </button>`;
    thumbnails += thumbnailHTML;
});
document.querySelector('.thumbnail-div-container').innerHTML = thumbnails;


document.querySelector('.thumbnail-container-product-1').addEventListener("click", () => {
    document.querySelector('.thumbnail-container-product-1').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail-container-product-1').style.opacity = '0.7';

    document.querySelector('.thumbnail-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-2').style.opacity = '1';
    document.querySelector('.thumbnail-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-3').style.opacity = '1';
    document.querySelector('.thumbnail-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-4').style.opacity = '1';
});
document.querySelector('.thumbnail-container-product-2').addEventListener("click", () => {
    document.querySelector('.thumbnail-container-product-2').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail-container-product-2').style.opacity = '0.7';
    
    document.querySelector('.thumbnail-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-1').style.opacity = '1';
    document.querySelector('.thumbnail-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-3').style.opacity = '1';
    document.querySelector('.thumbnail-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-4').style.opacity = '1';
});
document.querySelector('.thumbnail-container-product-3').addEventListener("click", () => {
    document.querySelector('.thumbnail-container-product-3').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail-container-product-3').style.opacity = '0.7';

    document.querySelector('.thumbnail-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-1').style.opacity = '1';
    document.querySelector('.thumbnail-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-2').style.opacity = '1';
    document.querySelector('.thumbnail-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-4').style.opacity = '1';
});
document.querySelector('.thumbnail-container-product-4').addEventListener("click", () => {
    document.querySelector('.thumbnail-container-product-4').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail-container-product-4').style.opacity = '0.7';

    document.querySelector('.thumbnail-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-1').style.opacity = '1';
    document.querySelector('.thumbnail-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-3').style.opacity = '1';
    document.querySelector('.thumbnail-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-2').style.opacity = '1';
});