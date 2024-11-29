import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  id: string;
  onDelete: (id: string) => void;
}

const BlogCard = ({ title, description, image, date, id, onDelete }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all relative"
    >
      <Button
        variant="destructive"
        size="icon"
        className="absolute top-2 right-2 z-10"
        onClick={() => onDelete(id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
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
        <Link 
          to={`/blog/${id}`}
          className="inline-block mt-4 text-primary hover:text-primary/80 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;