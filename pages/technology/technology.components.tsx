import styled from "@emotion/styled"


export const ProjectContainer = styled.div<{background: string}>`
       padding: 20px;
       background: #061c38;
       width: 650px;
       height: 400px;
       margin: 60px auto;
       display: flex;
       background: url(${props => props.background});
       background-size: cover;
       overflow: hidden;
       position: relative;
       transition: transform 1s cubic-bezier(0.7, 0.19, 0.3, 0.71);
       min-width: 320px;
       cursor: pointer;
       
       &:after {
              content: '';
              display: block;
              position: absolute;
              inset: 0;
              background: #0b1f52;
              transition: transform 0.5s cubic-bezier(0.7, 0.19, 0.3, 0.71);
       }

       &.hidden {

              transform: scale(0.9) translateY(10px) translateX(10px);
              
              &:after {
                     transform:translateX(0px);
              }
       }

       &.show {
              transform: scale(1) translateY(0px) translateX(0px);

              &:after {
                     transform: translate(100%);
              }
       }

       @media screen and (max-width: 900px) {
              width: 100%;
       }
`;

export const Intro = styled.div<{background:string}>`
       position: absolute;
       right: 20px;
       width: 50%;
       top: 40%;
       background: ${p => p.background};
       padding: 20px;

       @media screen and (max-width: 900px) {
              right: auto;
              left: 20px;
       }
`;

export const ProjectName = styled.div`
       font-family: SFMono, 'Courier New', Courier, monospace;
       font-size: 70px;
       position: relative;
       margin-top: -65px;
`;

export const Description = styled.div`
       font-family: Nunito, 'Courier New', Courier, monospace;
       margin-top: 30px;
       color: white;
`;

export const CardArea = styled.div`
       display: flex;
       flex-wrap: wrap;
`;

export const DomainCardContainer = styled.div`
       width: 46%;
       margin: 10px;

       @media screen and (max-width:800px){
              width: 100%;
       }
`;