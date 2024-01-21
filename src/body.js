import myVideo from "./images/pexels-rostislav-uzunov-7710243 (Original).mp4"
import React from 'react';
import { useState,useEffect } from "react";
const TypingAnimation = () => {
  const [text, setText] = useState('');
  const phrases = [ "EAAT 🥱 SLEEP 🛌 CODE 🚀 ","BOORN TO CODE😎"]
  const typingSpeed = 100;
  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    const typeText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      setText((prevText) => prevText + currentPhrase.charAt(currentCharIndex));
      currentCharIndex += 1;
      if (currentCharIndex === currentPhrase.length) {
        setTimeout(() => {
          deleteText();
        }, 1000);
      } else {
        setTimeout(typeText, typingSpeed);
      }
    };
    const deleteText = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      setText((prevText) => prevText.slice(0, -1));

      currentCharIndex -= 1;

      if (currentCharIndex === 0) {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setTimeout(typeText, 500);
      } else {
        setTimeout(deleteText, typingSpeed / 2);
      }
    };
    typeText();
    return () => {
      setText('');
      currentCharIndex = 0;
      currentPhraseIndex = 0;
    };
  }, []);
  return <div className="auto-text">{text}</div>;
};
const Body=()=>{
    return <div className="video-pos-rel">
       <video className="animated-video" src={myVideo}  muted loop autoPlay></video>

      <div className="video-pos-abs">
         <TypingAnimation/>
         
      </div>
  
    </div>
}
export default Body;