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