import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import HomeButton from "../components/HomeButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import CertificationCard from "../components/CertificationCard";
import CertificationForm from "../components/CertificationForm";

const Certifications = () => {
  const [certifications, setCertifications] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const storedCertifications = JSON.parse(localStorage.getItem('certifications') || '[]');
    setCertifications(storedCertifications);
  }, [isOpen]);

  const handleDelete = (id: string) => {
    const updatedCertifications = certifications.filter(cert => cert.id !== id);
    localStorage.setItem('certifications', JSON.stringify(updatedCertifications));
    setCertifications(updatedCertifications);
    toast({
      title: "Success",
      description: "Certification deleted successfully!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <HomeButton />
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold"
          >
            Certifications
          </motion.h1>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button>Add New Certification</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Certification</DialogTitle>
              </DialogHeader>
              <CertificationForm onClose={() => setIsOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification) => (
            <CertificationCard 
              key={certification.id} 
              {...certification} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
