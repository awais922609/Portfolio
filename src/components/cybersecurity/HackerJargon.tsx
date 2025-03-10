
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const jargonPhrases = [
  "Injecting pseudocode...",
  "Optimizing spaghetti logic...",
  "Bypassing quantum firewall...",
  "Decrypting neural networks...",
  "Compiling cybernetic algorithms...",
  "Debugging quantum entanglement...",
  "Hacking the mainframe...",
  "Initializing cyber protocols...",
  "Executing kernel functions...",
  "Deploying zero-day exploits...",
  "Analyzing threat vectors..."
];

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const HackerJargon = () => {
  const [phrase, setPhrase] = useState('');
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const updatePhrase = () => {
      setIsChanging(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * jargonPhrases.length);
        setPhrase(jargonPhrases[randomIndex]);
        setIsChanging(false);
      }, 300);
    };

    const interval = setInterval(updatePhrase, 3000);
    updatePhrase();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 left-4 font-mono text-primary text-sm z-20">
      <motion.div
        className="flex gap-2 items-center glass-card px-3 py-1 rounded-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse"></div>
        <motion.span
          variants={variants}
          initial="visible"
          animate={isChanging ? "hidden" : "visible"}
          transition={{ duration: 0.3 }}
        >
          {phrase}
        </motion.span>
      </motion.div>
    </div>
  );
};

export default HackerJargon;
