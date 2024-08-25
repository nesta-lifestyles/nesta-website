import React, { createContext, useState } from "react";

export const NestaDecorOverlayScreenContext = createContext();

export const NestaDecorOverlayProvider  = ({children}) =>{
    const [isRFQVisible, updateRequestForQuote] = useState(false);

    
    
    return(
        <NestaDecorOverlayScreenContext.Provider value={{updateRequestForQuote, isRFQVisible}}>
            {children}
        </NestaDecorOverlayScreenContext.Provider>
    )

}