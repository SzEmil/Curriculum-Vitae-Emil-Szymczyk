import React, { useEffect, useState } from 'react';
import styles from './OverviewLink.module.css';

const sentences = [
  'Hi Im fullstack developer',
  'Im student of mechatronix on master degree',
  ' I like New challenges',
  ' I am open to personal development',
  'My tech stack: TS, React, NextJs',
  'NodeJs, Express, MongoDb, Firebase',
];

export const OverviewLink = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(-1);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentSentence = sentences[currentSentenceIndex];
      setCurrentLetterIndex(currentLetterIndex + 1);
      setTypedText(currentSentence.substring(0, currentLetterIndex + 1));

      if (currentLetterIndex === currentSentence.length - 1) {
        setTimeout(() => {
          setCurrentLetterIndex(-1);
          setCurrentSentenceIndex(
            (currentSentenceIndex + 1) % sentences.length
          );
          setTypedText('');
        }, 1000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentSentenceIndex, currentLetterIndex]);

  return (
    <div className={styles.typingAnimation}>
      <span className="typing-animation">{typedText}</span>
    </div>
  );
};
