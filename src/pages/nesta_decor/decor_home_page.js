import { useDispatch } from "react-redux";
import { MainContainerDiv } from "../../App"
import { BannerLayout } from "../../layouts/banner_layout"
import { NestaDecorData } from "./data/decor_data";
import { openOverlay } from "../../components/overlay/overlay_reducer";
import React, { useContext } from "react";
import { NestaDecorItemList } from "../../components/nesta_decor/decor_items_list";
import styled from "styled-components";
import { DecoreItemContext} from "./decor_item_context";
import { useNavigate } from "react-router-dom";
import { NestaDecorDataContext } from "./decor_data_provider";


export const NestaDecorHomePage = () =>{
    const { updateDecoreItem } = useContext(DecoreItemContext);
    const {updateDecorItems} = useContext(NestaDecorDataContext);
    
    updateDecorItems(NestaDecorData.decorItems)
    
    const dispatch = useDispatch();
    const contactUsHandler = (props) => {
        dispatch(openOverlay())
    }

    const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    /* margin-top: 105px; */
    padding: 70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 100px;
    border-radius: 16px;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
    } 
`

    const navigate = useNavigate();
   
    const onDecorItemClick = (item) =>{
        updateDecoreItem(item)
        navigate(item.name)
    }

    return(
        <MainContainerDiv>
            <Container>
                <BannerLayout title={NestaDecorData.banner.title} src={NestaDecorData.banner.image}
                contactUsHandler={contactUsHandler}></BannerLayout>
                <NestaDecorItemList onDecorItemClick={onDecorItemClick}/>
            </Container>
        </MainContainerDiv>
    )
}