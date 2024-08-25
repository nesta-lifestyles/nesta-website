import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { ExploreButton } from "../../../elements/button/know_more"

const ExploreComponent = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    min-height: 396px;
    width: 100%;
    align-items: start;
    padding: 80px 80px 35px 38px;
    border-radius: 20px;
    background-color: black;
    @media (max-width: 991px) {
        padding: 0 20px;
        width: 100%;
    }
`

const TextContainer = styled.div`
    position: relative;
    color: #fff;
    text-transform: capitalize;
    margin-top: 140px;
    font-size: 20px;
    font-weight: 600;
    font: 600 20px Poppins, sans-serif;
    @media (max-width: 991px) {
       height: 100%;
       text-align: end;
       margin-top:90%;
       font-size: 16px;
    }
`

const StyledImage = styled.img`
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.75;
    &:hover{
        transition: 0.35s;
        transform: scale(1.05);
        opacity: 1.0;
    }
    /* @media (max-width: 991px) {
       
    } */
`

export const ExploreModels = (props) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(props.model.path)
    };

    return (<ExploreComponent key={props.model.title} >
                <StyledImage className="onHover" loading="lazy" srcSet={props.model.image}  />
                <TextContainer>{props.model.title}</TextContainer>
                <ExploreButton onClick={handleClick} />
            </ExploreComponent>)
}