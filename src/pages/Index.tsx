import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import Experience from "../components/Experience";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CertificationCard from "../components/CertificationCard";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch blogs
        const { data: blogsData, error: blogsError } = await supabase
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);
        
        if (blogsError) {
          console.error('Error fetching blogs:', blogsError);
        } else {
          console.log('Fetched blogs:', blogsData);
          setBlogs(blogsData || []);
        }

        // Fetch projects
        const { data: projectsData, error: projectsError } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);
        
        if (projectsError) {
          console.error('Error fetching projects:', projectsError);
        } else {
          console.log('Fetched projects:', projectsData);
          setProjects(projectsData || []);
        }

        // Fetch certifications
        const { data: certsData, error: certsError } = await supabase
          .from('certifications')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);
        
        if (certsError) {
          console.error('Error fetching certifications:', certsError);
        } else {
          console.log('Fetched certifications:', certsData);
          setCertifications(certsData || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <ParticleBackground />
      <Hero />
      <Experience />
      
      {/* Projects Section */}
      <section className="py-8" id="projects">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              Showcasing my latest work in cybersecurity
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-8" id="blog">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
            <p className="text-muted-foreground">
              Exploring cybersecurity trends and sharing knowledge
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} onDelete={() => {}} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-8" id="certifications">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Top Certifications</h2>
            <p className="text-muted-foreground">
              Professional achievements and qualifications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((certification) => (
              <CertificationCard key={certification.id} {...certification} onDelete={() => {}} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-2xl font-medium italic mb-4">
              "This portfolio is like a well-configured firewall—secure, adaptive, and always monitoring for opportunities."
            </p>
            <footer className="text-primary">- Cybersecurity Portfolio</footer>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
};

export default Index;