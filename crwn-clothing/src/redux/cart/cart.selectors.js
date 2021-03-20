import {createSelector} from "reselect";

// input selector
const selectCart = state => state.cart;

// output selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// output selector based on ouput selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  selectCartItems => { return selectCartItems.reduce(
    (accumulatedQuantity, cardItem) => {
      return accumulatedQuantity + cardItem.quantity
    },
    0
  )}
)
