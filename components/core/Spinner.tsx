import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';


function Spinner({ circleColor = "rgba(255, 255, 255, 0.3)", arcColor = "#000", width = 100, height = 100, speed=600 }) {

       return (
              <SpinSvg viewBox="0 0 100 100" version="1.0" width="100" height="100" style={{width, height}} speed={speed}>
                     <circle cx="50" cy="50" r="40" fill="transparent"
                            stroke={circleColor} strokeWidth="10" />
                     <Path d="M 10 50 a 40 40 0 0 1 40 -40" stroke={arcColor}
                            strokeWidth="10" fill="transparent">
                     </Path>
              </SpinSvg>
       );
}

const spinAnimation = keyframes`
       from {
              transform: rotate(0deg);
       }
       to {
              transform: rotate(360deg);
       }       
`;

const SpinSvg = styled.svg<{speed:number}>`
       animation: ${spinAnimation} ${props=> props.speed}ms linear infinite;
`

const Path = styled.path`       
       transform-origin: 50px 50px;
`;

export default Spinner;