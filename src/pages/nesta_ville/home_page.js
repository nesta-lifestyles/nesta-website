import React from "react";
import styled from "styled-components";
import { ExploreModelsLayout } from "../../layouts/explore_models_layout";
import MeetAnExpert from "../../components/meet_an_expert";
import { BannerLayout } from "../../layouts/banner_layout";
import { NestaVilleFeatures } from "../../components/nesta_ville/feature";
import { NestavilleHomePageData } from "./data/home";
import { ProductInformation } from "../../components/navbar/nav_bar_content";
import { MainContainerDiv } from "../../App";
import { ProcessLayout } from "../../layouts/process_layout";
import { openOverlay } from "../../components/overlay/overlay_reducer";
import { connect } from "react-redux";
import firstTestImage from"../../images/ville/process_villa.png"
import processImage from "../../images/ville/process_villa_mobile.png"
import { isMobile } from "react-device-detect"
// import { GalleryLayout2 } from "../../layouts/gallery_layout";



const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    position: relative;
    /* margin-top: 105px; */
    padding:70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 150px;
    border-radius: 16px;
    scroll-behavior: inherit;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
      gap:50px;
      padding-top:0px
    } 
`
const HandlePreviousDesign = (props) => {
}   

const HandleNextDesign = (props) => {
}

const getImage=()=>{
    if(isMobile) {
        return processImage
    }
    return firstTestImage
}


class NestaVilleHomePage extends React.Component{
    
    constructor(props) {
        super(props);
        this.section1Ref = React.createRef();
        this.state={
            showOverlay:false,
            currentOverlay:'overlay1'
        }
    }

    updateOverlayState = () => {
        
        this.setState({ 
            showOverlay: !this.state.showOverlay,
            currentOverlay:'overlay1'
        })
       
    }

    scrollToSection = (sectionRef, sectionId) => {
        window.history.pushState(null, null, `#${sectionId}`);
        window.scrollTo({
            top: sectionRef.current.offsetTop,
            behavior: 'smooth',
        });
    };

   render(){ 

        const contactUsHandler = (props) => {
            const { openOverlay } = this.props;                
            openOverlay();
        }


        return(<MainContainerDiv >
            <Container id="main_container">
                    <BannerLayout title={NestavilleHomePageData.banner.banner_title} src={NestavilleHomePageData.banner.image} animationflag ={true} OnPrevIndicatorClick={HandlePreviousDesign} onNextIndicatorClick={HandleNextDesign}
                    contactUsHandler={contactUsHandler} KnowMoreHandler={() => this.scrollToSection(this.section1Ref, "models")}/>
                    <div ref={this.section1Ref}>
                        <ExploreModelsLayout models={ProductInformation} title={NestavilleHomePageData.models.title}/>
                    </div>
                    <ProcessLayout process_image={getImage()}/>
                    <NestaVilleFeatures />
                    {/* <GalleryLayout2 images={NestavilleHomePageData.gallery}/> */}
                    <MeetAnExpert meetAnExpert={NestavilleHomePageData.meetAnExpert}/>
            </Container>
    </MainContainerDiv>)
}
}

export default connect(null, {openOverlay})(NestaVilleHomePage)