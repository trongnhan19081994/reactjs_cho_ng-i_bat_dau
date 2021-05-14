import {createSelector} from '@reduxjs/toolkit'

const cartItemsSeletor = (state) => state.cart.cartItems;

// count number of products in cart
export const cartItemsCountSelector = createSelector(
    cartItemsSeletor, 
    (cartItems) => cartItems.reduce((count, item) => count + item.quantity, 0)
)

// Calculate total of cart
export const cartTotalSelector = createSelector(
    cartItemsSeletor, 
    (cartItems) => cartItems.reduce((total, item) => total + item.product.salePrice * item.quantity, 0)
)