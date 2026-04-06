// Track the quantity of items the user wants to add
let  quantity = 1 ;

// Product data array with image, thumbnail, name, and price
let products = [{
    image: 'images/image-product-1.jpg',
    thumbnail: 'images/image-product-1-thumbnail',
    name:'product-1',
    price: '125.00',
}, {
    image: 'images/image-product-2.jpg',
    thumbnail: 'images/image-product-2-thumbnail',
    name:'product-2',
    price: '125.00',
}, {
    image: 'images/image-product-3.jpg',
    thumbnail: 'images/image-product-3-thumbnail',
    name:'product-3',
    price: '125.00',
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
let thumbnails2 = '';
let cartProductsHTML = '';

const forwardButton2 = document.querySelector('.forward-btn2');
const previousButton2 = document.querySelector('.previous-btn2');
const CancelLightMode = document.querySelector('.close-light-mode');
const lightMode = document.querySelector('.light-mode');
const forwardButton = document.querySelector('.forward-btn');
const previousButton = document.querySelector('.previous-btn');
const navLinks2 = document.querySelector('.nav-links2');
// Load cart from localStorage on page load
function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedCartCount = localStorage.getItem('ProductinCart');

    if (savedCart) {
        cart = JSON.parse(savedCart);
        ProductinCart = parseInt(savedCartCount, 10) || cart.reduce((sum, item) => sum + item.quantity, 0);
        cart.forEach((item) => {
            if (!item.id) {
                cartItemId++;
                item.id = cartItemId;
            } else if (item.id > cartItemId) {
                cartItemId = item.id;
            }
        });

        updateCartCount();
        renderCartItems();
    }
}

// Save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('ProductinCart', ProductinCart);
}

function updateCartCount() {
    variable.innerText = ProductinCart;
}

function renderCartItems() {
    let cartDisplayContainer = document.querySelector('.cart-display-container');
    cartDisplayContainer.innerHTML = '<div class="cart-declare">Cart</div>';

    if (cart.length === 0) {
        cartDisplayContainer.insertAdjacentHTML('beforeend', `
            <div class="cart-empty">Your Cart is empty</div>
            <div class="checkout-button" style="display: none;">Checkout</div>
        `);
        return;
    }

    cart.forEach((item) => {
        if (!item.id) {
            cartItemId++;
            item.id = cartItemId;
        } else if (item.id > cartItemId) {
            cartItemId = item.id;
        }

        const itemTotal = (parseFloat(item.price) * item.quantity).toFixed(2);
        const cartHTML = `
            <div class="cart-display" data-id="${item.id}" data-quantity="${item.quantity}">
                <div class="cart-content">
                    <div class="cart-image">
                        <img src="${item.image}" alt="" class="cart-image">
                    </div>
                    <div class="product-order">
                        <span>${item.name}</span><br>
                        <span>$${item.price} x ${item.quantity}</span>
                        <span><strong>$${itemTotal}</strong></span>
                        <span><img src="./images/icon-delete.svg" alt="" class="delete"></span>
                    </div>
                </div>
            </div>`;
        cartDisplayContainer.insertAdjacentHTML('beforeend', cartHTML);
    });

    cartDisplayContainer.insertAdjacentHTML('beforeend', `
        <div class="checkout-button">Checkout</div>
    `);

    cartDisplayContainer.querySelectorAll('.delete').forEach((deleteButton) => {
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            const cartItem = e.currentTarget.closest('.cart-display');
            const itemId = parseInt(cartItem.dataset.id, 10);
            const itemIndex = cart.findIndex((cartItem) => cartItem.id === itemId);
            if (itemIndex > -1) {
                cart.splice(itemIndex, 1);
                ProductinCart -= 1;
                updateCartCount();
                saveCartToLocalStorage();
                renderCartItems();
            }
        });
    });
}

// Clear cart from localStorage
function clearCartFromLocalStorage() {
    localStorage.removeItem('cart');
    localStorage.removeItem('ProductinCart');
}

// Initialize thumbnail container and display first product image
document.querySelector('.thumbnail-div-container').innerHTML = thumbnails;
document.querySelector('.thumbnail-div-container2').innerHTML = thumbnails2;

let display = document.querySelector('.large-image');
let display2 = document.querySelector('.large-image2');
display.src = `./${currentProduct.image}`;
display2.src = `./${currentProduct.image}`;

// Cart starts empty on page load (commented out localStorage loading)
loadCartFromLocalStorage();

