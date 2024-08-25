import styled from "styled-components"
import { ExploreModels } from "../../components/explore/models"
import React from "react"
import { useState } from "react"
import { ViewAllButton } from "../../components/banner"
import { H1 } from "../../elements/text"

const ExploreModelsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 60px;
    @media (max-width:600px){
      flex-direction: column;
    } 
`

const ExploreModelsColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 60px;
`

const ButtonContainer = styled.div`
    /* margin: auto; */
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media (max-width: 991px) {
        padding-right: 40px;
    } 
`



/**
 * 
 * @returns 
 *  [
 *  {
 *      image:"",
 *      title:"",
 *      desciption:"",
 *      path:"",            
 *  }
 *  ]
 */



const GalleryTitleContainer = styled.div`
    margin: auto;
    /* padding-left: 350px; */
    padding-bottom: 30px;
    margin-bottom: 30px;
    display: grid;
    place-items: center; 
    align-items: center;
    justify-content: center;
    @media (max-width:600px){
        padding-bottom: 10px;
        margin-bottom: 10px;
    } 
`


export const ExploreModelsLayout = (props) => {
    console.log("PROPS"+JSON.stringify(props.reff))
    const all = "View All"
    const less = "View Less"
    const [isDisabled, setIsDisabled] = useState(false);
    const [buttonTitle, setButtonTitle] = useState("View All")
    const toggleEnable = () => {
        setIsDisabled(prevState => !prevState);
        if(buttonTitle===all) {
            setButtonTitle(less)
        } else {
            setButtonTitle(all)
        }
    };
    

    const getExploreModels = (props) => {
        const leftSideExploreModels = []
        const rightSideExploreModels = []
        
        for(let i=0;i<props.models.length;i++) {
            if(!isDisabled && i<2) {
                if(i%2===0) {
                    rightSideExploreModels.push(<ExploreModels model={props.models[i]} key={i} />)
                } else {
                    leftSideExploreModels.push(<ExploreModels model={props.models[i]} key={i}/>)
                }
            } else if(isDisabled) {
                if(i%2===0) {
                    rightSideExploreModels.push(<ExploreModels model={props.models[i]} key={i} />)
                } else {
                    leftSideExploreModels.push(<ExploreModels model={props.models[i]} key={i}/>)
                }
            }
        }
        return {leftSideExploreModels, rightSideExploreModels}
    }
    

    const {leftSideExploreModels, rightSideExploreModels} =  getExploreModels(props)
    return(
        <div ref={props.reff}>
            <GalleryTitleContainer>
            <H1 value={props.title} color="black" width="150px"  height="auto"/> 
            </GalleryTitleContainer>
            <ExploreModelsContainer>
                <ExploreModelsColumnContainer>{rightSideExploreModels}</ExploreModelsColumnContainer>
                <ExploreModelsColumnContainer>{leftSideExploreModels}</ExploreModelsColumnContainer>
            </ExploreModelsContainer>
            <ButtonContainer>
                <ViewAllButton onClick={toggleEnable}>{buttonTitle}</ViewAllButton>
            </ButtonContainer>
            
        </div>
    )
}