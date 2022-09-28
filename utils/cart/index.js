import { getSession,storeSession } from "./session";
import axios from "axios";
import { getAddOrViewCartConfig } from "./api";
import {isEmpty} from "lodash";
import { CART_ENDPOINT } from "../../src/constants/endpoints";

export const addToCart = (productId, qty = 1) =>{

    const storedSession = getSession();
    const addOrViewCartConfig = getAddOrViewCartConfig();

    axios.post( CART_ENDPOINT, {
            product_id: productId,
            quantity: qty,

    },
    addOrViewCartConfig,
    )
        .then((res ) => {
            
            if ( isEmpty( storedSession )) {
                storeSession( res?.headers?.['x-wc-session']);
            }
            viewCart ();

        })
        .catch( err=>{
            console.log('err',err);
        })
};

export const viewCart = () => { 

    const addOrViewCartConfig = getAddOrViewCartConfig();

    axios.get(CART_ENDPOINT,addOrViewCartConfig)
    .then((res)=>{
        console.log('res',res);
    })
    .catch( err=>{
        console.log('err',err);
    }); 
    
}

    