// Cart button toggle functionality
let cartButton = document.querySelector('.cart-button');
let cartDisplayContainer = document.querySelector('.cart-display-container');
cartButton.addEventListener('click', () => {
    cartDisplayContainer.classList.toggle('active');
});

// Close cart when clicking outside of it
document.addEventListener('click', (e) => {
    if (!cartButton.contains(e.target) && !cartDisplayContainer.contains(e.target)) {
        cartDisplayContainer.classList.remove('active');
    }
});

// Increment quantity when + button is clicked
document.querySelector('.js-add-button').addEventListener("click", () => {
    quantity += 1;
    document.querySelector('.quantity-view').innerText = quantity;
});

// Decrement quantity when - button is clicked (minimum is 1)
document.querySelector('.js-minus-button').addEventListener("click", () => {
    if (quantity === 1) {
        return
    } else {
        quantity = quantity - 1;
    document.querySelector('.quantity-view').innerText = quantity;
    }
});

// Generate thumbnail buttons for each product
products.forEach((product) => {
    let thumbnailHTML = `<button class="thumbnail-container-${product.name}">
    <img src="./images/image-${product.name}-thumbnail.jpg" alt="" class="thumbnail" data-product-name="${product.name}">
    </button>`;
    let thumbnailHTML2 = `<button class="thumbnail2-container-${product.name}">
    <img src="./images/image-${product.name}-thumbnail.jpg" alt="" class="thumbnail2" data-product-name="${product.name}">
    </button>`;
    thumbnails += thumbnailHTML;
    thumbnails2 += thumbnailHTML2;
});
document.querySelector('.thumbnail-div-container').innerHTML = thumbnails;
document.querySelector('.thumbnail-div-container2').innerHTML = thumbnails2;

// Handle thumbnail clicks to switch to different products
function imageChange1() {
    currentProductIndex = 0;
    currentProduct = products[currentProductIndex];
    display.src = `./${currentProduct.image}`;
    display2.src = `./${currentProduct.image}`;
    document.querySelector('.thumbnail2-container-product-1').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail2-container-product-1').style.opacity = '0.7';
    document.querySelector('.thumbnail-container-product-1').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail-container-product-1').style.opacity = '0.7';

    document.querySelector('.thumbnail-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-2').style.opacity = '';
    document.querySelector('.thumbnail-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-3').style.opacity = '';
    document.querySelector('.thumbnail-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-4').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-2').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-3').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-4').style.opacity = '';
}
function imageChange2() {
    currentProductIndex = 1;
    currentProduct = products[currentProductIndex];
    display.src = `./${currentProduct.image}`;
    display2.src = `./${currentProduct.image}`;
    document.querySelector('.thumbnail2-container-product-2').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail2-container-product-2').style.opacity = '0.7';
    document.querySelector('.thumbnail-container-product-2').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail-container-product-2').style.opacity = '0.7';

    document.querySelector('.thumbnail2-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-1').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-3').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-4').style.opacity = '';
    document.querySelector('.thumbnail-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-1').style.opacity = '';
    document.querySelector('.thumbnail-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-3').style.opacity = '';
    document.querySelector('.thumbnail-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-4').style.opacity = '';
}
function imageChange3() {
    currentProductIndex = 2;
    currentProduct = products[currentProductIndex];
    display.src = `./${currentProduct.image}`;
    display2.src = `./${currentProduct.image}`;
    document.querySelector('.thumbnail2-container-product-3').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail2-container-product-3').style.opacity = '0.7';
    document.querySelector('.thumbnail-container-product-3').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail-container-product-3').style.opacity = '0.7';

    document.querySelector('.thumbnail2-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-1').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-2').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-4').style.opacity = '';

    document.querySelector('.thumbnail-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-1').style.opacity = '';
    document.querySelector('.thumbnail-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-2').style.opacity = '';
    document.querySelector('.thumbnail-container-product-4').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-4').style.opacity = '';
}
function imageChange4() {
    currentProductIndex = 3;
    currentProduct = products[currentProductIndex];
    display.src = `./${currentProduct.image}`;
    display2.src = `./${currentProduct.image}`;
    document.querySelector('.thumbnail-container-product-4').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail-container-product-4').style.opacity = '0.7';
    document.querySelector('.thumbnail2-container-product-4').style.border = '3px solid hsl(26, 100%, 55%) ';
    document.querySelector('.thumbnail2-container-product-4').style.opacity = '0.7';


    document.querySelector('.thumbnail2-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-1').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-3').style.opacity = '';
    document.querySelector('.thumbnail2-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail2-container-product-2').style.opacity = '';

    document.querySelector('.thumbnail-container-product-1').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-1').style.opacity = '';
    document.querySelector('.thumbnail-container-product-3').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-3').style.opacity = '';
    document.querySelector('.thumbnail-container-product-2').style.border = '3px solid white';
    document.querySelector('.thumbnail-container-product-2').style.opacity = '';
}
// Product 1 thumbnail click
document.querySelector('.thumbnail-container-product-1').addEventListener("click", imageChange1);
// Product 2 thumbnail click
document.querySelector('.thumbnail-container-product-2').addEventListener("click", imageChange2);
// Product 3 thumbnail click
document.querySelector('.thumbnail-container-product-3').addEventListener("click", imageChange3);
// Product 4 thumbnail click
document.querySelector('.thumbnail-container-product-4').addEventListener("click", imageChange4);

