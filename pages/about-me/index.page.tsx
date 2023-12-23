import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { IoArrowBack } from 'react-icons/io5';
import { PageContainer } from "../../components/core/Container";
import Staggered from "../../components/core/Staggered";
import Button from "../../components/core/Button";
import BackArrow, { useBackArrowTransitions } from "../../components/core/BackArrow";
import myPhoto from '../../public/my_photo.jpg';
import pages from "../../api/pages.json";
import {
       HeaderArea, MyPhoto, PhotoContainer, InfoBox, MainTitle, SubTitle, ContactSmall, Email, Role
} from './aboutMe.components';
import DefaultTitleBar from "../../components/core/DefaultTitleBar";
import Spinner from "../../components/core/Spinner";

const href = "mailto:kasunx.kelaniya@gmail.com?body=%0A%0A%0AFrom XPDKasun.ml (To categorize requests)";
const cvPath = '';

export default function AboutMe({ mainBoxController, menuItems }) {

       let [cls, setCls] = useState('hidden');
       let router = useRouter();
       let backArrowRef = useRef(null);
       let myPhotoRef = useRef(null);

       useBackArrowTransitions(backArrowRef, myPhotoRef);

       useEffect(() => {

              mainBoxController.maximize();
              setCls('appear');

       }, [mainBoxController]);


       const onBack = () => {
              router.push('/');
       };

       const onDownloadCV = () => {
              window.open(cvPath, '_blank');
       };

       const gotoContact = () => {

              let menu = menuItems.find(x => x.name === 'contactme');
              if (menu) {
                     router.push(menu.url);
              }

       };

       return (
              <PageContainer className={cls}>                   
                     <DefaultTitleBar />
                     <BackArrow onClick={onBack} ref={backArrowRef}>
                            <IoArrowBack size={23} color="rgb(26,11,51)"></IoArrowBack>
                     </BackArrow>
                     <Staggered>
                            <HeaderArea>
                                   <MyPhoto>
                                          <PhotoContainer ref={myPhotoRef}>
                                                 <Image src={myPhoto} alt="XPDKasun Jayawardena" objectFit="cover" />
                                          </PhotoContainer>
                                   </MyPhoto>
                                   <InfoBox>
                                          <MainTitle>Hello, I am Kasun Jayawardena</MainTitle>
                                          <SubTitle>(BSc, MSc(in progress), MCP, MCSD)</SubTitle>
                                          <Role>Software Engineer in fullstack .NET and NodeJS</Role>
                                          <ContactSmall>
                                                 <Email href={href}>[ Kasunx.Kelaniya@gmail.com ]</Email>
                                                 <Button onClick={onDownloadCV} style={{ position: 'absolute', right: 0 }}>Download CV &gt;</Button>
                                                 <Button onClick={gotoContact} style={{ position: 'absolute', right: 0 }}>Goto Contact &gt;</Button>
                                          </ContactSmall>
                                   </InfoBox>
                            </HeaderArea>

                            <p>
                                   I am a software engineer specializing in building full-stack web applications on .NET and NodeJS stack. I have experience over 9 years working as a software engineer and 4 out of them as a senior software engineer building applications ranging from native windows applications to distributed payment kiosks.
                            </p>
                            <p>
                                   Currently I'm working as a freelancer and following MSc in Computer Science at University of Kelaniya. I'm the author of React-UberConsole and React-ScrollSense libraries which both are open source libraries.
                            </p>
                            <p>
                                   Accusantium asperiores eveniet sapiente nobis amet consectetur rerum, in autem cupiditate. Accusantium praesentium tenetur sapiente voluptate, provident voluptas corporis, quisquam rem, assumenda ad quo fugit nisi? Dolore a dolor iusto eaque sapiente?
                            </p><p>
                                   Accusantium asperiores eveniet sapiente nobis amet consectetur rerum, in autem cupiditate. Accusantium praesentium tenetur sapiente voluptate, provident voluptas corporis, quisquam rem, assumenda ad quo fugit nisi? Dolore a dolor iusto eaque sapiente?
                            </p><p>
                                   Accusantium asperiores eveniet sapiente nobis amet consectetur rerum, in autem cupiditate. Accusantium praesentium tenetur sapiente voluptate, provident voluptas corporis, quisquam rem, assumenda ad quo fugit nisi? Dolore a dolor iusto eaque sapiente?
                            </p>
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