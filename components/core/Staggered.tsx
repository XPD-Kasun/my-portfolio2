import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useRef } from "react";


function Staggered({ children, style={} }) {

       let id = useRef(1);


       id.current = 1;

       return (
              <StaggerContainer style={style}>
                     {
                            React.Children.map(children, (child) => {

                                   return React.cloneElement(child, {
                                          style: {
                                                 "--index": id.current++,
                                                 ...child.props.style
                                          }
                                   })
                            })
                     }
              </StaggerContainer>
       );

}

const appear = keyframes`
       0% {
              opacity: 0;
              transform: translateY(30px);
       }
       
       100% {
              opacity: 1;
              transform: translateY(0px);
       }
`

const StaggerContainer = styled.div`

       & > div, & > p, & > img, & > h2 {                 
              animation: ${appear} 1s cubic-bezier(0.17, 0.85, 0.45, 1);
              animation-delay: calc(var(--index) * 200ms);
              animation-fill-mode: both;
       }
`

export default Staggered;