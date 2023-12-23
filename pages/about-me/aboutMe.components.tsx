import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const HeaderArea = styled.div`
       display: flex;
       align-items: top;
       margin-top: 20px;

       @media screen and (max-width:800px) {
              display: block;         
              text-align: center;
       }
`;

export const MyPhoto = styled.div`
       width: 150px;
       height: 150px;
       border-radius: 50%;
       overflow: hidden;

       @media screen and (max-width:800px) {
              margin: auto;
              margin-bottom: 30px;
       }
`;

export const PhotoContainer = styled.div`
       display: flex;
       justify-content: center;
`;

export const InfoBox = styled.div`
       margin-left: 30px;
       flex: 1;
       
       @media screen and (max-width:800px) {
              margin-left: 0px;
       }
`;

export const MainTitle = styled.h1`
       font-size: 31px;
       margin-bottom: 2px;

       @media screen and (max-width:800px) {
              font-size: 28px;
       }
`;

export const SubTitle = styled.h2`
       text-align: left;
       font-size: 13px;

       @media screen and (max-width:800px) {             
              text-align: center;
       }

`;

export const ContactSmall = styled.div`
       position: relative;
       margin-bottom: 100px;
`;

export const Role = styled.div`
       margin-top:20px;
`;

export const Email = styled.a`
       display: block;
       transition: color 0.2s ease-in;              
       margin-bottom: 20px;

       &:hover {
              color: white
       }

       @media screen and (max-width:800px) {
              margin-top:20px;
       }
`;
