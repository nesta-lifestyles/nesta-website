import styled from "styled-components"
import { NestaDecorItem } from "../../layouts/nesta_decor/decor_item_layout"
import React, { useContext, useState } from "react"
import { DecorItemListFilterLayout } from "../../layouts/nesta_decor/decor_item_list_filter_layout"
import { NestaDecorDataContext } from "../../pages/nesta_decor/decor_data_provider"

const DecorItemListContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    overflow: auto;
    flex-wrap: wrap;
    gap: 80px;
    padding-bottom:10px;
    width: 100%;
`

const DecorItemListViewComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    @media (max-width:600px){
     gap:20px;
    } 
`

export const NestaDecorItemList = (props) =>{
    const {decorItems, getByDecorTypeFilter} = useContext(NestaDecorDataContext)
    const [localDecoreItems, updateLocalDecoreItems]= useState(decorItems)
   
    const updateDecoreItemsByFilter = (filterName) => {
        if(filterName === "All") {
            updateLocalDecoreItems(decorItems)
            return
        }
        let filteredDecorItems = getByDecorTypeFilter(filterName) 
        console.log("UPDAE DECORE ITEM CALLED, after filter", filteredDecorItems)
        updateLocalDecoreItems(filteredDecorItems)   
    }
    
    
    return(
    <DecorItemListViewComponent>
        <DecorItemListFilterLayout updateDecoreItemsByFilter={updateDecoreItemsByFilter}/>
            <DecorItemListContainer>
                    {   
                        localDecoreItems.map((item,i) => 
                            <NestaDecorItem decorItem={item} handleOnDecoreItemSelected={props.onDecorItemClick}/>
                        )
                    }
            </DecorItemListContainer>
    </DecorItemListViewComponent>
)
}