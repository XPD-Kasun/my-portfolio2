import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const minimize =  keyframes`
       0% {
              transform: translateX(-50%) scale(1);
              opacity: 1;
       }

       100% {
              transform: translateX(-50%) scale(0.1);              
              opacity: 0;
       }
`;

const normal = keyframes`
       0% {
              transform: translateX(-50%) scale(0.1);              
              opacity: 0;
       }

       100% {
              transform: translateX(-50%) scale(1);
              opacity: 1;
       }
`;

const maximize = keyframes`
       0% {
              width: 50%;
              height: 50vh;
       }

       100% {
              width: 100%;
              height: 100vh;
       }
`;

export const BoxContainer = styled.main`
       border: 2px solid #0db70d;
       //border-top: 30px solid #0db70d;
       position: fixed;
       border-radius: 20px 0;
       backdrop-filter: blur(3px);
       height: 50vh;
       width: 70%;
       color: #00f600;
       background: rgba(44, 18, 85, 0.6);
       overflow: auto;
       transition: all 0.2s linear;
       will-change: width, height;
       outline: hidden;
       z-index: 3;


       &.minimized {
              opacity: 0;
              width: 5%;
              height: 10vh; 
       }  
       
       &.normal {
              width: 70%;
              height: 50vh;
              max-width: 850px;    
       }
       
       &.maximized {
              width: 95%;
              height: calc(100vh - 70px);              
       }

       @media screen and (max-width:768px) {
              width: 90%;

              &.normal {
                     width: 90%;
                     height: 80vh;
              }

       }
`;

export const BoxWrap = styled.div`
       padding: 20px;
       font-family: 'Consolas', 'Courier New', Courier, monospace;
       outline: none;
       height: 100%;
       overflow: auto;
       padding-top: 30px;
`;

export const BoxTitleBar = styled.div`
       position: absolute;
       top: 0;
       left:0;
       width: 100%;
       height: 30px;
       background: #0db70d;
       display: flex;
       justify-content: flex-end;
       align-items: center;
       z-index: 300;
`;

export const ToolDock = styled.div`
       margin-right: 10px;
`;

export const HomeBtn = styled.div`
       display: flex;
       justify-content: center;
       align-items: center;
       width: 25px;
       height: 25px;
       border-radius: 13px;
       border: 1px solid #1a0b33;
       background: #1a0b33;
       cursor: pointer;
`;
