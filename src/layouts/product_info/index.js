
import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


const Div = styled.div`
  display: flex;
  flex-direction: row;
  fill: #fff;
  stroke-width: 1px;
  stroke: #e2e2e2;
  filter: drop-shadow(0px 24px 34px rgba(52, 52, 52, 0.16));
  overflow: hidden;
  position: relative;
  min-height: 284px;
  max-height: 284px;
  max-width: 735px;
  border-radius:17px;
  text-align: left;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Img = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 16px;
  object-position: center;
`;

const Div2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div3 = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
  margin-top: 20px;
  padding-top: 34px;
  padding-left: 32px;
  border-right-style: solid;
  border-right-color: #E2E2E2;
  border-right-width:1px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color:#E2E2E2;
  cursor: pointer;
`;

const Img2 = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 69px;
  max-width: 69px;
  max-height: 65px;
  border-radius: 14px;
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div5 = styled.div`
  color: #141414;
  font: 500 14px Poppins, sans-serif;
`;

const Div6 = styled.div`
  color: #6f6f6f;
  font: 300 12px/18px Poppins, sans-serif;
`;

const Div7 = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
  padding-top: 30px;
  padding-left: 32px;
  border-right-style: solid;
  border-right-color: #E2E2E2;
  border-right-width:1px;
  cursor: pointer;
`;

const Img3 = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 69px;
  max-width: 69px;
  max-height: 65px;
  border-radius: 14px;
`;

const Div8 = styled.div`
  display: flex;
  flex-direction: column; 
`;

const Div9 = styled.div`
  color: #141414;
  font: 500 14px Poppins, sans-serif;
`;

const Div10 = styled.div`
  color: #6f6f6f;
  font: 300 12px/18px Poppins, sans-serif;
`;

const Div11 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const Div12 = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
  margin-top: 54px;
  padding-left: 32px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color:#E2E2E2;
  cursor: pointer;

`;

const Img4 = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 69px;
  max-width: 69px;
  max-height: 65px;
  border-radius: 14px;
`;

const Div13 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div14 = styled.div`
  color: #141414;
  font: 500 14px Poppins, sans-serif;
`;

const Div15 = styled.div`
  color: #6f6f6f;
  font: 300 12px/18px Poppins, sans-serif;
`;

const Div16 = styled.div`
  display: flex;
  gap: 12px;
  flex: 1;
  flex-grow: 1;
  flex-basis: auto;
  margin-top: 30px;
  padding-left: 32px;
  cursor: pointer;
`;

const Img5 = styled.img`
  aspect-ratio: 1.06;
  object-fit: auto;
  object-position: center;
  width: 69px;
  max-width: 69px;
  max-height: 65px;
  border-radius: 14px;
  border: black 2px;
  
`;

const Div17 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div18 = styled.div`
  color: #141414;
  font: 500 14px Poppins, sans-serif;
`;

const Div19 = styled.div`
  color: #6f6f6f;
  font: 300 12px/18px Poppins, sans-serif;
`;



/**
 *  ProductInfoList :{
 *     products_info: [{
 *              title:
 *              description:
 *              image: 
 * }
 * ]
 * }
 */



export const ProductInfo = (props) => {
    const navigate = useNavigate();
    
    const handleClick = (index) => {
        navigate(props.product_info[index].path)
    };

    return(  <Div>
        <Img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cf388a287d1aabb6624dc241d5262468166a80ee5ad4d25e815997c63c0213f?"
        />
        <Div2>
           <Div3 onClick={() => handleClick(0)}>
            <Img2
              loading="lazy"
              srcSet={props.product_info[0].image}
            />
            <Div4>
              <Div5>{props.product_info[0].title}</Div5>
              <Div6>{props.product_info[0].description}</Div6> 
            </Div4>
          </Div3>
          <Div7 onClick={() => handleClick(1)}>
            <Img3
              loading="lazy"
              srcSet={props.product_info[1].image}
            />
            <Div8>
              <Div9>{props.product_info[1].title}</Div9>
              <Div10>{props.product_info[1].description}</Div10>
            </Div8>
          </Div7>
        </Div2>
        <Div11>
          <Div12 onClick={() => handleClick(2)}>
            <Img4
              loading="lazy"
              srcSet={props.product_info[2].image}
            />
            <Div13>
              <Div14>{props.product_info[2].title}</Div14>
              <Div15>{props.product_info[2].description}</Div15>
            </Div13>
          </Div12>
           <Div16 onClick={() => handleClick(3)}>
            <Img5
              loading="lazy"
              srcSet={props.product_info[3].image}
            />
            <Div17>
              <Div18>{props.product_info[3].title}</Div18>
              <Div19>{props.product_info[3].description}</Div19>
            </Div17>
          </Div16> 
        </Div11>
      </Div>)
}