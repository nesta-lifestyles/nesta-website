import React from "react"
import styled from "styled-components"
import { WeimarCharacteristics } from "../../components/nesta_ville/weimar/characteristics"
import { BannerComponent } from "../../components/nesta_ville/weimar/banner"
import { WhyToChoose } from "../../components/nesta_design/why_to_choose"
import { initialContourDesignData } from "./data/contour"
import { GalleryLayout2 } from "../../layouts/gallery_layout"
import MeetAnExpert from "../../components/meet_an_expert"
import { MainContainerDiv } from "../../App"
import { openOverlay } from "../../components/overlay/overlay_reducer"
import { connect } from "react-redux"

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
      gap: 80px;
      background-color: white;
    } 
`

class NestaDesignContour extends React.Component {
    constructor(){
        super();
        this.state = initialContourDesignData;
    }

    render(){
        
        const contactUsHandler = (props) => {
            const { openOverlay } = this.props;                
            openOverlay();
        }

        // this.setState({'meetAnExpertHandler':contactUsHandler,});
        
        return( 
            <MainContainerDiv>
                <Container>
                    <BannerComponent banner={this.state.banner} meetAnExpertHandler={contactUsHandler}/>
                    <WeimarCharacteristics characteristics={this.state.inspiration}/>
                    <div>
                        <GalleryLayout2 images={this.state.gallery}/>
                        <WhyToChoose whyToChoose={this.state.whyToChoose}/>
                    </div>
                    <MeetAnExpert meetAnExpert={this.state.meetAnExpert} />
                </Container>   
            </MainContainerDiv>
                
        )
    }
}

export default connect(null, {openOverlay})(NestaDesignContour);