import { useState, useEffect } from 'react';

const jargonPhrases = [
  "Injecting pseudocode...",
  "Optimizing spaghetti logic...",
  "Bypassing quantum firewall...",
  "Decrypting neural networks...",
  "Compiling cybernetic algorithms...",
  "Debugging quantum entanglement...",
  "Hacking the mainframe...",
  "Initializing cyber protocols...",
];

const HackerJargon = () => {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const updatePhrase = () => {
      const randomIndex = Math.floor(Math.random() * jargonPhrases.length);
      setPhrase(jargonPhrases[randomIndex]);
    };

    const interval = setInterval(updatePhrase, 3000);
    updatePhrase();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 left-4 font-mono text-primary text-sm animate-pulse">
      {phrase}
    </div>
  );
};

export default HackerJargon;