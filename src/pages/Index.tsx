import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components
const ParticleBackground = lazy(() => import("../components/particles/ParticleBackground"));
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

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Suspense fallback={<LoadingFallback />}>
        <ParticleBackground />
<<<<<<< HEAD
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Hero />
          <Experience />
          <FeaturedProjects />
          <FeaturedBlogs />
          <FeaturedCertifications />
          <Quote />
          <SelfDestruct />
          <BugHunt />
        </motion.div>
=======
        <Hero />
        <Experience />
        <FeaturedProjects />
        <FeaturedBlogs />
        <FeaturedCertifications />
        <Quote />
>>>>>>> parent of 6b1d3fb (Add self-destruct button and bug hunt game)
      </Suspense>
    </div>
  );
};

export default Index;