import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import MainBox from '../../components/blocks/mainBox';
import Engine, {Stage1} from '../../engine';
import CanvasProvider, { useCanvas } from '../core/canvasProvider';
import { Canvas, Content, Footer } from './MatrixLayout.components';

export default function MatrixLayout({ children }) {

       let cref = useRef<HTMLCanvasElement>(null);
       let [started, setStarted] = useState(false);
       let canvasContext = useCanvas();

       let router = useRouter();

       useEffect(() => {

              if(router.pathname !== '/') {
                     setStarted(true);
              }
              else if(!canvasContext.getEngine()) {                     
                     setStarted(false);
              }

              if (cref.current) {

                     let engine = new Engine(cref.current, {
                            width: window.innerWidth,
                            height: window.innerHeight
                     });

                     engine.add(new Stage1({ level: 0 }))
                     engine.addNotificationListener((msg) => {
                            if(msg == 'level') {
                                   setStarted(true);
                            }
                     })


                     
                     //engine.start();

                     canvasContext.register(engine);
              }

              window.addEventListener('resize', () => {
              });

       }, [canvasContext, router]);

       return (
              <div className="app-container">
                     <Head>
                            <title>Hi, I&apos;m XPD</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                     </Head>
                     <CanvasProvider>
                            <Canvas ref={cref} />
                            <Content>
                                   <MainBox>
                                          {
                                                 mainBoxController => {
                                                        return React.Children.map(children, (child) => {
                                                               return React.cloneElement(child, { mainBoxController });
                                                        });
                                                 }
                                          }
                                   </MainBox>
                            </Content>
                     </CanvasProvider>
                     <Footer className={started ? "started": ""}>
                            XPDKasun &copy; 2022
                     </Footer>
              </div>
       )

}