// Functionality for Light Mode
document.querySelector('.thumbnail2-container-product-1').addEventListener("click", imageChange1);
document.querySelector('.thumbnail2-container-product-2').addEventListener("click", imageChange2);
document.querySelector('.thumbnail2-container-product-3').addEventListener("click", imageChange3);
document.querySelector('.thumbnail2-container-product-4').addEventListener("click", imageChange4);


// Add product to cart with selected quantity and update cart display
document.querySelector('.add-to-cart-btn').addEventListener("click", () => {
    const currentQuantity = quantity;
    const itemTotal = (parseFloat(currentProduct.price) * currentQuantity).toFixed(2);

    cartItemId++;
    cart.push({
        id: cartItemId,
        image: `./${currentProduct.thumbnail}.jpg`,
        name: 'Fall Limited Edition Sneakers',
        price: currentProduct.price,
        quantity: currentQuantity,
        total: itemTotal
    });
    ProductinCart++;
    updateCartCount();
    saveCartToLocalStorage();
    renderCartItems();

    document.querySelector('.quantity-view').innerText = 1;
    quantity = 1;
});

// Update cart content display with product image, quantity, and total price
function updateCartContent(imageSrc, quantity, price) {
    const total = (parseFloat(price) * quantity).toFixed(2);
    const cartContent = document.querySelector('.cart-content');
    if (cartContent) {
        // Update the cart display with new product information
        cartContent.innerHTML = `
            <div class="cart-image">
                <img src="${imageSrc}" alt="" class="cart-image">
            </div>
            <div class="product-order">
                <span>Fall Limited Edition Sneakers</span><br>
                <span>$${price} x ${quantity}</span>
                <span><strong>$${total}</strong></span>
                <span>
                    <img src="./images/icon-delete.svg" alt="" class="delete">
                </span>
            </div>
        `;
    }
}

function toggleMenu() {
  
  if (navLinks2.style.display === 'flex') {
    navLinks2.style.display = 'none';
  } else {
    navLinks2.style.display = 'flex';
  }
}
let menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', toggleMenu);
document.addEventListener("click", (e) => {
    if (!menuButton.contains(e.target) && !navLinks2.contains(e.target)) {
        navLinks2.style.display = 'none';
    }
});

// forward and previous buttons handle large image change
forwardButton.addEventListener("click", () => {
    if ( currentProductIndex >= 0) {
        currentProductIndex += 1;
        changeLargeImage();
    } 
});
forwardButton2.addEventListener("click", () => {
    if ( currentProductIndex >= 0) {
        currentProductIndex += 1;
    }; 
    if ( currentProductIndex === 0){
        imageChange1();
    } else if ( currentProductIndex === 1){
        imageChange2();
    } else if ( currentProductIndex === 2){
        imageChange3();
    } else if ( currentProductIndex === 3){
        imageChange4();
    }
});
previousButton.addEventListener('click', () => {
     if (currentProductIndex > 0 ){
        currentProductIndex -= 1;
        changeLargeImage();
    }
});
previousButton2.addEventListener('click', () => {
     if (currentProductIndex > 0 ){
        currentProductIndex -= 1;
    } 
    if ( currentProductIndex === 0){
        imageChange1();
    } else if ( currentProductIndex === 1){
        imageChange2();
    } else if ( currentProductIndex === 2){
        imageChange3();
    } else if ( currentProductIndex === 3){
        imageChange4();
    }
});

// Closes light mode
CancelLightMode.addEventListener("click", () => {
    lightMode.style.display = "none";
})
// Opens light mode
document.querySelector('.large-image').addEventListener("click" , () => {
    lightMode.style.display = "flex"
})
function changeLargeImage() {
    currentProduct = products[currentProductIndex];
    display.src = `./${currentProduct.image}`;
    display2.src = `./${currentProduct.image}`;
};