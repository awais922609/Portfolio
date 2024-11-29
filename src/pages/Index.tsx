import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import Experience from "../components/Experience";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(storedBlogs.slice(0, 3));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Hero />
      <Experience />
      
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
              <BlogCard key={blog.id} {...blog} />
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
              "Time is what determines security. With enough time, nothing is unhackable."
            </p>
            <footer className="text-primary">- Security Principle</footer>
          </motion.blockquote>
        </div>
      </section>
    </div>
  );
};

export default Index;