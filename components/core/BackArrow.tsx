import { useEffect } from "react";
import { useScrollSense } from "react-scrollsense";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const arrowAppear = keyframes`
       from{
       opacity: 0;
       transform: scale(0.5);
       }    
       to{
       opacity: 1;
       transform: scale(1);
       } 
`;

const arrowHidden = keyframes`
       from{
       transform: translateY(0px);
       }    
       to{       
       transform: translateY(-100px);

       } 
`;

const BackArrow = styled.div`
     position: absolute;
     top: 50px;
     left: 20px;       
     width: 30px;
     height: 30px;
     background: #00f600;
     display: flex;
     align-items: center;
     justify-content: center;
     opacity: 0;
     border-radius: 100%;
     animation-fill-mode: both !important;
     cursor: pointer;
     transition: background 0.2s ease;
     z-index: 3000;

     &:hover {
            background: #0ed60e;
     }

     &:active {
            background: #333;
     }

     &.hidden {              
            animation: ${arrowHidden} 0.5s ease;
     }

     &.show {
            animation: ${arrowAppear} 0.5s ease;
            animation-delay: 0.5s;
     }
`;

function useBackArrowTransitions(backArrowRef, elToDetect) {

       //let scrollSense = useScrollSense();

       useEffect(() => {
              
              backArrowRef.current.classList.add('show');

              // let elArrow = backArrowRef.current;

              // scrollSense.onIntersection(elToDetect.current, (evt) => {

              //        if (!backArrowRef.current || window.innerWidth > 800) {
              //               return;
              //        }

              //        if (evt.isIntersecting) {
              //               backArrowRef.current.classList.add('show');
              //               backArrowRef.current.classList.remove('hidden');
              //        } else {
              //               backArrowRef.current.classList.add('hidden');
              //               backArrowRef.current.classList.remove('show');
              //        }

              // }, {
              //        delay: 100
              // });

              // return () => {
              //        if (elArrow) {
              //               scrollSense.detach(elArrow);
              //        }
              // }

       }, []);


       useEffect(() => {

              let boxWrap = document.getElementById('boxWrap')
              if(boxWrap) {
                     boxWrap.scrollTop = 0;
              }

              backArrowRef.current.classList.add('show');

       }, []);

}

export { useBackArrowTransitions };
export default BackArrow;