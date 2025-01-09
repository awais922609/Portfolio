import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 max-w-lg w-full text-center space-y-6"
      >
        <h1 className="text-4xl font-bold text-primary">Error 404</h1>
        <p className="text-lg text-primary/80">
          The file you're looking for has been encrypted and sold on the dark web.
        </p>
        <Button asChild className="mt-4">
          <Link to="/">Return to Safety</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;