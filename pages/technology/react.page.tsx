import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react"
import { IoArrowBack } from "react-icons/io5";
import BackArrow, { useBackArrowTransitions } from "../../components/core/BackArrow";
import { PageContainer } from "../../components/core/Container";
import Staggered from "../../components/core/Staggered";
import reactImage from '../../public/react.png';
import pages from "../../api/pages.json";
import {
       HeaderArea,
       PageTitle
} from '../../components/core/Titles';
import Image from "next/image";
import DefaultTitleBar from "../../components/core/DefaultTitleBar";

export default function ReactApps({ mainBoxController }) {

       let [cls, setCls] = useState('hidden');
       let backArrowRef = useRef();
       let router = useRouter();

       useBackArrowTransitions(backArrowRef, backArrowRef);

       useEffect(() => {
              mainBoxController.maximize();
       }, [mainBoxController]);

       const onBack = () => {
              router.back();
       };


       return (
              <PageContainer className={cls}>                     
                     <DefaultTitleBar />
                     <BackArrow onClick={onBack} ref={backArrowRef}>
                            <IoArrowBack size={23} color="rgb(26,11,51)"></IoArrowBack>
                     </BackArrow>
                     <Staggered>
                            <HeaderArea>
                                   <PageTitle>React</PageTitle>
                            </HeaderArea>
                            <div>
                                   <Image width="800px" src={reactImage} objectFit="cover"></Image>
                            </div>
                            <p>React is my goto library for building client side web applications. I switched to react after working extensively with jQuery. Although React is a library for rendering views, My experience with React made me feel as an eco system, when combined, provides a comprehensive and customizable front-end framework tailor-made for a given project.</p>
                            <p>I have been using React for more than 5 years now for various applications. Before coming to React world, I worked sometime with popular Vue library. Although Vue is a wonderful and equally capable library, I believe React is preferred for large scale applications.</p>
                            
                            <p>React applications can be built in two ways. One is to target only client-side. The other is to target both client and server side, which we call SSR or server side rendering. If we have no serious bottlenecks with regard to performance or SEO, we can target simple client-only mode. Conversely, if there is a requirement for SEO or tight performance need, then we can start using SSR.
                            </p>
                            <p> Currently best way to implement SSR is to use a library like NextJs or Gatsby. They are well-suited for react based web-sites</p>
                            <p>I have started two open source projects on GitHub. After working on them for sometime with my limited time, I have brought them nearly to the completion line as of now. Yet, there still more work is needed which I'm hoping to deliver so that they can be completed in next two months.</p>
                            <ul>
                                   <li>
                                          <h3>React Uber Console</h3>
                                          <p>This project is all about simplifying developing web consoles. It's a common requirement to build backend panels or web consoles for most of the projects we work with. Each time we have this kind of requirement, people build their backends from grounds up each time. This project provides a generic module based approach to developing any backend. With React Uber Console you can cut down the time for building infrastructure and focus on business rules. You can check this project here.</p>
                                   </li>
                                   <li>
                                          <h3>React Scroll Sensor</h3>
                                          <p>React Scroll Sensor is created solely to answer the scrolling detection problem. When we build web pages, one common requirement we get to face is to do something when some DOM element scrolled into the view. Although, we can implement this by ourselves (Now we have Intersection Observers), integrating this code into React can be time consuming. Sometimes it can even make React components complex and difficult to maintain. This library solves this problem and gives you two sensors to detect elements scrolled into view. One is based on scroll events and other is based on Intersection Observer API </p>
                                   </li>
                            </ul>                                                        
                     </Staggered>

              </PageContainer>
       )
}

export async function getStaticProps(context) {
       return {
              props: {
                     menuItems: pages
              }
       }
}