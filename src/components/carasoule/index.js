import Carousel  from "react-bootstrap/Carousel";
import React from "react";
import "./ind.css"
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from "../../elements/image";


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
    height:720px;
    max-width: 100% !important;
    /* max-height: 720px !important; */
    z-index: 0;
    @media (max-width:600px){
      /* width:100% !important; */
      height:100%;
      /* overflow: hidden; */
      border-radius: 17px;
    } 

`

const ImageContainer =styled.div`
  width: 100%;
  height: 650px;
  border-radius: 16px; 
  overflow: hidden;
  @media (max-width:600px){
      /* width:100% !important; */
      /* max-width:100% !important; */
      height: 450px;
  } 
`

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  
  @media (max-width:600px){
    height: 100%;    
    display: block;   
  } 
`;

export const LocalCarousel = (props) => {
    console.log('Images', props.data);
  // const [currentSlide, setCurrentSlide] = useState(0);

    
    
    // const handleSlideChange = (index) => {
    //   setIndex(index);
    // };
  
    const handleSelect = (selectedIndex, e) => {
      props.updateIndex(selectedIndex);
    };

    return (
      <CarouselContainer>
        <Carousel fade activeIndex={props.index} onSelect={handleSelect}  interval ={null} indicators={false} controls={false} >
                    {props.data.map((slide, i) => {
                      console.log('SLIDE',slide);
                      console.log('ACTIVE INDEX',props.index);
                        return (
                        <Carousel.Item>        
                           <ImageContainer>
                            <StyledImage src={slide}/>
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