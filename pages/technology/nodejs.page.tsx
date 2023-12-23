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
                                   <PageTitle>NodeJS</PageTitle>
                            </HeaderArea>
                            <p>React is my goto library for building client side web applications. I switched to react after working extensively with jQuery. I quickly started to embrace the declarative components which enabled to view an application as an organized tree of components.</p>
                            <div>
                                   <Image width="800px" src={reactImage} objectFit="cover"></Image>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sint neque maxime aspernatur animi nulla quis reprehenderit atque minima culpa tempore laudantium amet, officiis error distinctio voluptates voluptatum fugit velit?</p>
                            
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sint neque maxime aspernatur animi nulla quis reprehenderit atque minima culpa tempore laudantium amet, officiis error distinctio voluptates voluptatum fugit velit?</p>
                            
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque sint neque maxime aspernatur animi nulla quis reprehenderit atque minima culpa tempore laudantium amet, officiis error distinctio voluptates voluptatum fugit velit?</p>
                            
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