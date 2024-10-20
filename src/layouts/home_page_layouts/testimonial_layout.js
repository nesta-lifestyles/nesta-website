import { isEdge } from "react-device-detect";
import { H2, SmallText, Text } from "../../elements/text";
import { Image } from "../../elements/image";
import sideImage from "../../images/designs/nesta_design_103/meet_an_expert.avif"
import styled from "styled-components";

const MainContainer = styled.div`
    position: relative;
    width: 700px;
    height: 300px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    padding: 10px;
    @media (max-width: 600px) {
        width: 328px;
        height: 554px;
        flex-direction: column;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 30px;
    border-radius: 16px;
    gap: 30px;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 1rem -4px #000;
    @media (max-width: 600px) {
        flex-direction: column;
        padding: 15px;
        gap: 20px;
    }
`

const TextContainer =styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
`


const TitleContainer =styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    
`

const ImageContainer =styled.div`
    width: 100%;
    height: 100%;
    height: 260px;
    max-height: 260px;
    border-radius: 12px;
    overflow: hidden;
    @media (max-width: 600px) {
        height: 255px;
        max-height: 255px;
        max-width: 277px;
        
    }
`

const ItalicText = styled.p`
  font-style: italic;
   // Optional: Customize color or other styles
`;

const SubText = styled.p`
  font-size: 0.8em; /* Smaller size for subtext */
  color: #666; 
  margin: 0px;
  align-self: baseline;
  align-items: baseline;
  margin-top: 5%;
`;


const QuoteIcon = styled.span`
  font-size: 2em;
  color: #007bff;
  position: absolute;
  top: -10px;
  left: -10px;
`;

const QuoteIconStart = styled.span`
  font-size: 3em;
  color: #007bff;
  /* position: absolute; */
  top: -10px;
  left: 10px;
`;

const QuoteIconEnd = styled.span`
  font-size: 3em;
  color: #007bff;
  /* position: absolute; */
  bottom: -10px;
  right: 10px;
  transform: rotate(180deg);
`;



export const TestinmonialLayout = (props) => {
    return(<MainContainer>
                <Container>
                <ImageContainer>
                    <Image src={props.testimonial.sideImage} />
                </ImageContainer>
                <TextContainer>
                    <Text height="auto" width="100%">
                        <ItalicText>
                        <q>
                        <span>
                        {props.testimonial.review}
                        </span>
                        </q> 
                        </ItalicText>
                    </Text>
                    <TitleContainer>
                        <H2 height="auto" width="auto">- {props.testimonial.name}</H2>
                        <SubText>
                            {props.testimonial.subtext}
                        </SubText>
                    </TitleContainer>
                </TextContainer>
            </Container>
        </MainContainer>)
}
