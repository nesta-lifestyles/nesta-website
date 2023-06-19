import styled from "styled-components"
import {H1WithSize, Text, Title } from "../../elements/text"
import { Link } from "react-router-dom"

const TextContainer = styled.div`
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    @media (max-width:600px){
            gap: 5px;
       
    }

`
const StartContainer = styled(Link)`
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
    display: flex;
    position: relative;
    gap: 0px;
    text-decoration: none;
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 20px;
        left: 0;
        /* background-color: #878383; */
        transform-origin: bottom right;
        transition: transform 0.35s ease-out;
    }
    :hover{
        scale: 1.1;
        transition: all .35s  ease-out;
    }
    &:hover::after{
        text-decoration: underline;
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`

const TitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`


export const ForFooter = (props) =>{
        const rows = [];
        for (let index = 0; index < props.arrayOfNames.length; index++) {
            console.log(props.arrayOfNames[index]['name'])
            var url = ""
            if(props.arrayOfNames[index]["name"] ==="Contact Us"){
                url = "/contact-us" 
            }
            rows.push(<StartContainer to={url}>
                    <Text value={props.arrayOfNames[index]["name"]} width="auto" height="auto" size="15px" color="white"/>
                </StartContainer>);

        }
        return <>
                <TextContainer>
                   <TitleContainer>
                     <H1WithSize  value={props.title} width="auto" height="auto" size="20px" color="white"/>
                    </TitleContainer> 
                     {rows}
                </TextContainer> 
               </>
}