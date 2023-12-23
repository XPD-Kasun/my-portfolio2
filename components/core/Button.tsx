import styled from "@emotion/styled";

const Button = styled.button`
       padding: 7px;
       background: #10c10d;
       color: black;
       font-family: 'SFMONO';
       font-size: 16px;
       border: 3px solid #10c10d;
       position: relative;
       box-shadow: 5px 5px 0 -1px #53fa5a;
       transition: all 0.1s ease;

       @media screen and (max-width:800px) {             
              position: static;
              width: 100%;
       }

       &:active {
              box-shadow: none;
              transform: translate(5px, 5px);
              background: #148013;
       }
`;

export default Button;