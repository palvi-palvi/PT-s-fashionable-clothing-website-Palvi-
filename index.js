import app from './components/app';
import { createStore } from './state';
import setupListeners from './setup_listeners';
function reducer(state, event, data) {
  switch (event) {
    case 'SET_ITEMS':
      return Object.assign({}, state, {
        items: data.items.reduce((total, item) =>
          Object.assign({}, total, { [item.id]: item })
          , {}),
      });
    case 'ITEM_ADDED':
      return Object.assign({}, state, {
        cart: (new Set(state.cart)).add(data.item),
      });
    case 'ITEM_REMOVED':
      const newCart = (new Set(state.cart));
      newCart.delete(data.item);
      return Object.assign({}, state, {
        cart: newCart,
      });
    case 'TOGGLE_SHOW_CART':
      return Object.assign({}, state, {
        cartVisible: !state.cartVisible,