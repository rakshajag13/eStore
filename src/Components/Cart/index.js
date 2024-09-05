import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

// import React from "react";
const Cart=()=>{
    const cart=useSelector(state=>state.cartReducer);
    return (
        <div>
            {
                cart.cartItems.length===0?
                <EmptyCart/> 
                :
                <FilledCart/>
            }
        </div>
    )
}

export default Cart;