import React, { useState } from "react"
import { NestaDecorHomePage } from "../pages/nesta_decor/decor_home_page"
import { DecoreItemContext } from "../pages/nesta_decor/decor_item_context"
import { DecorItemPage } from "../pages/nesta_decor/decor_item_page"
import { Route, Routes } from "react-router-dom"
import { NestaDecorCartProvider } from "../pages/nesta_decor/decor_basket_context"
import { NestaDecorDataProvider } from "../pages/nesta_decor/decor_data_provider"
import { NestaDecorCartCheckout } from "../pages/nesta_decor/decor_checkout_cart"
import { NestaDecorOverlayProvider } from "../pages/nesta_decor/decor_overlay_context"
import { NestaDecorOverlayScreen } from "../components/overlay/nesta_decore_overlay"
import { FormContextProvider } from "../pages/contact_us/form_context"


export const NestaDecorRoutes = () => {
    const [currentSelectedDecorItem, updateSelectedDecoreItem] = useState(null)
    const updateDecoreItem=(item)=>{
        updateSelectedDecoreItem(item)
    }

    
    return(
        <DecoreItemContext.Provider value={{currentSelectedDecorItem, updateDecoreItem}}>
                <NestaDecorCartProvider>
                <NestaDecorOverlayProvider>
                <NestaDecorDataProvider>
                <FormContextProvider>
                        <NestaDecorOverlayScreen/>
                </FormContextProvider>
                <Routes>
                        <Route path='/decor' Component={NestaDecorHomePage}/>
                        <Route path='/decor/:name' Component={DecorItemPage}/>
                        <Route path='/decor/cart/checkout' Component={NestaDecorCartCheckout}/>
                </Routes>
            </NestaDecorDataProvider>
            </NestaDecorOverlayProvider>
            </NestaDecorCartProvider>
        </DecoreItemContext.Provider>
        )
}