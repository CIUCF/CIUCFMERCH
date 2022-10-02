// import { getSession,storeSession } from "./session";
// import axios from "axios";
// import { getAddOrViewCartConfig } from "./api";
// import {isEmpty,isArray} from "lodash";
// import { CART_ENDPOINT } from "../../src/constants/endpoints";
import { createContext, useReducer } from "react";
import Cookies from 'js-cookie';
// export const addToCart = (productId, qty = 1,setCart, setAddedToCart) =>{

//     const storedSession = getSession();
//     const addOrViewCartConfig = getAddOrViewCartConfig();

//     axios.post( CART_ENDPOINT, {
//             product_id: productId,
//             quantity: qty,

//     },
//     addOrViewCartConfig,
//     )
//         .then((res) => {
            
//             if ( isEmpty( storedSession )) {
//                 storeSession( res?.headers?.['x-wc-session']);
//             }
//             setAddedToCart(true);
//             viewCart (setCart);
//             console.log('yass',res);

//         })
//         .catch( err=>{
//             console.log('err',err);
//         })
// };

// export const viewCart = (setCart) => { 

//     const addOrViewCartConfig = getAddOrViewCartConfig();

//     axios.get(CART_ENDPOINT,addOrViewCartConfig)
//     .then((res)=>{
//         const formattedCartData = getFormattedCartData(res?.data ?? []);
//         setCart(formattedCartData);
//     })
//     .catch( err=>{
//         console.log('err',err);
//     }); 
    
// }

// const getFormattedCartData = ( cartData ) => {
// 	if ( ! cartData.length ) {
// 		return null;
// 	}
// 	const cartTotal = calculateCartQtyAndPrice( cartData || [] );
// 	return {
// 		cartItems: cartData || [],
// 		...cartTotal,
// 	};
// };
 
// const calculateCartQtyAndPrice = ( cartItems ) => {
// 	const qtyAndPrice = {
// 		totalQty: 0,
// 		totalPrice: 0,
// 	}
	
// 	if ( !isArray(cartItems) || !cartItems?.length ) {
// 		return qtyAndPrice;
// 	}
	
// 	cartItems.forEach( (item, index) => {
// 		qtyAndPrice.totalQty += item?.quantity ?? 0;
// 		qtyAndPrice.totalPrice += item?.line_total ?? 0;
// 	} )
	
// 	return qtyAndPrice;
// }



export const Store = createContext();

const initialState = {
    cart: Cookies.get('cart')? JSON.parse(Cookies.get('cart')):
    {cartItems: []},

};

function reducer(state, action) {

    switch (action.type) {
        case 'ADD_TO_CART' : { 
            const newItem = action.payload;
            const existItem = state.cart.cartItems.find(
                (item) => item.slug === newItem.slug
              );
              const cartItems = existItem ? state.cart.cartItems.map((item) =>
                    item.slug === existItem.slug ? newItem : item
                  )
                : [...state.cart.cartItems, newItem];
                Cookies.set('cart',JSON.stringify( { ...state.cart, cartItems } ));
                return { ...state, cart: { ...state.cart, cartItems } };
        }
        case 'REMOVE_FROM_CART': {
            const cartItems = state.cart.cartItems.filter(
              (item) => item.slug !== action.payload.slug
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

