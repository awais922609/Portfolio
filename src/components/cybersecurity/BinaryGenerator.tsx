
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useState } from "react";
import { Binary } from "lucide-react";

const BinaryGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateBinary = () => {
    setIsGenerating(true);
    
    const binaryLength = Math.floor(Math.random() * 16) + 16; // Generate between 16-32 characters
    const binary = Array.from({ length: binaryLength }, () => Math.round(Math.random())).join("");
    
    toast("Binary Sequence Generated", {
      description: (
        <div className="font-mono text-xs overflow-x-auto whitespace-nowrap">
          {binary.split('').map((digit, i) => (
            <span 
              key={i} 
              className={digit === '1' ? 'text-primary font-bold' : 'opacity-70'}
              style={{ 
                animationDelay: `${i * 0.05}s`,
                animation: 'pulse 1s ease-in-out'
              }}
            >
              {digit}
            </span>
          ))}
        </div>
      ),
      duration: 4000,
    });
    
    setTimeout(() => setIsGenerating(false), 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="fixed top-16 right-4 z-20"
    >
      <Button
        onClick={generateBinary}
        disabled={isGenerating}
        variant="outline"
        className="glass-card hover:bg-primary/20 flex items-center gap-2 backdrop-blur-md"
      >
        <motion.div
          animate={isGenerating ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1, ease: "linear" }}
        >
          <Binary className="h-4 w-4" />
        </motion.div>
        <span>{isGenerating ? "Processing..." : "Generate Binary"}</span>
      </Button>
    </motion.div>
  );
};

export default BinaryGenerator;
