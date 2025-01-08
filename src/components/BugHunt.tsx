import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TOTAL_BUGS = 5;

const BugHunt = () => {
  const [bugs, setBugs] = useState<Array<{ id: number; found: boolean; top: number; left: number }>>([]);
  const [foundCount, setFoundCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    // Generate random positions for bugs
    const newBugs = Array.from({ length: TOTAL_BUGS }, (_, i) => ({
      id: i,
      found: false,
      top: Math.random() * (window.innerHeight - 100),
      left: Math.random() * (window.innerWidth - 100),
    }));
    setBugs(newBugs);
  }, []);

  const handleBugClick = (bugId: number) => {
    setBugs(prev =>
      prev.map(bug =>
        bug.id === bugId ? { ...bug, found: true } : bug
      )
    );
    
    const newFoundCount = foundCount + 1;
    setFoundCount(newFoundCount);

    if (newFoundCount === TOTAL_BUGS) {
      toast({
        title: "Congratulations!",
        description: "You've debugged the entire site! Your cybersecurity skills are impressive!",
        duration: 5000,
      });
    } else {
      toast({
        title: "Bug Fixed!",
        description: `${TOTAL_BUGS - newFoundCount} more bugs to find!`,
        duration: 2000,
      });
    }
  };

  return (
    <>
      {bugs.map(bug => (
        <AnimatePresence key={bug.id}>
          {!bug.found && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="fixed z-40 cursor-pointer"
              style={{
                top: bug.top,
                left: bug.left,
              }}
              onClick={() => handleBugClick(bug.id)}
            >
              <Bug 
                className="h-6 w-6 text-primary hover:text-accent transition-colors animate-bounce" 
                style={{ animationDelay: `${bug.id * 0.2}s` }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </>
  );
};

export default BugHunt;