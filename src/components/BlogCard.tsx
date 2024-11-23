import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
}

const BlogCard = ({ title, description, image, date }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden hover-scale"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <span className="text-sm text-primary">{date}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <button className="mt-4 text-primary hover:text-primary/80 transition-colors">
          Read More →
        </button>
      </div>
    </motion.article>
  );
};

export default BlogCard;