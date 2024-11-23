import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Security Engineer
          </span>
          <h1 className="text-4xl md:text-6xl font-bold">
            Awais Sajid
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated Security Engineer with expertise in implementing robust security solutions
            and conducting comprehensive security assessments.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
            <motion.a
              href="mailto:awaissajid@cyberdude.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={20} />
              <span>awaissajid@cyberdude.com</span>
            </motion.a>
            <motion.a
              href="tel:+923175830971"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={20} />
              <span>+92 317 5830971</span>
            </motion.a>
            <motion.div
              className="flex items-center gap-2 text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin size={20} />
              <span>Islamabad, Pakistan</span>
            </motion.div>
            <motion.a
              href="https://www.linkedin.com/in/awais-sajid"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
          </div>

          <div className="flex gap-4 justify-center mt-8">
            <Link
              to="/blog"
              className="px-6 py-3 bg-primary text-black font-medium rounded-lg hover:scale-105 transition-transform"
            >
              View Blog
            </Link>
            <a
              href="#projects"
              className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:scale-105 transition-transform"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;