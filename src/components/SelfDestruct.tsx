import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bomb, ShieldAlert, ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const SelfDestruct = () => {
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [count, setCount] = useState(3);
  const { toast } = useToast();

  const handleSelfDestruct = async () => {
    if (isCountingDown) return;
    
    setIsCountingDown(true);
    setCount(3);

    // Start countdown
    for (let i = 3; i > 0; i--) {
      setCount(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Flash warning
    document.body.style.animation = "flash 0.5s 3";
    
    setTimeout(() => {
      setIsCountingDown(false);
      document.body.style.animation = "";
      toast({
        title: "System Protected",
        description: "Phew, crisis averted! Security protocols activated.",
        icon: <ShieldCheck className="h-5 w-5 text-green-500" />,
      });
    }, 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="destructive"
        size="lg"
        onClick={handleSelfDestruct}
        disabled={isCountingDown}
        className="font-mono hover:scale-105 transition-transform"
      >
        <Bomb className="mr-2 h-4 w-4" />
        Self Destruct
      </Button>

      <AnimatePresence>
        {isCountingDown && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed inset-0 flex items-center justify-center bg-black/80 z-50"
          >
            <div className="text-center">
              <ShieldAlert className="mx-auto mb-4 h-16 w-16 text-red-500 animate-pulse" />
              <h2 className="text-4xl font-bold text-red-500 mb-4">SYSTEM OVERLOAD</h2>
              <div className="text-6xl font-mono text-red-500 animate-pulse">
                {count}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelfDestruct;