import React from "react"
import { Slider } from "../../components/slider/slider"
import styled from "styled-components"

const Container =styled.div`
 padding-top: 72px;
 padding-left: 128px;
 padding-bottom: 40px;
 background-color: #F5F5F5;
`

export const TestimonialSliderLayout = (props) => {
    return(<Container>
          <Slider />
    </Container>)
}