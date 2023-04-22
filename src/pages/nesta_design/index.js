import React from 'react';
import { Banner } from '../../components/banner';
import { TextImageLayout } from '../../layouts/text_image_layout';
import { FullImageLayout } from '../../layouts/full_row_image_layout';
import { ImageTextButtonLayout, ImageTextLayout } from '../../layouts/image_text_widget';
import { OakSerenityImagesArray, OakSerenityTextArray, OakSerenityTitle } from './oak_serenity';
import { TheWhiteOpulenceImageArray,TheWhiteOpulenceTextArray, Title } from './the_white_opulence';
import { UrbanBastionImageArray, UrbanBastionTextArray, UrbanBastionTitle } from './urban_bastion';
import styled from 'styled-components';


const DesignContainer = styled.div`
    padding-top: 72px;
    padding-left: 72px; 
    padding-right: 72px;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    ::-webkit-scrollbar{
      display: none;
    } 
    @media (max-width:600px){
      padding-left: 0px;
      padding-right: 0px;
      padding-top: 0px;
      /* padding-top: 0px;
      margin-left: auto;
      margin-right: auto;
      height: auto;
      padding-bottom: 120px;
      background-color: white; */
    }
`

class NestaDesign extends React.Component {
    constructor(){
        super()
        this.state={
            title: this.models[0].title,
            imageArray: this.models[0].imageArray,
            textArray: this.models[0].textArray,
            index: 0,
        }
    }

    models = [
        {
            title: OakSerenityTitle,
            imageArray: OakSerenityImagesArray,
            textArray: OakSerenityTextArray,
        },{
            title: Title,
            imageArray: TheWhiteOpulenceImageArray,
            textArray: TheWhiteOpulenceTextArray,
        },{
            title: UrbanBastionTitle,
            imageArray: UrbanBastionImageArray,
            textArray: UrbanBastionTextArray,
        }
    ]
    
    HandlePreviousDesign = (props) => {
            console.log("Previous Indicator Button clicked...!")
            var currentIndex =  this.state.index;
            var previousIndex = 3;
            if(currentIndex == 0) {
                previousIndex = 2;
            } else {
                previousIndex = currentIndex - 1
            }
            this.setState({
                title: this.models[previousIndex].title,
                imageArray: this.models[previousIndex].imageArray,
                textArray: this.models[previousIndex].textArray,
                index: previousIndex,
            })
    }   

    HandleNextDesign = (props) => {
        console.log("Handle Next Indicator Button clicked...!")
        var currentIndex = this.state.index;
        var nextIndex = 0
        if(currentIndex === 2) {
            nextIndex = 0
        } else {
            nextIndex = currentIndex + 1
        }
        this.setState(
            {   
                title: this.models[nextIndex].title,
                imageArray: this.models[nextIndex].imageArray,
                textArray: this.models[nextIndex].textArray,
                index: nextIndex,

            })
    }

    render(){

        return (
            <DesignContainer>
                <Banner title={this.state.title} src={this.state.imageArray[0]} animationflag = {this.state.index} OnPrevIndicatorClick={this.HandlePreviousDesign} onNextIndicatorClick={this.HandleNextDesign}/>
                <ImageTextButtonLayout image={this.state.imageArray[1]} text={this.state.textArray[0]} buttonTitle="Get your interiors"/>
                <TextImageLayout text={this.state.textArray[1]} image={this.state.imageArray[2]}/>
                <FullImageLayout image={this.state.imageArray[3]} />
                <TextImageLayout text={this.state.textArray[2]} image={this.state.imageArray[4]}/>

                <ImageTextLayout image={this.state.imageArray[5]} text={this.state.textArray[3]}/>
                <FullImageLayout image={this.state.imageArray[6]} />
                <TextImageLayout text={this.state.textArray[4]} image={this.state.imageArray[7]}/>
                <ImageTextLayout image={this.state.imageArray[8]} text={this.state.textArray[5]}/>
                <FullImageLayout image={this.state.imageArray[9]} />
                <ImageTextLayout image={this.state.imageArray[10]} text={this.state.textArray[6]}/>
                <TextImageLayout text={this.state.textArray[7]} image={this.state.imageArray[11]}/>
                <ImageTextLayout image={this.state.imageArray[12]} text={this.state.textArray[8]}/>
                <FullImageLayout image={this.state.imageArray[13]} />
            </DesignContainer>
        );
    }
}
export default NestaDesign;