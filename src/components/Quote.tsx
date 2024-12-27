import { motion } from "framer-motion";

const Quote = () => {
  return (
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
  );
};

export default Quote;