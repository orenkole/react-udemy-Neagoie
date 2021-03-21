import {createSelector} from "reselect";

// input selector
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => {
    return cart.cartItems;
  }
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// output selector based on ouput selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => { return cartItems.reduce(
    (accumulatedQuantity, cartItem) => {
      return accumulatedQuantity + cartItem.quantity
    },
    0
  )}
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => { return cartItems.reduce(
    (accumulatedQuantity, cartItem) => {
      return accumulatedQuantity + cartItem.quantity * cartItem.price;
    },
    0
  )}
)
