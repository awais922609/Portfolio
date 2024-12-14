import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Trash2, GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  id: string;
  image: string;
  certificateLink: string;
  onDelete: (id: string) => void;
}

const CertificationCard = ({ 
  title, 
  issuer, 
  date, 
  id, 
  image,
  certificateLink,
  onDelete 
}: CertificationCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.article
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all relative"
    >
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="cursor-grab active:cursor-grabbing"
          {...attributes}
          {...listeners}
        >
          <GripVertical className="h-4 w-4" />
        </Button>
        <Button
          variant="destructive"
          size="icon"
          onClick={() => onDelete(id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-primary">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">Issued by: {issuer}</p>
        {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            View Certificate →
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default CertificationCard;