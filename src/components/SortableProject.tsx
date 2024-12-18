import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Trash2, GripVertical, Linkedin } from "lucide-react";
import { toast } from "sonner";

interface SortableProjectProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
  };
  onDelete: (id: string) => void;
  isAuthenticated: boolean;
}

export function SortableProject({ project, onDelete, isAuthenticated }: SortableProjectProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: project.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = () => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to delete projects");
      return;
    }
    onDelete(project.id);
    toast.success("Project deleted successfully");
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all relative"
    >
      {isAuthenticated && (
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
            onClick={handleDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      )}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex justify-between items-center">
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
          <a
            href="https://www.linkedin.com/in/awais-sajid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
          >
            <Linkedin className="h-5 w-5" />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}