import React, { useRef } from "react";
import styled from "styled-components";
import { ExploreModelsLayout } from "../../layouts/explore_models_layout";
import { NestaDesignInformation } from "../../components/navbar/nav_bar_content";
import { GalleryLayout2 } from "../../layouts/gallery_layout";
import { BannerLayout } from "../../layouts/banner_layout";
import { NestaDesignHomePageData } from "./data/home";
import { ProcessLayout } from "../../layouts/process_layout";
import MeetAnExpert from "../../components/meet_an_expert";
import { MainContainerDiv } from "../../App";
import { useDispatch} from "react-redux";
import { openOverlay } from "../../components/overlay/overlay_reducer";
import firstTestImage from"../../images/designs/process.png"
import processImage from "../../images/designs/process_design_mobile.png"
import { isMobile } from "react-device-detect"


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
      gap: 50px;
    } 
`

const HandlePreviousDesign = (props) => {
    console.log("Previous Indicator Button clicked...!")
}   

const HandleNextDesign = (props) => {
    console.log("Handle Next Indicator Button clicked...!")
}


const getImage=()=>{
    console.log("Is Mobile"+isMobile) 
    if(isMobile) {
        return processImage
    }
    return firstTestImage
}

export const NestaDesignHomePage = () => {
    const myRef = useRef(null);
   
    const scrollToSection = (sectionRef, sectionId) => {
        window.history.pushState(null, null, `#${sectionId}`);
        console.log("SCROLL TO SECTIONS"+sectionRef)
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

    const dispatch = useDispatch();
    const contactUsHandler = (props) => {
        dispatch(openOverlay())
    }

    return(<MainContainerDiv>
            <Container>
                    <BannerLayout title={NestaDesignHomePageData.banner.banner_title} src={NestaDesignHomePageData.banner.image} animationflag ={true} 
                    contactUsHandler={contactUsHandler}  OnPrevIndicatorClick={HandlePreviousDesign} KnowMoreHandler={() => scrollToSection(myRef, "models")} onNextIndicatorClick={HandleNextDesign}/>
                    <div ref={myRef}>
                        <ExploreModelsLayout models={NestaDesignInformation}  title={NestaDesignHomePageData.models.title}/>
                    </div>
                    <ProcessLayout process_image={getImage()}/>
                    <GalleryLayout2 images={NestaDesignHomePageData.gallery}/>
                   {/* <GalleryLayout images={NestaDesignHomePageData.gallery}></GalleryLayout> */}
                   <MeetAnExpert meetAnExpert={NestaDesignHomePageData.meetAnExpert}/>
            </Container>
        </MainContainerDiv>)

}