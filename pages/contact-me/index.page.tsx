import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react"
import { IoArrowBack } from "react-icons/io5";
import BackArrow, { useBackArrowTransitions } from "../../components/core/BackArrow";
import { PageContainer } from "../../components/core/Container";
import Staggered from "../../components/core/Staggered";
import pages from "../../api/pages.json";
import {
       SubTitle,
       HeaderArea,
       PageTitle
} from '../../components/core/Titles';
import ContactMeForm from "./ContactMeForm";
import DefaultTitleBar from "../../components/core/DefaultTitleBar";
import {
       GlassArea,
       GlassWrapper,
       ContactItem,
       PlatformIcon,
       Name
} from './contactme.components';
import Image from "next/image";


export default function ContactMe({ mainBoxController, menuItems }) {

       let [cls, setCls] = useState('hidden');
       let backArrowRef = useRef();
       let router = useRouter();

       useBackArrowTransitions(backArrowRef, backArrowRef);

       useEffect(() => {
              mainBoxController.maximize();
       }, [mainBoxController]);

       const onBack = () => {
              router.push('/');
       };

       return (

              <PageContainer className={cls}>
                     <DefaultTitleBar />
                     <BackArrow onClick={onBack} ref={backArrowRef}>
                            <IoArrowBack size={23} color="rgb(26,11,51)"></IoArrowBack>
                     </BackArrow>
                     <Staggered>
                            <HeaderArea>
                                   <PageTitle>Contact Me</PageTitle>
                            </HeaderArea>
                            <p>
                                   I thank you for taking your valuable time to browse me up. Just type your message through the following form and rest will make sure that your message will arrive at me. I'll get back to you soon. Also, feel free to add me through the following social circles.
                            </p>
                            <ContactMeForm />
                            <SubTitle>
                                   Get in touch
                            </SubTitle>
                            <GlassArea>
                                   <GlassWrapper>
                                          <ContactItem href="https://www.linkedin.com/in/kasunjayawardena/" target="_blank">
                                                 <PlatformIcon image="/linkedin-logo.png"></PlatformIcon>
                                                 <Name>LinkedIn</Name>
                                          </ContactItem>
                                          <ContactItem href="https://github.com/XPD-Kasun" target="_blank">
                                                 <PlatformIcon image="/GitHub-Mark-Light-64px.png"></PlatformIcon>
                                                 <Name>GitHub</Name>
                                          </ContactItem>
                                          <ContactItem href="https://stackoverflow.com/users/2260920/xpd" target="_blank">
                                                 <PlatformIcon image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/240px-Stack_Overflow_icon.svg.png"></PlatformIcon>
                                                 <Name>StackOverflow</Name>
                                          </ContactItem>
                                          <ContactItem href="https://stackoverflow.com/users/2260920/xpd" target="_blank">
                                                 <PlatformIcon image="/medium.png"></PlatformIcon>
                                                 <Name>Medium</Name>
                                          </ContactItem>
                                   </GlassWrapper>
                            </GlassArea>
                            <SubTitle style={{ textAlign: 'center' }}>Have a great day!</SubTitle>
                            <div style={{ margin: 'auto', display: 'flex', justifyContent: 'center' }}>
                                   <p><a href="https://en.wikipedia.org/wiki/File:Nyan_cat_250px_frame.PNG#/media/File:Nyan_cat_250px_frame.PNG"><img src="https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG" alt="Nyan cat 250px frame.PNG" /></a></p>
                            </div>
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