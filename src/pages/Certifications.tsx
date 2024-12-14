import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import HomeButton from "../components/HomeButton";
import { useAuth } from "../contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import CertificationCard from "../components/CertificationCard";
import CertificationForm from "../components/CertificationForm";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from '@dnd-kit/sortable';

const Certifications = () => {
  const [certifications, setCertifications] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const storedCertifications = JSON.parse(localStorage.getItem('certifications') || '[]');
    setCertifications(storedCertifications);
  }, [isOpen]);

  const handleDelete = (id: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Error",
        description: "You must be logged in as admin to delete certifications.",
        variant: "destructive"
      });
      return;
    }
    const updatedCertifications = certifications.filter(cert => cert.id !== id);
    localStorage.setItem('certifications', JSON.stringify(updatedCertifications));
    setCertifications(updatedCertifications);
    toast({
      title: "Success",
      description: "Certification deleted successfully!",
    });
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setCertifications((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        const newOrder = arrayMove(items, oldIndex, newIndex);
        localStorage.setItem('certifications', JSON.stringify(newOrder));
        return newOrder;
      });
    }
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
          {isAuthenticated && (
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
          )}
        </div>
        
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext 
            items={certifications.map(cert => cert.id)}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((certification) => (
                <CertificationCard 
                  key={certification.id} 
                  {...certification} 
                  onDelete={handleDelete} 
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Certifications;