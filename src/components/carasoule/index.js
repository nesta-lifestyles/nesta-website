import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import "./ind.css"
import styled from "styled-components";


/**
 * data format: const data = [
  {
   image: require('./images/image1.jpg'), 
  },
  {
    image:require('./images/image2.jpg'), 
   },
   {
    image:require('./images/image3.jpg'), 
   } 
]
 */

const CarouselContainer = styled.div`
    position: relative;
    width:100% !important;
    height:720px !important;
    max-width: 100% !important;
    max-height: 720px !important;
    z-index: 0;
    @media (max-width:600px){
      width:100% !important;
      height:450px !important;
      /* overflow: hidden; */
      border-radius: 17px;
    } 

`

const ImageContainer =styled.div`
  width: 100%;
  
  @media (max-width:600px){
      width:100% !important;
      max-width:100% !important;
      /* height:450px !important; */
  } 
`

const BannerImageContainer = styled.div`
    /* display: flex; */
    transition: transform .4s;
    object-fit: cover;
    width: 100%;
    height: 650px;
    max-height: 650px;
    max-width: 100%;
    background: ${(props) => `url(${props.src})`}  no-repeat fixed center; 
    position: relative;
    background-attachment:scroll;
    background-size:cover;
    background-position: center;
    border-radius:20px;
    @media(max-width:600px) {
        height: 600px;
        width: 100%;
    }
    
    /* &:hover {
        transform: ${props => props.isTransformOnHover? "scale(1.2)" :" scale(1)"};
        transform-origin: ${props => props.isTransformOnHover?"50% 50%": "0% 0%"};       
    } */
`

export const LocalCarousel = (props) => {
  // const [currentSlide, setCurrentSlide] = useState(0);

    
    
    // const handleSlideChange = (index) => {
    //   setIndex(index);
    // };
  
    const handleSelect = (selectedIndex, e) => {
      props.updateIndex(selectedIndex);
    };

    return (
      <CarouselContainer>
        <Carousel fade activeIndex={props.index} onSelect={handleSelect}  interval ="1000" indicators={false} controls={false} >
                    {props.data.map((slide, i) => {
                        return (
                        <Carousel.Item>        
                           <ImageContainer>
                            <BannerImageContainer
                              height={props.height}
                              width="100%"
                              src={slide}
                              alt="slider image"
                              />
                           </ImageContainer> 
                        </Carousel.Item>
                ) 
              })} 
       </Carousel>
      {/* <div className="carousel-controls left">
                <PrevIndicator onClick={handlePrev} />
      </div>  
      <div className="carousel-controls right">          
        <NextIndicator className="right"  onClick={handleNext} />
      </div> */}
      </CarouselContainer>
        
    );
}