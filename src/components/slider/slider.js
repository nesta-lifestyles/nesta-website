import React from "react"
import styled from "styled-components"
import { Slide } from "./slide"
import { Controls } from "./slide_controls"

const StyledUl = styled.ul`
    display: flex;
    gap: 24px;
    margin: 24px;
    position: absolute;
    transition: transform var(--base-duration) cubic-bezier(0.25, 1, 0.35, 1); 
`

const Container = styled.div`
    display: flex;
    gap: 120px;
    flex-direction: column;
`

const StyledSlider = styled.div`
 --slide-size: 70vmin;
  --slide-margin: 4vmin;
  /* display: flex;
  flex-direction: column; */
  height: var(--slide-size);
  margin: 0 auto;
  position: relative;
  width: var(--slide-size);

`

export class Slider extends React.Component {
        
    constructor(props) {
        super(props)
        this.state = {current:0}
        this.handlePreviousClick = this.handlePreviousClick.bind(this)
        this.handleNextClick = this.handleNextClick.bind(this)
        this.handleSlideClick = this.handleSlideClick.bind(this)
    }

   
    handlePreviousClick() {
        const previous = this.state.current - 1
        this.setState({ 
            current: (previous < 0) 
              ? 3 - 1
              : previous
          })     
   

    }

    handleNextClick() {
        const next = this.state.current + 1;
    
        this.setState({ 
          current: (next === 3) 
            ? 0
            : next
        })
    }

    handleSlideClick() {

    }

    render() {
         const wrapperTransform = {
            'transform': `translateX(-${this.state.current * (100 / 3)}%)`
          }
        return(
            <Container>
                <StyledSlider>
                    <StyledUl style={wrapperTransform}>
                    <Slide />
                    <Slide />
                    <Slide />
                    </StyledUl>
                </StyledSlider>
                <Controls OnNextClick={this.handleNextClick} OnPrevClick={this.handlePreviousClick}/>                
            </Container>
        )
    }

}

