import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Shield, Terminal, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext,
  CarouselDots 
} from "./carousel";

const Hero = () => {
  const { isAuthenticated, logout } = useAuth();
  const [projects, setProjects] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects') || '[]');
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const storedCertifications = JSON.parse(localStorage.getItem('certifications') || '[]');
    
    setProjects(storedProjects);
    setBlogs(storedBlogs);
    setCertifications(storedCertifications);
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
        </motion.div>

      {projects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-7xl mx-auto px-4 space-y-12"
        >
          <div className="space-y-12">
            <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full px-4"
              autoplay={true}
              delayMs={5000}
            >
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id}>
                    <div className="glass-card rounded-xl overflow-hidden p-1">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {project.description}
                        </p>
                        {project.link && (
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                              View Project
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
              <CarouselDots />
            </Carousel>
          </div>

          {blogs.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full px-4"
                autoplay={true}
                delayMs={6000}
              >
                <CarouselContent>
                  {blogs.map((blog) => (
                    <CarouselItem key={blog.id}>
                      <div className="glass-card rounded-xl overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <span className="text-sm text-primary">{blog.date}</span>
                          <h3 className="text-xl font-bold mt-2 mb-3">{blog.title}</h3>
                          <a 
                            href={blog.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors"
                          >
                            Read More →
                          </a>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                <CarouselDots />
              </Carousel>
            </div>
          )}

          {certifications.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Recent Certifications</h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full px-4"
                autoplay={true}
                delayMs={7000}
              >
                <CarouselContent>
                  {certifications.map((cert) => (
                    <CarouselItem key={cert.id}>
                      <div className="glass-card rounded-xl overflow-hidden">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-sm text-primary">{cert.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{cert.title}</h3>
                          <p className="text-muted-foreground mb-4">Issued by: {cert.issuer}</p>
                          {cert.certificateLink && (
                            <a
                              href={cert.certificateLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                            >
                              View Certificate →
                            </a>
                          )}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
                <CarouselDots />
              </Carousel>
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
