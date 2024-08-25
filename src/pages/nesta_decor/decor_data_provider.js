import React, { createContext, useState } from "react";

export const NestaDecorDataContext =  createContext();

export const NestaDecorDataProvider = ({children}) =>{
    const [decorItems, setDecorItems] = useState([]);

    const updateDecorItems = (decorItems) => {
        setDecorItems(decorItems)
    }

    const getDecorItems = () =>{
        return decorItems
    }
    
    const getByDecorTypeFilter =(type)=>{
        return(decorItems.filter(item =>item.type === type))
    }

    const getDecoreItemByCode =(code)=>{
        return decorItems.find(item => item.code === code)
    } 


    return (
        <NestaDecorDataContext.Provider value={{ decorItems, updateDecorItems, getDecorItems, getByDecorTypeFilter, getDecoreItemByCode}}>
          {children}
        </NestaDecorDataContext.Provider>
      );
}

