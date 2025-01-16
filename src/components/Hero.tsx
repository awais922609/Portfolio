import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Shield, Terminal, Search, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const Hero = () => {
  const { isAuthenticated, logout } = useAuth();
  const [projects, setProjects] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [certifications, setCertifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [
          storedProjects,
          storedBlogs,
          storedCertifications
        ] = await Promise.all([
          JSON.parse(localStorage.getItem('projects') || '[]'),
          JSON.parse(localStorage.getItem('blogs') || '[]'),
          JSON.parse(localStorage.getItem('certifications') || '[]')
        ]);
        
        setProjects(storedProjects);
        setBlogs(storedBlogs);
        setCertifications(storedCertifications);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const nameAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const glowAnimation = {
    initial: { textShadow: "0 0 0px #FFD700" },
    animate: {
      textShadow: [
        "0 0 4px #FFD700",
        "0 0 8px #DAA520",
        "0 0 12px #FFD700",
        "0 0 8px #DAA520",
        "0 0 4px #FFD700"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const // Fixed the type error by explicitly typing as "reverse"
      }
    }
  };

  const titleAnimation = {
    initial: { opacity: 0, x: -20 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 + index * 0.1,
        ease: "easeOut"
      }
    })
  };

  const descriptionAnimation = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
      <div className="absolute top-4 right-4">
        {isAuthenticated ? (
          <Button variant="outline" onClick={logout} className="glow-on-hover">
            Logout
          </Button>
        ) : (
          <Button variant="outline" asChild className="glow-on-hover">
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>

      <div className="container mx-auto px-4 text-center mt-16 md:mt-0">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4 mx-auto animate-pulse" />
            <Skeleton className="h-8 w-1/2 mx-auto animate-pulse" />
            <Skeleton className="h-24 w-2/3 mx-auto animate-pulse" />
          </div>
        ) : (
          <motion.div
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            <motion.div
              variants={nameAnimation}
              className="relative inline-block"
            >
              <motion.h1
                variants={glowAnimation}
                className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
              >
                Awais Sajid
              </motion.h1>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {[
                { icon: Shield, text: "Security Engineer" },
                { icon: Search, text: "SOC Analyst" },
                { icon: Terminal, text: "Penetration Tester" }
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={text}
                  variants={titleAnimation}
                  custom={index}
                  className="flex items-center gap-2 icon-hover"
                  whileHover={{ 
                    scale: 1.05, 
                    textShadow: "0 0 8px #FFD700",
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xl">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              variants={descriptionAnimation}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              whileHover={{
                textShadow: "0 0 4px rgba(255, 215, 0, 0.5)",
                transition: { duration: 0.2 }
              }}
            >
              A passionate cybersecurity professional dedicated to protecting digital assets and infrastructure through proactive security measures and continuous monitoring.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button asChild className="hover-scale glow-on-hover">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button variant="outline" asChild className="hover-scale glow-on-hover">
                <Link to="/certifications">View Certifications</Link>
              </Button>
              <Button variant="outline" asChild className="hover-scale glow-on-hover">
                <Link to="/blog">View Blog</Link>
              </Button>
              <Button variant="outline" asChild className="hover-scale glow-on-hover">
                <a 
                  href="https://www.linkedin.com/in/awais-sajid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;