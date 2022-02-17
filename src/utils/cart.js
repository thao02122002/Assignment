let cart = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newItem, next) => {
    const existItem = cart.find((item) => item.id === newItem.id);
    if (!existItem) {
        cart.push(newItem);
    } else {
        existItem.quantity += newItem.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const increaseQuantity = (id, next) => {
    // eslint-disable-next-line no-plusplus
    cart.find((item) => item.id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const decreaseQuantity = (id, next) => {
    const currentProduct = cart.find((item) => item.id === id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
        if (confirm) {
            cart = cart.filter((item) => item.id !== id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};
export const removeItem = (id, next) => {
    const confirm = window.confirm("Bạn có chắc chăn smuoons xóa không");
    if (confirm) {
        cart = cart.filter((item) => item.id !== id);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};