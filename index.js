let  quantity = 0 ;

document.querySelector('.js-add-button').addEventListener("click", () => {
    quantity += 1;
    document.querySelector('.quantity-view').innerText = quantity;
});