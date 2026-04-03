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