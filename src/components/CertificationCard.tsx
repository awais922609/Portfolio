import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Trash2, Award } from "lucide-react";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  id: string;
  onDelete: (id: string) => void;
}

const CertificationCard = ({ title, issuer, date, id, onDelete }: CertificationCardProps) => {
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
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-6 w-6 text-primary" />
          <span className="text-sm text-primary">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground">Issued by: {issuer}</p>
      </div>
    </motion.article>
  );
};

export default CertificationCard;