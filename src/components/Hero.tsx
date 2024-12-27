import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Shield, Terminal, Search, Linkedin } from "lucide-react";
import { useEffect, useState, lazy, Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

// Lazy load the carousel components
const Carousel = lazy(() => import("./carousel").then(module => ({ default: module.Carousel })));
const CarouselContent = lazy(() => import("./carousel").then(module => ({ default: module.CarouselContent })));
const CarouselItem = lazy(() => import("./carousel").then(module => ({ default: module.CarouselItem })));
const CarouselPrevious = lazy(() => import("./carousel").then(module => ({ default: module.CarouselPrevious })));
const CarouselNext = lazy(() => import("./carousel").then(module => ({ default: module.CarouselNext })));
const CarouselDots = lazy(() => import("./carousel").then(module => ({ default: module.CarouselDots })));

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
        const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
        const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        const storedCertifications = JSON.parse(localStorage.getItem('certifications') || '[]');
        
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

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
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
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4 mx-auto" />
            <Skeleton className="h-8 w-1/2 mx-auto" />
            <Skeleton className="h-24 w-2/3 mx-auto" />
          </div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Awais Sajid
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 mb-6"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6" />
                <span className="text-xl">Security Engineer</span>
              </div>
              <div className="flex items-center gap-2">
                <Search className="w-6 h-6" />
                <span className="text-xl">SOC Analyst</span>
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                <span className="text-xl">Penetration Tester</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              A passionate cybersecurity professional dedicated to protecting digital assets and infrastructure through proactive security measures and continuous monitoring.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
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
              <Button variant="outline" asChild>
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
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;