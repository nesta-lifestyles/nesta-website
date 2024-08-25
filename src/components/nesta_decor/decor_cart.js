import React, { useContext } from "react";
import { NestaDecorCartLayout } from "../../layouts/nesta_decor/decor_cart_layout"
import { useNavigate } from "react-router-dom";
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context";

export const DecorCartComponent = () => {
    const { getTotalCount } = useContext(NestaDecorCartContext);
    const navigate = useNavigate();
    
    const handleCheckoutClick = (name) =>{
        console.log("CLICKED ON CART ICON")
        navigate('/decor/cart/checkout')
    }

    return(<NestaDecorCartLayout cart={getTotalCount} handleCheckoutClick={handleCheckoutClick} />)
}