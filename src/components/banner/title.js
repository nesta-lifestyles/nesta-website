import styled from "styled-components"
import {CSSTransition, SwitchTransition, Transition} from 'react-transition-group';
import { H1 } from "../../elements/text";
import React from 'react';

const DivText = styled.div`
    position: absolute;
    left: 58px;
    bottom: 42px;
    z-index: 1;
    animation: 1s ease-out 0s 1 slideInFromLeft;
    @media (max-width:600px){
      position: absolute;
      left: 15px;
      bottom: 12px;
    }
    @keyframes slideInFromLeft {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(0);
        }
    }
`

const transitions = {
    entering: {
      display: 'block'
    },
    entered: {
      opacity: 1,
      display: 'block'
    },
    exiting: {
      opacity: 0,
      display: 'block'
    },
    exited: {
      opacity: '0',
      display: 'none'
    }
  };

export const Title = (props) => {
    return <SwitchTransition made="out-in">
    <CSSTransition key={props.animationflag} 
     timeout={300} 
     classNames={{enterActive: 'animate__animated animate__flipInX', exitActive: 'animate__animated animate__flipOutX'}}>
       {state => <DivText style={{
                    ...transitions[state]
            }}>
            <H1 value={props.title} color="white" width= "200px" height="72px"/>
        </DivText>}
    </CSSTransition>
</SwitchTransition>
}