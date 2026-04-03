let  quantity = 0 ;

document.querySelector('.js-add-button').addEventListener("click", () => {
    quantity += 1;
    document.querySelector('.quantity-view').innerText = quantity;
});
document.querySelector('.js-minus-button').addEventListener("click", () => {
    if (quantity === 0) {
        return
    } else {
        quantity = quantity - 1;
    document.querySelector('.quantity-view').innerText = quantity;
    }
});

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
    quantity: 0,
}];
let thumbnails = '';
products.forEach((product) => {
    console.log(product.name);
    let thumbnailHTML = `<div class="thumbnail-container">
    <img src="./images/image-${product.name}-thumbnail.jpg" alt="" class="thumbnail">
    </div>`;
    thumbnails += thumbnailHTML;
});
document.querySelector('.thumbnail-div-container').innerHTML = thumbnails;