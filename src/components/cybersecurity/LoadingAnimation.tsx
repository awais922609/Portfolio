import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [loadingText, setLoadingText] = useState("");
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  const loadingMessages = [
    "Initializing secure connection...",
    "Scanning for vulnerabilities...",
    "Bypassing security protocols...",
    "Decrypting portfolio data...",
    "Establishing secure session..."
  ];

  useEffect(() => {
    // Simulate terminal typing with faster speed
    let currentText = "";
    let messageIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (messageIndex < loadingMessages.length) {
        currentText = loadingMessages[messageIndex].substring(0, charIndex + 1);
        setLoadingText(currentText);
        
        charIndex++;
        
        if (charIndex >= loadingMessages[messageIndex].length) {
          charIndex = 0;
          messageIndex++;
          setTimeout(() => {
            setLoadingStep(prev => prev + 1);
          }, 80); // Reduced from 100ms to 80ms
        }
      } else {
        clearInterval(typingInterval);
      }
    }, 20); // Reduced from 25ms to 20ms for faster typing

    // Adjust loading percentage to complete in ~1500ms
    let percentage = 0;
    const percentageInterval = setInterval(() => {
      if (percentage < 100) {
        // Calibrate to reach 100% in roughly 1500ms (1.5s)
        percentage += Math.floor(Math.random() * 7) + 3;
        percentage = Math.min(percentage, 100);
        setLoadingPercentage(percentage);
      } else {
        clearInterval(percentageInterval);
        // Keep the full 1500ms loading experience before hiding
        setTimeout(() => setIsVisible(false), 100);
      }
    }, 75); // Adjusted timing

    // Keep fallback timer at 1500ms + buffer
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Ensure it disappears after loading

    return () => {
      clearInterval(typingInterval);
      clearInterval(percentageInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-primary font-mono max-w-md w-full px-4"
      >
        <div className="glass-card p-4 border border-primary/50 rounded mb-4">
          <div className="flex items-center mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-auto text-xs opacity-70">Terminal: security.sh</div>
          </div>
          
          <div className="h-40 overflow-auto">
            {[...Array(loadingStep)].map((_, i) => (
              <div key={i} className="mb-2">
                <div className="flex">
                  <span className="text-[#00FF41] mr-2">&gt;</span>
                  <span>{loadingMessages[i]}</span>
                </div>
                <div className="text-[#00FF41]">
                  {i < loadingStep - 1 ? (
                    <span>Success ✓</span>
                  ) : null}
                </div>
              </div>
            ))}
            
            {loadingStep < loadingMessages.length && (
              <div className="flex">
                <span className="text-[#00FF41] mr-2">&gt;</span>
                <span>{loadingText}</span>
                <span className="cursor-blink"></span>
              </div>
            )}
          </div>
        </div>
        
        <div className="w-full bg-[#111] rounded-full h-2 mb-2">
          <motion.div
            className="bg-[#00FF41] h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${loadingPercentage}%` }}
            transition={{ type: "spring", stiffness: 150 }} // Increased stiffness for faster animation
          ></motion.div>
        </div>
        
        <div className="flex justify-between text-xs">
          <span>Initializing portfolio...</span>
          <span>{loadingPercentage}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;
