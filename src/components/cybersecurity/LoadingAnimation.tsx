import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Initiating Hack...",
    "Breaching Firewalls...",
    "Access Granted. Welcome to Sajid's Portfolio.",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setTimeout(() => setIsVisible(false), 1000);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="text-primary font-mono space-y-4">
        {steps.slice(0, currentStep + 1).map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="text-xl">&gt;</span>
            <span className="typing-effect">{step}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;