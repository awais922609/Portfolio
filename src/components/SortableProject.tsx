import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Trash2, GripVertical } from "lucide-react";
import { toast } from "sonner";

interface SortableProjectProps {
  id: string;
  title: string;
  description?: string;
  image?: string;
  link?: string;
  style?: React.CSSProperties;
  attributes?: any;
  listeners?: any;
  isDragging?: boolean;
  onDelete?: () => void;
  isAuthenticated?: boolean;
}

const SortableProject = ({
  title,
  description,
  image,
  link,
  style,
  attributes,
  listeners,
  isDragging,
  onDelete,
  isAuthenticated,
}: SortableProjectProps) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      toast.success("Project deleted successfully");
    }
  };

  return (
    <motion.div
      className={`glass-card rounded-lg overflow-hidden ${
        isDragging ? "opacity-50" : ""
      }`}
      style={{
        ...style,
        transform: CSS.Transform.toString(style?.transform),
      }}
    >
      <div className="relative">
        {isAuthenticated && (
          <div className="absolute top-2 right-2 z-10 flex gap-2">
            <Button
              variant="destructive"
              size="icon"
              className="h-8 w-8"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 cursor-grab"
              {...attributes}
              {...listeners}
            >
              <GripVertical className="h-4 w-4" />
            </Button>
          </div>
        )}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
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
  );
};

export default SortableProject;