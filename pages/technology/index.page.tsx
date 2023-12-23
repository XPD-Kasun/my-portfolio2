import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react"
import { IoArrowBack } from "react-icons/io5";
import BackArrow, { useBackArrowTransitions } from "../../components/core/BackArrow";
import { PageContainer } from "../../components/core/Container";
import Staggered from "../../components/core/Staggered";
import pages from "../../api/pages.json";
import techStacks from "../../api/techstacks.json";
import inProgressAreas from "../../api/inProgressAreas.json";
import mainStacks from '../../api/mainStacks.json';

import {
       HeaderArea,
       PageTitle,
       SubTitle
} from '../../components/core/Titles';
import Project from "./Project";
import Card from "./DomainCard";
import DomainCard from "./DomainCard";
import { CardArea, DomainCardContainer } from "./technology.components";


export default function Technology({ mainBoxController, techStacks, menuItems, inProgressAreas, mainStacks }) {

       let [cls, setCls] = useState('hidden');
       let backArrowRef = useRef();
       let markerRef = useRef();
       let router = useRouter();

       useBackArrowTransitions(backArrowRef, markerRef);

       useEffect(() => {

              mainBoxController.maximize();

       }, [mainBoxController]);

       const onBack = () => {
              router.push('/');
       };

       const onProjectClick = (techStack) => {

              let item = menuItems.find(x => x.name === 'familiarwith');
              if (!item) {
                     return;
              }
              sessionStorage.setItem('project-scroll-pos', document.getElementById('boxWrap').scrollTop.toString());
              router.push(item.url + techStack.path);
       }

       return (
              <PageContainer className={cls}>
                     <BackArrow onClick={onBack} ref={backArrowRef}>
                            <IoArrowBack size={23} color="rgb(26,11,51)"></IoArrowBack>
                     </BackArrow>
                     <div ref={markerRef} className="scroll-marker"></div>
                     <Staggered>
                            <HeaderArea>
                                   <PageTitle>Technologies I&apos;m familiar with</PageTitle>
                            </HeaderArea>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos expedita eum distinctio quaerat, repellat minima labore optio omnis a tempore quo laborum maxime ipsa placeat quisquam quidem consequuntur harum.</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dignissimos expedita eum distinctio quaerat, repellat minima labore optio omnis a tempore quo laborum maxime ipsa placeat quisquam quidem consequuntur harum.</p>
                            <div>
                                   {
                                          mainStacks.map(techStack => (
                                                 <Project onClick={e => onProjectClick(techStack)} key={techStack.id} techStack={techStack} />
                                          ))
                                   }
                            </div>
                     </Staggered>
                     <SubTitle>
                            Other tools I'm familiar with
                     </SubTitle>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis obcaecati, beatae dignissimos velit, excepturi laboriosam consectetur magni, quasi suscipit libero necessitatibus itaque? Porro ullam rerum dicta, adipisci veritatis corporis.</p>
                     <CardArea>
                            {
                                   techStacks.map(domain => {
                                          return (
                                                 <DomainCardContainer>
                                                        <DomainCard noProgress={true} key={domain.id} domain={domain} />
                                                 </DomainCardContainer>
                                          );
                                   })
                            }
                     </CardArea>

                     <SubTitle>
                            What I&apos;m currently learning and interested in
                     </SubTitle>
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, vel rerum voluptatem perferendis assumenda odit tenetur doloribus sapiente fuga odio qui eaque ut culpa quo facilis voluptate vero impedit similique?</p>
                     <CardArea>
                            {
                                   inProgressAreas.map(domain => {
                                          return (
                                                 <DomainCardContainer>
                                                        <DomainCard key={domain.id} domain={domain} />
                                                 </DomainCardContainer>
                                          );
                                   })
                            }
                     </CardArea>

              </PageContainer>
       )
}
//cardbg: 'linear-gradient(135deg, #d126ac, #86176D)'

export async function getStaticProps(context) {
       return {
              props: {
                     menuItems: pages,
                     techStacks,
                     inProgressAreas,
                     mainStacks
              }
       }
}