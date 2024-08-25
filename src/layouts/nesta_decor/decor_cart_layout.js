import React, { useContext } from "react"
import { Butn } from "../../elements/button"
import shoppingCartIcon from "../../images/icons/shopping_cart.svg"
import { CartImage } from "../../elements/image"
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context"



export const  NestaDecorCartLayout = (props) =>{
    const {getTotalCount} = useContext(NestaDecorCartContext);
    
    return(<div style={{ position: 'relative' }}>
    <Butn onClick={()=>props.handleCheckoutClick('name')}><CartImage src={shoppingCartIcon} height="24px" width="34px"/></Butn>
      {getTotalCount() > 0 && (
        <span
          style={{
            position: 'absolute',
            top: -10,
            right: -10,
            background: '#1B1E1E',
            color: 'white',
            borderRadius: '50%',
            padding: '0 6px',
            fontSize: '12px',
          }}
        >
          {getTotalCount()}
        </span>
      )}
      </div>)
}