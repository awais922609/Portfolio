import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import ParticleBackground from "@/components/particles/ParticleBackground";
import HackerJargon from "@/components/cybersecurity/HackerJargon";

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

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <ParticleBackground />
      <HackerJargon />
      <div className="relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          <Hero />
          <Experience />
          <FeaturedProjects />
          <FeaturedBlogs />
          <FeaturedCertifications />
          <Quote />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;