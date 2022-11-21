import { calcTotalPrice } from "./calcTotalPrice";

export const getCartItemsFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];
    const totalPrice = calcTotalPrice(items);
    return {items, totalPrice}
}