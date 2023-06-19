import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const IconContainer = styled.div`
    display:  flex;
    flex-direction: row;
    /* background-color: black; */
    border-radius: 16px;
    gap: 20px;
    @media (max-width:600px){
        flex-direction: row;
        padding-top: 10px;
        display: flex;
        justify-content: flex-start;
    }
`
const IconTag = styled.div`
    width: 100px;
    height: 100px;
`

const IconMouseOver= (e)=>{
    console.log("TOUCED")
    e.target.style.color = "white";
}

const IsMouseDown = (e) => {
    e.target.style.color = "white";
}

export const NestaSocialBar = () => {
    return <>
        <IconContainer>
            {/* <IconTag>
                
            </IconTag> */}
            <FontAwesomeIcon icon={faTwitter} color="white" size="2x" onMouseEnter={IconMouseOver} onMouseOver={IconMouseOver} onMouseOut={IsMouseDown} />
            <FontAwesomeIcon icon={faInstagram} color="white" size="2x" onPointerMove={IconMouseOver} onMouseEnter={IconMouseOver} onMouseOver={IconMouseOver} onMouseOut={IsMouseDown} />
            <FontAwesomeIcon icon={faLinkedin} color="white" size="2x"onMouseEnter={IconMouseOver} onMouseOver={IconMouseOver} onMouseOut={IsMouseDown} />
            <FontAwesomeIcon icon={faFacebook} color="white" size="2x"onMouseEnter={IconMouseOver} onMouseOver={IconMouseOver} onMouseOut={IsMouseDown} />
            <FontAwesomeIcon icon={faPinterest}color="white"  size="2x" onMouseEnter={IconMouseOver} onMouseOver={IconMouseOver} onMouseOut={IsMouseDown}/>
        </IconContainer>
    </>
}