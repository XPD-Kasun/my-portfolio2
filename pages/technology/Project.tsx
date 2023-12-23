import { useScrollSense } from 'react-scrollsense';
import { useEffect, useRef, useState } from 'react';
import {
       Intro,
       ProjectContainer,
       ProjectName,
       Description,
} from './technology.components';

function Project({ techStack, onClick }) {

       let scrollSensor = useScrollSense();
       let [isIntersecting, setIntersecting] = useState(false);
       let introRef = useRef();       

       useEffect(() => {

              let introRefTemp = introRef.current;

              scrollSensor.onIntersection(introRef.current, (evt) => {
                     if(evt.isIntersecting) {
                            if(evt['scrolledHeight'] > 200) {
                                   setIntersecting(true);
                                   scrollSensor.detach(introRef.current);
                            }
                     }
              }, {
                     rootMargin: "0 0 500px 0"
              });

              setTimeout(() => {
                     document.getElementById('boxWrap').scrollTo(0, 1);
              }, 1000);

              return () => {
                     scrollSensor.detach(introRefTemp);
              }

       }, []);

       return (
              <ProjectContainer onClick={onClick} ref={introRef} background={techStack.background} className={isIntersecting ? "show" : "hidden"}>
                     <Intro background={techStack.introColor}>
                            <ProjectName>{techStack.name}</ProjectName>
                            <Description>
                                   {techStack.description}
                            </Description>
                     </Intro>
              </ProjectContainer>
       );
}

export default Project;