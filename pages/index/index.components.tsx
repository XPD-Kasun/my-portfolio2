import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const TitleArea = styled.div`

`;

export const Title = styled.h1`
       text-align: center;
       font-size: 30px;
       margin-bottom: 30px;
`;

export const SubTitle = styled.div`
       font-size: 22px;
       font-family: SFMono, monospace;
       color: #fff;
`;

export const BodyArea = styled.div`

       p {
              font-size: 18px;
              font-family: SFMono, monospace;
       }

`;

export const MenuArea = styled.div`
       margin-top:30px;
       padding-bottom: 30px;
       font-family: SFMono, monospace;
`;

export const MenuItem = styled.div`
       padding-left: 40px;
       margin-bottom: 5px;
       position: relative;
       font-size: 20px;
       cursor: pointer;
       font-family: inherit;

       @media screen and (max-width: 800px){
              font-size:18px;
              color: white;
       }

       &.selected {
              &:before {
                     content: '>';
                     display: block;
                     position: absolute;
                     top: -2px;
                     left: 10px;
                     font-size: 20px;
                     height: 33px;
                     transform-origin: center;
                     animation: Float 0.5s infinite linear alternate-reverse;
                     backface-visibility: visible;
              }
              color: #ffc107;
       }

`;

const swing = keyframes`
       0% {
              transform: rotate(-10deg);
       }
       
       100% {
              transform: rotate(10deg);
       }
       
`;

export const MusicBox = styled.div`
       position: absolute;
       bottom: 16px;
       right: 20px;
       cursor: pointer;
       padding: 7px;
       border: 2px solid #00f600;
       border-radius: 20px;
       width: 40px;
       height: 40px;
       display: flex;
       justify-content: center;
       align-items: center;

       &.playing {
              animation: ${swing} 0.5s linear alternate infinite;
       }
`;
