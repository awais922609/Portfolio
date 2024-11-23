import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import Hero from "../components/Hero";
import BlogCard from "../components/BlogCard";
import Experience from "../components/Experience";

const Index = () => {
  const blogs = [
    {
      title: "Advanced Intrusion Detection Systems",
      description: "Exploring the implementation of machine learning in modern IDS solutions.",
      image: "/placeholder.svg",
      date: "2024-03-15",
    },
    {
      title: "Email Forensics Techniques",
      description: "A deep dive into email forensics and user location tracing methodologies.",
      image: "/placeholder.svg",
      date: "2024-03-10",
    },
    {
      title: "Automotive Security",
      description: "Research findings on automobile hacking and virtual control systems.",
      image: "/placeholder.svg",
      date: "2024-03-05",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Hero />
      <Experience />
      
      {/* Blog Section */}
      <section className="py-20" id="blog">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
            <p className="text-muted-foreground">
              Exploring cybersecurity trends and sharing knowledge
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-secondary">
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