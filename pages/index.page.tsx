import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import start, { Stage1 } from '../engine';
import { IEngine } from '../engine/types';
import IntroBox from './index/IntroBox';
import pages from "../api/pages.json";


function Index({ mainBoxController = null, menuItems }) {

       let [hasStarted, setHasStarted] = useState(false);

       useEffect(() => {

              let engine: IEngine = mainBoxController.getEngine();
              if (engine) {

                     let stage = engine.getCurrentState();                     

                     if (stage && stage.getLevel() === 1) {
                            mainBoxController.normal();
                            setHasStarted(true);
                     }
                     else {

                            mainBoxController.minimize();

                            engine.addNotificationListener((msg) => {
                                   if (msg == 'level') {
                                          setHasStarted(true);
                                          // sessionStorage.setItem('intro', 'done');
                                   }
                            });
       
                            engine.start();

                     }
                     
              }

       }, [mainBoxController, hasStarted]);

      

       return (
              <div className="index" style={{height: '90%'}}>
                     <Head>
                            <title>Hi, I&apos;m XPD</title>
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                     </Head>
                     <IntroBox hasStarted={hasStarted} menuItems={menuItems}/>
              </div>
       )
};

export async function getStaticProps(context) {
       return {
              props: {
                     menuItems: pages
              }
       }
}

export default Index;
