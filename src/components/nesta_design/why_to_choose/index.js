import styled from "styled-components"
import { WhyToChooseLayout } from "../../../layouts/why_to_choose_layout"
import React from "react"

const Container = styled.div`
    display: flex;
    flex-direction: row;
`

// const whyToChoose = {
//     "image":sampleImage,
//     "title":"Why Choose Florence",
//     "items":[
//         "Cherish Historical Significance", "Desire Opulence and Grandeur","Admire Intricate Details",
//         "Love Classical Art","Prefer Timeless Elegance","Embrace Cultural Richness"
//     ]
// }



export const WhyToChoose = (props) => {
    return(<Container>
            <WhyToChooseLayout  image={props.whyToChoose.image} title={props.whyToChoose.title} items={props.whyToChoose.items}/>
    </Container>)
}