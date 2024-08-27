import React from "react"
import { WeimarCharacteristics } from "../../components/nesta_ville/weimar/characteristics"
import styled from "styled-components"
import { BannerWithTitleLayout } from "../../layouts/banner_layout"
import { BannerComponent } from "../../components/nesta_ville/weimar/banner"
import { initialWeimarVillaData } from "./data/weimar"
import MeetAnExpert from "../../components/meet_an_expert"
import { MainContainerDiv } from "../../App"
import { connect } from "react-redux"
import { openOverlay } from "../../components/overlay/overlay_reducer"

const Container = styled.div`
    /* margin-left: 70px;
    margin-right: 73px; */
    /* margin-top: 105px; */
    border-radius: 16px;
    padding:70px;
    display: flex;
    flex-direction: column;
    background-color: white;
    gap: 150px;
    @media (max-width:600px){
      padding:20px;
      background-color: white;
      gap: 20px;    
    } 
`


class NestaVilleWeimar extends React.Component{
    
    constructor(){
        super();
        this.state = initialWeimarVillaData;
    }

    render(){
        const contactUsHandler = (props) => {
            const { openOverlay } = this.props;                
            openOverlay();
        }

        return( <MainContainerDiv >
            <Container>
            <BannerComponent  banner={this.state.banner} meetAnExpertHandler={contactUsHandler}/>
            <WeimarCharacteristics characteristics={this.state.characteristics}/>
            <BannerWithTitleLayout title={this.state.secondaryBanners[0].title} src={this.state.secondaryBanners[0].image} />
            <MeetAnExpert meetAnExpert={this.state.meetAnExpert}/>
        </Container>
        </MainContainerDiv>
        )}
}

export default connect(null, {openOverlay})(NestaVilleWeimar)