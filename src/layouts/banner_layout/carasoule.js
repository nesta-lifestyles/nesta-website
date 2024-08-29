import React from "react"
import firstImageMobile from "../../images/banner/3.avif"
import second from "../../images/ville/203/banner_1.avif"
import third from "../../images/ville/200/banner_1.avif"
import fourth from "../../images/designs/nesta_design_101/gallery_h_1_2.avif"
import { Carousel } from "react-bootstrap"
import { Title } from "../../components/banner/title"
import styled from "styled-components"





const images =[firstImageMobile,second,third,fourth]
//   }
//   return [firstImage, second, third, fourth]
// } 


/**
 * banner_data:[{  
 *    image:"",
 *    title:{
 *      normal:{
 *        value:"",
 *        color:""
 *       },
 *      highlight:{
 *        value:"",
 *        color:""
 *        } 
 *    }
 * }]
 */



const BannerImageContainer = styled.div`
    /* display: flex; */
    transition: transform .4s;
    object-fit: cover;
    width: 100%;
    height: 675px;
    max-height: 675px;
    max-width: 100%;
    background: ${(props) => `url(${props.src})`}  no-repeat fixed center; 
    position: relative;
    background-attachment:scroll;
    background-size: cover;
    background-position: center;
    border-radius:20px;
    @media(max-width:600px) {
        object-fit: fill;
        height: 450px;
        max-height: 450px;

        width: 100%;
    }
    
    /* &:hover {
        transform: ${props => props.isTransformOnHover? "scale(1.2)" :" scale(1)"};
        transform-origin: ${props => props.isTransformOnHover?"50% 50%": "0% 0%"};       
    } */
`



const Titles = ["Nesta Design - The Intersection of Art and Design", 
  "Nestaville - Where Artistry Meets Architecture",
   "Nestaville - Where Artistry Meets Architecture",
   "Nesta Design - The Intersection of Art and Design"]
const Links = ["/design", "/ville", "/ville", "/design"]
const ColorCodes = ["#FFA652", "#7A7369", "#658354","#658354"]

export const CarouselLocal = (props) => {
    return(<Carousel fade interval ="1000" indicators={false} controls={false} pause={false} >
        {images.map((slide, i) => {
            return (
            <Carousel.Item>      
                  
               {/* <ImageContainer> */}
                <BannerImageContainer src={slide} className="w-full max-w-screen-lg mx-auto p-4">
                  {/* <p>SLIDE</p> */}
                  <Title animationflag = {false} title={Titles[i]} link={Links[i]} color_codes={ColorCodes[i]} handleMeetUsButton ={props.handleMeetUsButton}/>  
                </BannerImageContainer>
               {/* </ImageContainer>  */}
            </Carousel.Item>
    ) 
  })} 
</Carousel>)
}