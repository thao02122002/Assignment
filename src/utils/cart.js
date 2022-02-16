import { getLocalStorage, setLocalStorage } from "./index";

let cart = [];
if (localStorage.getItem("cart")) {
    cart = getLocalStorage("cart");
}

// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newItem, next) => {
    const existItem = cart.find((item) => item.id === newItem.id);
    if (!existItem) {
        cart.push(newItem);
    } else {
        // eslint-disable-next-line no-plusplus
        existItem.quantity += newItem.quantity;
    }
    setLocalStorage("cart", JSON.stringify(cart));
    next();
};