import styled from "@emotion/styled";
import ProgressBar from "../../components/core/ProgressBar";

function DomainCard({domain, noProgress=false}) {

       return (
              <CardContainer>
                     <CardWrap background={domain.cardbg}>
                            <CardContent>
                                   <DomainArea>
                                          <DomainPic background={domain.img} />
                                          <Description>
                                                 <DomainName>{domain.name}</DomainName>
                                                 <Detail>{domain.detail}</Detail>
                                          </Description>
                                   </DomainArea>
                                   {
                                          !noProgress  && (
                                                 <Progress>
                                                        <ProgressBar value={domain.progress} />
                                                 </Progress>
                                          )
                                   }
                            </CardContent>
                     </CardWrap>
              </CardContainer>
       )

}

const CardContainer = styled.div`
       transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
       font-family: Nunito, SFMono, 'Courier New', Courier, monospace;

       &:hover {
              transform: scale(1.02) translateY(-2px);
       }
`;

const CardWrap = styled.div<{background: string}>`
       width: 100%;
       background: ${props => props.background};
       border-radius: 13px;
`;

const CardContent = styled.div`
`;

const DomainArea = styled.div`
       display: flex;
       padding: 20px 20px 10px 20px;
`;

const DomainPic = styled.div<{ background: string }>`
       width: 35%;
       background: url(${props => props.background});
       background-size: contain;
       background-position: center;
       background-repeat: no-repeat;
`;

const Description = styled.div`
       margin-left: 20px;
`;

const Detail = styled.div`
       color: rgb(255 255 255 / 55%);
       font-size: 14px;
`;

const DomainName = styled.div`
       font-size: 28px;
       margin-bottom: 10px;
       color: white;
`;

const Progress = styled.div`
       width: 90%;
       margin: auto;
`;



export default DomainCard;