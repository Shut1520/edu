import { useState, useEffect } from 'react';

export const useTypingEffect = (texts, typingSpeed = 50, delayBetweenTexts = 3000) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedDesc, setDisplayedDesc] = useState('');
  const [isTypingTitle, setIsTypingTitle] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    const changeTextTimer = setTimeout(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      setDisplayedTitle('');
      setDisplayedDesc('');
      setIsTypingTitle(true);
      setCharIndex(0);
    }, delayBetweenTexts);

    const typingTimeout = setTimeout(() => {
      if (isTypingTitle) {
        if (charIndex < currentText.title.length) {
          setDisplayedTitle(currentText.title.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setIsTypingTitle(false);
          setCharIndex(0);
        }
      } else {
        if (charIndex < currentText.description.length) {
          setDisplayedDesc(currentText.description.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }
      }
    }, isTypingTitle ? typingSpeed : 30);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(changeTextTimer);
    };
  }, [currentTextIndex, charIndex, isTypingTitle, texts, typingSpeed, delayBetweenTexts]);

  return { displayedTitle, displayedDesc };
};