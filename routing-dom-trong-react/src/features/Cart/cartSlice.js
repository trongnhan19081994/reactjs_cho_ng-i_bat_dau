const { createSlice } = require('@reduxjs/toolkit');
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showMiniCart: false,
        cartItems: []
    },
    reducers: {
        showMiniCart(state, action) {
            state.showMiniCart = true;
        },
        hideMiniCart(state, action) {
            state.showMiniCart = false;
        },
    }
});

const { actions, reducer } = cartSlice;
export const { showMiniCart, hideMiniCart } = actions; //name export
export default reducer; //default export