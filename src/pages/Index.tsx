import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load components
const ParticleBackground = lazy(() => import("../components/ParticleBackground"));
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
    <motion.div 
      className="min-h-screen bg-background text-foreground pt-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Suspense fallback={<LoadingFallback />}>
        <ParticleBackground />
        <Hero />
        <Experience />
        <FeaturedProjects />
        <FeaturedBlogs />
        <FeaturedCertifications />
        <Quote />
      </Suspense>
    </motion.div>
  );
};

export default Index;