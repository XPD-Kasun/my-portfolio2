import styled from "@emotion/styled";

export const HeaderArea = styled.div`
`;

export const PageTitle = styled.h1`
       font-size: 40px;
       margin-top: 20px;
       margin-bottom: 50px;
       line-height: 42px;
       display: inline-block;
       position: relative;

       &:after {
              content: '';
              display: block;
              position: absolute;
              bottom: -12px;
              right: -18px;
              width: 120px;
              height: 2px;
              background: red;
              box-shadow: 24px 12px 0 0px red;
       }

       @media screen and (max-width: 900px) {
              margin-top:60px;   
              
              &:after {
                     right: 0px;
              }
       }
`;

export const SubTitle = styled.h2`
       font-size: 28px;
       margin: 30px 0;
       line-height: 32px;       
`;