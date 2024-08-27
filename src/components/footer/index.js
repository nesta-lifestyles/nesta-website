import * as React from "react";
import styled from "styled-components";
import Logo from "./logo_white.svg"
import { RightCornerLayout } from "../../layouts/footer";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Div>
      <Div2>
        <IconDiv>
        <Img
          loading="lazy"
          srcSet={Logo}
        />          
        </IconDiv>
          <Div4>
          <Column>
              <Div5>
                <Div6>PRODUCTS</Div6>
                <Div7 to="/ville">Nestaville</Div7>
                <Div7 to="/design">Nesta Design </Div7>
                <Div7 to="/decor">Nesta Decor</Div7>
              </Div5>
            </Column>
            <Column>
              <Div5>
                <Div6>NESTAVILLE</Div6>
                <Div7 to="/ville/weimar">Weimar</Div7>
                <Div7 to="/ville/essence">Essence</Div7>
                <Div7 to="/ville/classica">Classica</Div7>
                <Div7 to="/ville/arcadia">Arcadia</Div7>
                <Div7 to="/ville/evoque">Evoque</Div7>
              </Div5>
            </Column>
            <Column2>
              <Div9>
                <Div6>NESTA DESIGN</Div6>
                <Div7 to="/design/florence">Florence</Div7>
                <Div7 to="/design/equinox">Equinox</Div7>
                <Div7 to="/design/contour">Contour</Div7>
                <Div7 to="/design/serendi">Serendi</Div7>
              </Div9>
            </Column2>
          </Div4>
        <div>
          <RightCornerLayout />
        </div>
      </Div2>
      <Div19 />
      <Div20>
        <Div21>
          <Div24 to="/terms-of-service">Terms of service</Div24>
          <Div23 />
          <Div24  to="/privacy-policy">privacy policy</Div24>
          <Div25 />
          <Div26>do not sell my personal information</Div26>
        </Div21>
        <div>
        <IconDiv2>
        <Img
          loading="lazy"
          srcSet={Logo}
        />          
        </IconDiv2>
        <Div27>© 2024 Nesta Company</Div27>
        </div>
      </Div20>
    </Div>
  );
}

const Div = styled.div`
  border-radius: 20px 20px 0px 0px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    padding-bottom: 210px;
  }
`;

const Div2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  padding: 70px;
  gap: 100px;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 991px) {
    max-width: 100%;
    gap: 30px;
    padding: 20px;
    flex-wrap: wrap;
  }
`;

const Img = styled.img`
  aspect-ratio: 0.79;
  object-fit: auto;
  object-position: center;
  width: 78px;
  align-self: start;
`;

const Div4 = styled.div`
  gap: 75px;
  display: flex;
  text-align: left;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0px;
  }
`;

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 164%;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Div6 = styled.div`
  color: #767676;
  letter-spacing: 4.2px;
  font: 14px Poppins, sans-serif;
  user-select: none;
  
`;

const Div7 = styled(Link)`
  font-family: Poppins, sans-serif;
  margin-top: 10px;
  opacity: 0.8;
  transition: 0.35s;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: white;
  &:hover{
    opacity: 1;
    transition: 0.35s;
    transform: scale(1.05);
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 100%;
  margin-left: 20px;
  @media (max-width: 991px) {
    margin-left: 0px;
    width: 100%;
  }
`;

const Div9 = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  line-height: 164%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;


const Div19 = styled.div`
  border-color: rgba(56, 56, 56, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #383838;
  align-self: stretch;
  min-height: 1px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Div20 = styled.div`
  display: flex;
  margin:20px;

  width: 100%;
  max-width: 100%;
  gap: 20px;
  font-size: 14px;
  color: #878f9c;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 164%;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 0px;
    gap: 70px;
    padding: 0px;
    justify-content: center;
    text-align: center;
  }
`;

const Div21 = styled.div`
  display: flex;
  gap: 11px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding-top: 90px;
    gap:24px;
  }
`;


const Div23 = styled.div`
  border-color: rgba(255, 255, 255, 0.11);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 0.11);
  width: 1px;
  height: 23px;
  @media (max-width: 600px){
    display: none;
  }
`;

const Div24 = styled(Link)`
  /* font-family: Outfit, sans-serif; */
  user-select: none;
  text-decoration: none;
  color: #878f9c;

`;

const Div25 = styled.div`
  border-color: rgba(255, 255, 255, 0.11);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 0.11);
  width: 1px;
  height: 23px;
  @media (max-width: 600px){
    display: none;
  }
`;

const Div26 = styled.div`
  font-family: Outfit, sans-serif;
`;

const Div27 = styled.div`
  font-family: Outfit, sans-serif;
`;


const IconDiv = styled.div`
  @media(max-width:600px) {
      display: none;
  }
`

const IconDiv2 = styled.div`
  @media(min-width:600px) {
      display: none;
  }
`