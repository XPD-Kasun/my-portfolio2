import styled from "@emotion/styled";

export default function ProgressBar({ value }) {

       return (
              <ProgressBarContainer>
                     <ProgressBarInner>
                            <ProgressBarTube>
                                   <FillContainer>
                                          <Fill width={value}></Fill>
                                   </FillContainer>
                            </ProgressBarTube>
                     </ProgressBarInner>
              </ProgressBarContainer>
       )
}

const ProgressBarContainer = styled.div`   
       width: 100%;
       padding: 10px 0;
`;

const ProgressBarInner = styled.div`
`;

const ProgressBarTube = styled.div`
       border-radius: 3px;
       overflow: hidden;
`;

const FillContainer = styled.div`
       background: rgb(255, 255, 255, 0.2);
`;

const Fill = styled.div<{width:number}>`
       height: 5px;
       width: ${props => props.width}%;
       background: #00f600;
`;

