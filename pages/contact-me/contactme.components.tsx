import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Button from "../../components/core/Button";


export const ContactFormContainer = styled.div`
       border-radius: 10px;
       margin: 50px auto;
       overflow: hidden;
       & div { 
              font-family: 'Nunito';
       }
`;

export const ContactForm = styled.div`
       display: flex;
       padding: 0px;

       @media screen and (max-width:800px) {
              display: block;
       }
`;

export const IntroArea = styled.div`
       flex: 2;
       position: relative;
       min-height: 300px;

       @media screen and (max-width: 800px) {
              min-height: 200px;
       }
`;

export const ImageHolder = styled.div`
       position: absolute;
       background: url(/contactus-bg.png);
       background-size: cover;
       inset: 0;
       z-index: 1;
`;

export const Overlay = styled.div`
       position: absolute;
       inset: 0;
       z-index: 2;
       padding: 20px;
`;

export const Title = styled.div`
       font-size: 26px;
       color: white;
       margin-bottom: 40px;
`;

export const Subtitle = styled.div`
       font-size: 18px;
       line-height: initial;
       color: #f39099;
       margin-bottom: 5px;

       @media screen and (max-width: 500px) {
              font-size: 15px;
       }
`;

export const FormArea = styled.div`
       background-color: white;
       flex: 3;
`;

export const FormContainer = styled.div`
       padding: 20px;
`;

export const FormGroup = styled.div`
       margin-bottom: 10px;
       width: 100%;
`;

export const FormLabel = styled.div`
       color: #3d1e8f;
       text-shadow: none;
       font-size: 14px;
       font-weight: bold;
`;

export const ChoiceContainer = styled.div`
       display: flex;
       flex-wrap: wrap;
`;

export const ChoiceBox = styled.div<{ value: string }>`
       padding: 5px 10px;
       border: 1px solid #a3a3a3;
       margin: 3px;
       color: black;
       cursor: pointer;
       font-weight: normal;
       font-size: 12px;
       text-shadow: none;

       &.selected {
              border: 1px solid #4c2ca0;
              background: #4c2ca0;
              color: white
       }
`;

export const Icon = styled.div`
       width: 20px;
       height: 20px;
       margin-right: 5px;
       color: #3d1e8f;
       font-weight: bold;
`;

const shake = keyframes`
       0% { transform: translateX(0) }
       25% { transform: translateX(5px) }
       50% { transform: translateX(-5px) }
       75% { transform: translateX(5px) }
       100% { transform: translateX(0) }
`;

export const TextBox = styled.div<{ hasError?: boolean, shake?: boolean }>`
       padding: 10px 10px;
       width: 100%;
       border: 1px solid #dc70dc;
       border-radius: 6px;
       align-items: center;
       display: flex;
       --animation-name: ${shake};
       animation: ${props => (props.hasError && props.shake) ? 'var(--animation-name) 0.5s linear' : 'none'};
       animation-iteration-count: 2;

       &:has(input:focus) {
              box-shadow: 0 0 1px 3px #ffc4ff;
       }

`;

export const Input = styled.input`
       border: none;
       font-size: 16px;
       outline: none;
       color: #3d1e8f;
       width: 100%;
       font-weight: bold;

       &::placeholder {
              color: #aaa;
              font-size: 12px;
       }
`;


export const TextArea = styled.textarea<{ hasError?: boolean, shake?: boolean }>`
       padding: 10px 10px;
       width: 100%;
       border: 1px solid #dc70dc;
       border-radius: 6px;
       font-size: 16px;
       color: #3d1e8f;
       min-height: 165px;
       resize: vertical;
       outline: none;
       width: 100%;
       font-family: 'Nunito';
       --animation-name: ${shake};
       animation: ${props => (props.hasError && props.shake) ? 'var(--animation-name) 0.5s linear' : 'none'};
       animation-iteration-count: 2;

       &:focus {
              box-shadow: 0 0 1px 3px #ffc4ff;
       }
`;

export const FormAction = styled.div`
`;

export const FormButton = styled(Button)`
       width:100%;
       background: #4c2ca0;
       border: 3px solid #4c2ca0;
       box-shadow: 5px 5px 0 -1px #9b80e3;
       color: white;

       &:active  {
              background: #4c2c9f;
       }
`;

export const GlassArea = styled.div`
       padding: 10px;
       //border: 2px solid #00fa00;
       border-radius: 15px;
       border: 3px solid #9c27b0;
       background: linear-gradient(0deg, #210e40, #3d0048);
`;

export const GlassWrapper = styled.div`
       display: flex;
       justify-content: space-around;
       flex-wrap: wrap;

`;

export const ContactItem = styled.a`
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       padding: 5px 20px;
       border-radius: 10px;
       cursor: pointer;
       transition: background 0.2s ease;
       outline: none;
       -webkit-tap-highlight-color: transparent;
       min-height: 130px;

       &:hover {
              background: #101010;              
       }
`;

export const PlatformIcon = styled.div<{ image: string }>`
       background-image: url(${props => props.image});
       background-size: contain;
       background-repeat: no-repeat;
       transition: all 0.3s ease;
       background-position: center;
       width: 50px;
       height: 50px;

       &:hover {
              width: 80px;
              height: 80px;
       }
`;

export const Name = styled.div`
       font-family: Nunito;
       font-size: 16px;
       text-align: center;
       margin-top: 10px;
       color: #f7f720;
       font-weight: bold;
`;

export const LoadingArea = styled.div`    
       min-height: 516px;
       display: flex;       
       justify-content: center;
       align-items: center;
`;

export const LoadingSpinner = styled.div`
       width: 30px;
       height: 30px;
       margin-bottom: 20px;
`;

export const LoadingDescription = styled.div`
`;

export const Content = styled.div`
       font-family: 'Roboto Mono';
       font-size: 20px;
       color: #3d1e8f;
       text-align: center;
`;

export const LoadingContainer = styled.div`   
       width: 60%;
       display: flex;
       flex-direction: column;
       align-items: center;
`;

export const Error = styled.span`
       color: #c84646;
       transition: opacity 0.5s ease;
       opacity: 1;
`;