import { motion } from "framer-motion";

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
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-black font-medium rounded-lg hover-scale"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover-scale"
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