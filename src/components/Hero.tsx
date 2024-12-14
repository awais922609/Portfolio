import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Hero = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
      {/* Login/Logout Button in top right */}
      <div className="absolute top-4 right-4">
        {isAuthenticated ? (
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Cybersecurity Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Securing digital landscapes, one byte at a time. Explore my journey through the realm of cybersecurity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild>
            <Link to="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/certifications">View Certifications</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/blog">View Blog</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;