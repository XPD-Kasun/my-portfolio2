import { useEffect, useState } from 'react';
import { IoHome, IoHomeOutline } from 'react-icons/io5';
import { useCanvas } from '../../core/canvasProvider';
import {
       BoxContainer,
       BoxWrap,
       BoxTitleBar,
       ToolDock,
       HomeBtn,
} from './mainBox.components';

export default function MainBox({children}) {

       let [cls, setCls] = useState('minimized');
       let canvas = useCanvas();

       const onHomeClick = () => {

       }
       
       const minimize = () => {
              canvas.play();
              setCls('minimized');
       };

       const maximize = () => {
              canvas.pause();
              setCls('maximized');
       }

       const normal = () => {
              canvas.play();
              setCls('normal');
       }

       const getEngine = () => {
              return canvas.getEngine();
       }

       useEffect(() => {
              

       }, [canvas]);

       return (
              <BoxContainer id="boxContainer" className={cls}>
                     <BoxWrap id="boxWrap">
                            {children({
                                   minimize,
                                   normal,
                                   maximize,
                                   getEngine
                            })}
                     </BoxWrap>
              </BoxContainer>
       )

};