import { lazy, Suspense, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ParticleBackground from "@/components/particles/ParticleBackground";
import HackerJargon from "@/components/cybersecurity/HackerJargon";
import LoadingAnimation from "@/components/cybersecurity/LoadingAnimation";
import BinaryGenerator from "@/components/cybersecurity/BinaryGenerator";
import { motion } from "framer-motion";

// Lazy load components
const Hero = lazy(() => import("../components/Hero"));
const Experience = lazy(() => import("../components/Experience"));
const FeaturedProjects = lazy(() => import("../components/FeaturedProjects"));
const FeaturedBlogs = lazy(() => import("../components/FeaturedBlogs"));
const FeaturedCertifications = lazy(() => import("../components/FeaturedCertifications"));
const Quote = lazy(() => import("../components/Quote"));

const LoadingFallback = () => (
  <div className="space-y-8 p-8">
    <Skeleton className="h-[400px] w-full" />
    <Skeleton className="h-[200px] w-full" />
    <Skeleton className="h-[300px] w-full" />
  </div>
);

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};

const Index = () => {
  const [sectionsLoaded, setSectionsLoaded] = useState(false);
  const [preloadedComponents, setPreloadedComponents] = useState(false);

  // Preload components immediately but only display after loading animation
  useEffect(() => {
    // Start preloading components immediately
    Promise.all([
      import("../components/Hero"),
      import("../components/Experience"),
      import("../components/FeaturedProjects"),
      import("../components/FeaturedBlogs"),
      import("../components/FeaturedCertifications"),
      import("../components/Quote")
    ]).then(() => {
      setPreloadedComponents(true);
      console.log("All components preloaded successfully");
    });
    
    // Keep initial loading animation at 1500ms
    const timer = setTimeout(() => {
      setSectionsLoaded(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <ParticleBackground />
      <LoadingAnimation />
      <HackerJargon />
      <BinaryGenerator />
      
      <motion.div
        className="relative z-10"
        initial="hidden"
        animate={sectionsLoaded ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <motion.section variants={sectionVariants}>
            <Hero />
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <Experience />
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <FeaturedProjects />
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <FeaturedBlogs />
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <FeaturedCertifications />
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <Quote />
          </motion.section>
        </Suspense>
      </motion.div>
    </div>
  );
};

export default Index;
