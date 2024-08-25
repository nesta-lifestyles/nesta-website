import React from "react"
import { H1} from "../../../elements/text"
import styled from "styled-components"
import { ImageWithTextWithTitleLayout, TextWithTitleWithImageLayout, TitleTextImageInRowLayout, TitleTextImagesInRowLayout } from "../../../layouts/image_text_widget"
import highEndArchImage from "../../../images/ville/features/1.avif"

import highEndArcImgage2 from "../../../images/ville/banner_before_sus_arc.avif"

import temperature1 from "../../../images/ville/201/temperature_1.avif"
import temperature2 from "../../../images/ville/201/temperature_2.avif"
import temperature3 from "../../../images/ville/201/temperature_3.avif"

import efficientEngg from "../../../images/ville/features/3.avif"
import convAndEaseImage from "../../../images/ville/features/4.avif"
import transpereney from "../../../images/ville/features/5.avif"
import { BannerWithTitleLayout } from "../../../layouts/banner_layout"

const TitleContainer =styled.div`
     margin: 40px;
     @media (max-width:600px){
        margin: 0px;
    } 
     /* padding-left: 50px;
     height: 40px; */
`

const Container = styled.div`
    position: relative;
    margin: auto;
    width: 100%;
    display: grid;
    place-items: center; 
    align-items: center;
    justify-content: center;
`

const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;

    @media (max-width:600px){
        gap: 20px;
        width: 100%;
        overflow: hidden;
    } 
`

const highEndArchitecturalModelsText= "We offer a range of premium architectural models that capture design excellence. Our meticulously crafted models cater to various project needs, from modern aesthetics to classic charm. Trust us to bring your architectural vision to life with quality and sophistication."

const sustainableArchitecture = {
    "images":[temperature1,temperature2,temperature3],
    "title":"Sustainable Architecture",
    "text":"The Nestaville models integrate climate and temperature considerations to reduce energy consumption, minimize environmental impact, and enhance occupant comfort. This approach demonstrates our commitment to a greener, more resilient future where architecture harmoniously coexists with its surroundings."
}


const convenienceAndEase = {
    "image":convAndEaseImage,
    "title":"Convenience & Ease",
    "text":"From start to finish, Nesta coordinates every engineering stage. You’ll have a few key decisions to make, but then we’ll work with your chosen vendors and assist them through the entire construction."
}

const transperency = {
    "image":transpereney,
    "title":"Transparency",
    "text":"Transparency is paramount in the construction of your home, ensuring you are fully informed and engaged throughout the entire process. From design choices to material selections and construction milestones, we keep you updated every step of the way. This commitment gives you confidence and peace of mind as your dream home takes shape."
}

const EfficiencyEngineering = {
    "image":efficientEngg,
    "title":"Efficient Engineering",
    "text":"Efficiently engineered models represent a harmonious blend of form and function, meticulously designed to optimize space, energy, and materials. These eco-friendly homes offer sustainable living environments with aesthetic appeal, from sleek modern designs to timeless classics. They provide a practical and sustainable way of living for the future."
}

const bannerPage  ={
    "animation_flag":false,
    "image":highEndArcImgage2,
    "title":"Nestaville Series 200 -  Weimar"
}

export const NestaVilleFeatures = () => {
    return (<Container>
        <TitleContainer><H1 value="Features" color="black" height="40px" width="150px" /></TitleContainer>
        <FeatureContainer>
            {/* <Divder> */}
                <TextWithTitleWithImageLayout title="High-End Architectural models"  bg_color="black" text={highEndArchitecturalModelsText}
                image={highEndArchImage}/>
            {/* </Divder> */}
            <BannerWithTitleLayout animation_flag={bannerPage.animation_flag} src={bannerPage.image} title={bannerPage.title} />
            <TitleTextImagesInRowLayout text= {sustainableArchitecture.text} title= {sustainableArchitecture.title} images={sustainableArchitecture.images}/>
            <TitleTextImageInRowLayout title={EfficiencyEngineering.title}  bg_color="black" text={EfficiencyEngineering.text}
            image={EfficiencyEngineering.image}/>
            <TextWithTitleWithImageLayout title={convenienceAndEase.title}  bg_color="black" text={convenienceAndEase.text}
            image={convenienceAndEase.image}/>
            <ImageWithTextWithTitleLayout title={transperency.title}  bg_color="black" text={transperency.text}
            image={transperency.image}/>
        </FeatureContainer>
    </Container>)


}