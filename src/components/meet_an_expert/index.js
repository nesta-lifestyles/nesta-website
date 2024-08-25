import * as React from "react";
import styled from "styled-components";
import { H2, Text } from "../../elements/text";
import { MeetUsButton } from "../../elements/button/know_more";
import { useDispatch } from "react-redux";
import { openOverlay } from "../overlay/overlay_reducer";

/**
 * 
 * meetAnExpertData:{
 *   "title":"",
 *    "text":"",
 *    "image":""
 * }
 */


export default function MeetAnExpert(props) {
  const dispatch = useDispatch();
  const contactUsHandler = (props) => {
        dispatch(openOverlay())
  }

  console.log("MEET AN EXPERT DATA - "+JSON.stringify(props))
  return (
    <Div>
      <Div2>
        <Column>
          <Img
            loading="lazy"
            srcSet={props.meetAnExpert.image}
          />
        </Column>
        <Column2>
          <Div3>
            <H2 width="100%" color="white" height="auto">{props.meetAnExpert.title} </H2>
            <Text color="white"  height="auto" width="100%">{props.meetAnExpert.text}</Text>
            <MeetUsButton onClick={contactUsHandler} />
          </Div3>
        </Column2>
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  background-color: #141414;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
`;

const Div2 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
    max-height: 315px;
    height: 315px;
  }
`;

const Img = styled.img`
  aspect-ratio: 1.08;
  object-fit: auto;
  object-position: center;
  width: 100%;
  flex-grow: 1;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    max-height: 315px;
    height: 315px;
  
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  text-align: start;
  justify-content: start;
  align-items: flex-start;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: auto 0;
  padding: 0 20px;
  align-items: start;
  justify-content: left;
  gap:20px;
  text-align: left;
  @media (max-width: 991px) {
    position: relative;
    max-width: 100%;
    padding: 10px;
    margin-top: 20px;
    text-overflow: wrap;
    gap:0px;
    /* padding: 0px; */
  }
`;

