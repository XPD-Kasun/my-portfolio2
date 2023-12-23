import styled from '@emotion/styled';

export const Title = styled.div`
       color: orange;
`;

export const Canvas = styled.canvas`
       width: 100%;
       position: fixed;
       transition: filter 1s ease-in;
       inset: 0;
       background-color: #000;
`;

export const Content = styled.div`
       display: flex;
       justify-content: center;
       align-items: center;
       width: 100%;
       height: calc(100vh - 40px);

`;

export const Footer = styled.div`
       height: 30px;
       position: fixed;
       font-size: 13px;
       bottom: -30px;
       left: 0;
       width: 100%;
       display: flex;
       align-items: center;
       color: #00f600;
       justify-content: center;
       background: #032810;
       transition: bottom 0.5s ease;

       &.started {
              bottom: 0;
       }

`;