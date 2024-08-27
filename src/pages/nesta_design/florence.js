import React from "react"
import styled from "styled-components"
import { WeimarCharacteristics } from "../../components/nesta_ville/weimar/characteristics"
import { BannerComponent } from "../../components/nesta_ville/weimar/banner"
import { WhyToChoose } from "../../components/nesta_design/why_to_choose"
import { GalleryLayout2 } from "../../layouts/gallery_layout"
import { initialFlorenceDesignData } from "./data/florence"
import MeetAnExpert from "../../components/meet_an_expert"
import { MainContainerDiv } from "../../App"
import { connect } from "react-redux"
import { openOverlay } from "../../components/overlay/overlay_reducer"

const Container = styled.div`
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
      gap: 20px;
    } 
`
const DivGap = styled.div`
    @media (max-width:600px){
      display: flex;
      flex-direction: column;
      gap: 20px;
    } 

`

class NestaDesignFlorence extends React.Component {
    constructor(){
        super();
        this.state = initialFlorenceDesignData;
    }

   

    render(){
        const contactUsHandler = (props) => {
            const { openOverlay } = this.props;                
            openOverlay();
        }
    
        return( 
            <MainContainerDiv>
                <Container>
                    <BannerComponent banner={this.state.banner}  meetAnExpertHandler={contactUsHandler}/>
                    <WeimarCharacteristics characteristics={this.state.inspiration}/>
                    <DivGap>
                        <GalleryLayout2 images={this.state.gallery}/>
                        <WhyToChoose whyToChoose={this.state.whyToChoose}/>
                    </DivGap>
                    <MeetAnExpert meetAnExpert={this.state.meetAnExpert}/>
                </Container>
            </MainContainerDiv>
        )
    }
}

export default connect(null, {openOverlay})(NestaDesignFlorence);