
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Shield, Terminal, Search, Linkedin, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const Hero = () => {
  const { isAuthenticated, logout } = useAuth();
  const [projects, setProjects] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [certifications, setCertifications] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [typewriterComplete, setTypewriterComplete] = useState(false);

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
    
    // Simulate typewriter effect completion
    const timer = setTimeout(() => {
      setTypewriterComplete(true);
    }, 3000);
    
    return () => clearTimeout(timer);
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

  const scanlineVariants = {
    animate: {
      y: ["0%", "100%"],
      opacity: [0.3, 0.1, 0.3],
      transition: {
        y: {
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        },
        opacity: {
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "reverse" as const
        }
      }
    }
  };

  const buttonContainerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };

  const scrollIndicatorVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: [0.2, 1, 0.2],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        delay: 2.5
      }
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Digital scanline effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent"
        variants={scanlineVariants}
        animate="animate"
      />
      
      <div className="absolute top-4 right-4 z-20">
        {isAuthenticated ? (
          <Button variant="outline" onClick={logout} className="glow-on-hover backdrop-blur-md bg-black/30">
            Logout
          </Button>
        ) : (
          <Button variant="outline" asChild className="glow-on-hover backdrop-blur-md bg-black/30">
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>

      <div className="container mx-auto px-4 text-center mt-16 md:mt-0 relative z-10">
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
                className="text-5xl md:text-7xl font-bold mb-4 text-gradient relative"
              >
                <span className="relative">
                  Awais Sajid
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: typewriterComplete ? "100%" : "0%" }}
                    transition={{ 
                      duration: 1.5,
                      delay: 0.5,
                      ease: "easeInOut"
                    }}
                  />
                </span>
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
                  className="flex items-center gap-2 icon-hover glass-card py-1 px-3 rounded-full"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 15px rgba(0, 255, 65, 0.5)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-lg">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.p 
              variants={descriptionAnimation}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto glass-card p-4 rounded-lg backdrop-blur-sm"
              whileHover={{
                boxShadow: "0 0 15px rgba(0, 255, 65, 0.15)",
                transition: { duration: 0.2 }
              }}
            >
              A passionate cybersecurity professional dedicated to protecting digital assets and infrastructure through proactive security measures and continuous monitoring.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center mb-12"
              variants={buttonContainerVariants}
            >
              {[
                { text: "View Projects", path: "/projects", isPrimary: true },
                { text: "View Certifications", path: "/certifications", isPrimary: false },
                { text: "View Blog", path: "/blog", isPrimary: false },
              ].map((button, index) => (
                <motion.div key={button.text} variants={buttonVariants}>
                  <Button 
                    asChild 
                    variant={button.isPrimary ? "default" : "outline"} 
                    className={`hover-scale ${button.isPrimary ? 'glow-on-hover bg-primary/80 backdrop-blur-md' : 'glow-on-hover glass-card'}`}
                  >
                    <Link to={button.path}>{button.text}</Link>
                  </Button>
                </motion.div>
              ))}
              <motion.div variants={buttonVariants}>
                <Button variant="outline" asChild className="hover-scale glow-on-hover glass-card">
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
            
            <motion.div
              variants={scrollIndicatorVariants}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
              <span className="text-xs text-primary/80 mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
