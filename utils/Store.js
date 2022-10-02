import { createContext, useReducer } from "react";
import Cookies from 'js-cookie';

export const Store = createContext();

const initialState = {
    cart: Cookies.get('cart')? JSON.parse(Cookies.get('cart')):
    {cartItems: []},

};

function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TO_CART' : { 
            const newItem = action.payload;
            console.log(newItem);
            const existItem = state.cart.cartItems.find(
                (item) => item.unique === newItem.unique 
              );
              const cartItems = existItem ? state.cart.cartItems.map((item) =>
                    item.unique === existItem.unique ? newItem : item
                  )
                : [...state.cart.cartItems, newItem];
                Cookies.set('cart',JSON.stringify( { ...state.cart, cartItems } ));
                return { ...state, cart: { ...state.cart, cartItems } };
        }
        case 'REMOVE_FROM_CART': {
            const cartItems = state.cart.cartItems.filter(
              (item) => item.unique !== action.payload.unique
            );
            Cookies.set('cart',JSON.stringify( { ...state.cart, cartItems } ));
            return { ...state, cart: { ...state.cart, cartItems } };
          }
        default:
      return state;
    }
}

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
  }