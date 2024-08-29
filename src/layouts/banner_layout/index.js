import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import styled from "styled-components";
import { H2 } from "../../elements/text";
import { KnowMoreButton, MeetUsButton } from "../../elements/button/know_more";

const StyledBannerDiv = styled.div`
        width: 100%;
        height: 675px;
        border-radius: 24px;
        border: 3px;
        border-color: green;
        max-width: 100%;
        max-height: 675px;
        overflow: hidden;
        @media (max-width:600px){
          height: 450px;
          max-height: 450px;
        }
`

const StyledBannerDiv2 = styled.div`
        width: 100%;
        height: auto;
        max-height: 576px;
        border-radius: 20px;
        border: 3px;
        border-color: green;
        max-width: 100%;
        max-height: 675px;
        overflow: hidden;
        @media (max-width:600px){
          height: 450px;
          max-height: 450px;
        }
`

const StyledOuterDiv = styled.div`
        margin: 0px;
`

const StyledDiv = styled.div`
        width: 100%;
        height: 634px;
        max-width: 100%;
        max-height: 634px;
        background: ${(props) => `url(${props.src})`}  no-repeat fixed center; 
        position: relative;
        background-attachment:scroll;
        background-size:cover;
        background-position: center;
        
        border-radius:20px;
        animation: animatedBackground ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
        overflow:hidden;
        @media (max-width: 1200px) {
          width:100%;
          max-width:100%;
          height: 450px;
          max-height: 450px;
          background-size:cover;    
        }

        @media (max-width:600px){
          width:100%;
          max-width:100%;
          height:450px;
          max-height:450px;
          background-size:cover;
          display:flex ; 
          flex-direction:column;

        }

        /* max-height: ${props => props.height === undefined?"53px":props.height};; */
        @keyframes animatedBackground {
            0% {
                opacity: .6;
            }
            100% {
                opacity: 1;
            }
        }
`

const StyledDiv2 = styled.div`
        position: relative;
        width: 100%;
        height: 506px;
        max-width: 100%;
        max-height: 506px;
        background: ${(props) => `url(${props.src})`}  no-repeat fixed center; 
        position: relative;
        background-attachment:scroll;
        background-size:cover;
        background-position: center;
        
        border-radius:20px;
        animation: animatedBackground ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;

        @media (max-width: 1200px) {
          width:100%;
          max-width:100%;
          background-size:cover;          
        }
        @media (max-width:600px){
          position:relative;
          width:100%;
          max-width:100%;
          height: 506px;
          background-size:cover;
        }

        /* max-height: ${props => props.height === undefined?"53px":props.height};; */
        @keyframes animatedBackground {
            0% {
                opacity: .6;
            }
            100% {
                opacity: 1;
            }
        }
`


const DivText = styled.div`
    position: absolute;
    left: 2%;
    bottom: 10%;
    height: auto;
    max-height: auto;
    width: 95%;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
    align-items: center;
    /* animation: 1s ease-out 0s 1 slideInFromLeft; */
    @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
    }
    @media (max-width:600px){
          position: relative;
          display:flex ; 
          width: 100%;
          flex-direction:column;
          gap: 10px;
          padding: 10px;
          height: 100%;
          align-items: flex-end;
          justify-content: flex-end;
          vertical-align: bottom;
    }
`

const DivText2 = styled.div`
    position: absolute;
    left: 58px;
    bottom:40px;
    height: 40px;
    max-height: 40px;
    animation: 1s ease-out 0s 1 slideInFromLeft;
    text-align: left;
    @keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
    }
`
const transitions = {
    entering: {
      display: 'block'
    },
    entered: {
      opacity: 0,
      display: 'block'
    },
    exiting: {
      opacity: 0,
      display: 'block'
    },
    exited: {
      opacity: '0',
      display: 'none'
    }
  };


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap:12px;
    position: relative;
    @media (max-width:600px){
          position: relative;
          width: 100%;
          display:flex ; 
          justify-content: center;
          align-items: center;
          flex-direction:row;
          gap: 5px;
          /* left: 20px; */
          /* bottom: 5px; */
    }
`

export const BannerLayout =(props)=>{
    return <StyledBannerDiv>
      <StyledOuterDiv>
        <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <StyledDiv src={props.src} style={{...transitions[state]}}>
                    <DivText> 
                      <H2 color="white" width= "100%" height="auto" weight="600">{props.title} </H2>
                      <ButtonContainer>
                        <KnowMoreButton onClick={props.KnowMoreHandler} />
                        <MeetUsButton onClick={props.contactUsHandler} />
                      </ButtonContainer>
                    </DivText>
                    
                </StyledDiv>}
        </CSSTransition></SwitchTransition>
        </StyledOuterDiv>
      </StyledBannerDiv>
    // return <Image src={props.src} width={"100%"} height={"634px"}/>
}

export const BannerWithTitleLayout =(props)=>{
    return <StyledBannerDiv>
      <StyledOuterDiv>
        <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <StyledDiv src={props.src} style={{...transitions[state]}}>
                    <DivText2> 
                      <H2 color="white" width= "100%" height="40px" weight="600">{props.title} </H2>
                    </DivText2>
                </StyledDiv>}
        </CSSTransition></SwitchTransition>
        </StyledOuterDiv>
      </StyledBannerDiv>
    // return <Image src={props.src} width={"100%"} height={"634px"}/>
}

const RightAlignContainer = styled.div`
 @media (max-width:600px){
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;
  align-items: flex-start;
 }
`

export const BannerWithTitleAndButtonLayout =(props)=>{
    return <StyledBannerDiv2>
      <StyledOuterDiv>
        <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <StyledDiv2 src={props.src} style={{...transitions[state]}}>
                    <DivText>
                      {/* <ColumnFlex> */}
                      <RightAlignContainer>
                        <H2 color="white" width= "100%" height="auto" weight="600">{props.title} </H2>
                      </RightAlignContainer>

                      <RightAlignContainer>
                        <MeetUsButton onClick={props.onClickHandler} />
                      </RightAlignContainer>
                        
                      {/* </ColumnFlex>  */}
                    </DivText>
                </StyledDiv2>}
        </CSSTransition></SwitchTransition>
        </StyledOuterDiv>
      </StyledBannerDiv2>
    // return <Image src={props.src} width={"100%"} height={"634px"}/>
}