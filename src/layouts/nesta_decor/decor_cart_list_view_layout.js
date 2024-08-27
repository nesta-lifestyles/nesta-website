import React, { useContext } from "react"
import { Butn } from "../../elements/button"
import { ColumnFlex, RowFlex } from "../../elements/flex/flex_container"
import { Image } from "../../elements/image"
import {  H3, MediumText, SmallText } from "../../elements/text"
import { NestaDecorCartContext } from "../../pages/nesta_decor/decor_basket_context"
import styled from "styled-components"
import { NestaDecorDataContext } from "../../pages/nesta_decor/decor_data_provider"
import { useNavigate } from "react-router-dom"
import { DecoreItemContext } from "../../pages/nesta_decor/decor_item_context"
import { TotalCartItemsLayout } from "./decor_cart_total_items_layout"
import { isMobile } from "react-device-detect"
import { RequestForQuoteButton } from "../../elements/button/nesta_decor_button"
import { useRFQHandler } from "../../handlers/nesta_decor_RFQ_handlers"


const ItemContainer = styled.div`
    position: relative;
    height: auto;
    text-align: left;
    padding-bottom:20px;
    padding-top:20px;
    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color:#D6D6D6;
`


const ImageContainer = styled.div`
    position: relative;
    height: auto;
    width: 268px;
    max-height: auto;
    max-width: 100%;
    overflow: hidden;
    cursor: pointer;
    @media (max-width:600px){
        height: 120px;
        width: 200px;
        max-height: 160px;
        max-width: 100%;
    } 
`

const LineClampContainer = styled.span`
    line-clamp: 2;
    -webkit-line-clamp: 2;
    overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-box-orient: vertical;
   
`


export const DecorCartCheckoutLayout = () => {
    // const {isMobileView} = useState(isMobile)
    const { showRFQScreen} = useRFQHandler();
    const {getUnqueItemsByCount, updateToCart} = useContext(NestaDecorCartContext)
    const {getDecoreItemByCode} = useContext(NestaDecorDataContext)
    const { updateDecoreItem } = useContext(DecoreItemContext);
    const navigate = useNavigate();
   
    const handleOnSelect = (code) => {
        const selectedItem = getDecoreItemByCode(code)
        updateDecoreItem(selectedItem)
        navigate('/decor/'+selectedItem.name)
    }

    const handleRemoveDecoreItem = (product) => {
        updateToCart(product, 0)
    }

    const handleRFQ = () =>{
        showRFQScreen();
    }
    
    const itemMap = getUnqueItemsByCount();
    return(<ColumnFlex>
               {itemMap.entries().map((item, code)=> 
               <ItemContainer>
                <RowFlex gap="20px">
                    <ImageContainer onClick={()=>handleOnSelect(item[1].code)}>
                       <Image src={item[1].main_image} height="100%" width="100%"/>
                    </ImageContainer>
                    <ColumnFlex gap="5px">
                        <ColumnFlex gap="5px">
                            <SmallText width="100%" height="auto"><span style={{color:"green"}}> In stock</span></SmallText>
                            <ColumnFlex gap="0px">
                                <H3 width="100%" height="auto" color="black">{item[1].name}</H3>
                                <MediumText  width="100%" height="auto" color="black">
                                    <LineClampContainer >
                                    {item[1].information}
                                    </LineClampContainer>
                                </MediumText>                            
                            </ColumnFlex>
                        </ColumnFlex>
                        <RowFlex gap="40px">
                            <Butn><span style={{color:"black"}}> Qty: {item[1].count}</span></Butn>
                            <Butn onClick={()=>handleRemoveDecoreItem(item[1])}><span style={{color:"#878383"}}>Remove</span></Butn>
                        </RowFlex>
                    </ColumnFlex>
                </RowFlex>
                </ItemContainer>)}
                <TotalCartItemsLayout/>
                {isMobile && <RequestForQuoteButton onClick={()=>handleRFQ()}/>}
            </ColumnFlex>)
}