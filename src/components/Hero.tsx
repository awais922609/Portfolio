import { motion } from "framer-motion";
import { Mail, Terminal, Shield, Cpu, Network } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-4xl mx-auto"
        >
          <div className="glass-card p-8">
            <div className="flex items-center gap-2 mb-6 text-primary/80">
              <Terminal size={20} />
              <span className="text-sm">system@cybersecurity:~$</span>
            </div>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="typing-effect"
              >
                <span className="text-sm text-primary/60">{'>>'} Initializing security profile...</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold cursor-blink">
                  Awais Sajid
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex flex-wrap gap-4 text-sm"
              >
                <span className="flex items-center gap-2">
                  <Shield size={16} />
                  Security Engineer
                </span>
                <span className="flex items-center gap-2">
                  <Cpu size={16} />
                  Penetration Tester
                </span>
                <span className="flex items-center gap-2">
                  <Network size={16} />
                  Network Security
                </span>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-lg text-primary/80"
              >
                Dedicated Security Engineer with expertise in implementing robust security solutions
                and conducting comprehensive security assessments.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            >
              <a
                href="mailto:awaissajid@cyberdude.com"
                className="glass-card p-4 hover:border-primary/50 transition-colors flex items-center gap-3"
              >
                <Mail size={20} />
                <span className="text-sm">awaissajid@cyberdude.com</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/awais-sajid"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 hover:border-primary/50 transition-colors flex items-center gap-3"
              >
                <Terminal size={20} />
                <span className="text-sm">/in/awais-sajid</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="flex gap-4 mt-8"
            >
              <Link
                to="/blog"
                className="glass-card px-6 py-3 hover:border-primary/50 transition-colors text-sm flex items-center gap-2"
              >
                <Terminal size={16} />
                View Blog
              </Link>
              <Link
                to="/projects"
                className="glass-card px-6 py-3 hover:border-primary/50 transition-colors text-sm flex items-center gap-2"
              >
                <Terminal size={16} />
                View Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;