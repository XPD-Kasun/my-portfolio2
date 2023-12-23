import { useRouter } from 'next/router';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
       TitleArea,
       Title,
       SubTitle,
       BodyArea,
       MenuArea,
       MenuItem,
       MusicBox
} from './index.components';
import kb from '../../engine/kb';
import audioStop from '../../engine/audioStop';
import { HiOutlineMusicNote } from 'react-icons/hi';
import Staggered from '../../components/core/Staggered';

function IntroBox({ hasStarted, menuItems }) {

       let [selectedItem, setSelectedItem] = useState(menuItems[0].id);
       let [isPlaying, setIsPlaying] = useState(false);

       let audioRef = useRef(null);

       const router = useRouter();

       const navigate = useCallback((url, id) => {
              setSelectedItem(id);
              localStorage.setItem('lastItem', id.toString());
              router.push(url);

       }, [router]);

       const playBackgroundAudio = (play: boolean) => {

              if (play) {
                     audioRef.current.background.play();
                     setIsPlaying(true);
              }
              else {
                     audioRef.current.background.pause();
                     setIsPlaying(false);
              }

       };

       const onKeyDown = useCallback((evt) => {

              if (!hasStarted) {
                     return;
              }

              audioRef.current.effect.currentTime = 0;
              audioRef.current.effect.play();

              if (evt.key === 'ArrowUp') {
                     if (selectedItem > 1) {
                            setSelectedItem(selectedItem - 1);
                     }
              }
              else if (evt.key === 'ArrowDown') {
                     if (selectedItem < 3) {
                            setSelectedItem(selectedItem + 1);
                     }
              }
              else if (evt.key === 'Enter') {
                     let item = menuItems.find(x => x.id === selectedItem);
                     navigate(item.url, item.id);
              }

       }, [selectedItem, navigate, hasStarted, menuItems]);

       const onMenuItemClick = (item) => {
              setSelectedItem(item.id);
              audioRef.current.effect.play();

              setTimeout(() => {
                     navigate(item.url, item.id);
              }, 500);
       };

       const onMusicBoxClick = (item) => {
              setIsPlaying(play => {
                     playBackgroundAudio(!play);
                     return !play
              });
       }

       useEffect(() => {

              kb.subscribe('introbox', (evt) => {

                     onKeyDown(evt);

              })

              return () => {
                     kb.subscribe('introbox', () => { });
              };

       }, [onKeyDown]);

       useEffect(() => {

              if (hasStarted) {

                     let lastItem = parseInt(localStorage.getItem('lastItem'));
                     if (!isNaN(lastItem)) {
                            setSelectedItem(lastItem);
                     }

                     audioRef.current = {
                            background: new Audio('BobbyRichards.mp3'),
                            effect: new Audio('mixkit-sci-fi-click-900.wav')
                     };
                     let audioBackground = audioRef.current.background;
                     audioBackground.loop = true;

                     playBackgroundAudio(true);
                     audioRef.current.effect.play();

                     return () => {
                            audioStop(audioRef.current.background);
                            delete audioRef.current.effect;
                     };
              }

       }, [hasStarted]);


       return (
              <Staggered>
                     <TitleArea>
                            <Title>Hello There,</Title>
                            <SubTitle>Nice to meet you</SubTitle>
                     </TitleArea>
                     <BodyArea>
                            <p>I am so happy to have you here. My name is Kasun Jayawardena. I'm a freelancer specialising in React, NodeJS and .NET.</p>
                            <p>Before I started working as a freelancer, I was a senior software engineer in .NET full stack application development. Overall I have nearly a decade of app development experience.</p>
                            <SubTitle>Lets get to know more,</SubTitle>
                            <MenuArea>
                                   {
                                          menuItems.map(item => {
                                                 return (
                                                        <MenuItem key={item.id} onClick={e => onMenuItemClick(item)} tabIndex={0} className={selectedItem === item.id ? "selected" : ""}>{item.text}</MenuItem>
                                                 )
                                          })
                                   }
                            </MenuArea>
                     </BodyArea>
                     <MusicBox onClick={onMusicBoxClick} className={isPlaying ? "playing" : ""}>
                            <HiOutlineMusicNote size={24}></HiOutlineMusicNote>
                     </MusicBox>
              </Staggered>
       )


}

export default IntroBox;