import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import HomeButton from "../components/HomeButton";
import { useAuth } from "../contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import ProjectForm from "../components/ProjectForm";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import SortableProject from "../components/SortableProject";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
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
    fetchProjects();
  }, [isOpen]);

  const fetchProjects = async () => {
    try {
      console.log("Fetching projects...");
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('position', { ascending: true });

      if (error) throw error;
      
      // If no position is set, set it based on array index
      const projectsWithPosition = (data || []).map((project, index) => ({
        ...project,
        position: project.position ?? index,
      }));
      
      console.log("Fetched projects:", projectsWithPosition);
      setProjects(projectsWithPosition);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive"
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Error",
        description: "You must be logged in as admin to delete projects.",
        variant: "destructive"
      });
      return;
    }

    try {
      console.log("Deleting project:", id);
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Update local state after successful deletion
      setProjects(projects.filter(project => project.id !== id));
      
      toast({
        title: "Success",
        description: "Project deleted successfully!",
      });
    } catch (error) {
      console.error('Error deleting project:', error);
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive"
      });
    }
  };

  const updatePositions = async (newProjects: any[]) => {
    try {
      console.log("Updating positions for projects:", newProjects);
      
      // Update each project's position individually
      for (const [index, project] of newProjects.entries()) {
        console.log(`Updating position for project ${project.id} to ${index}`);
        const { error } = await supabase
          .from('projects')
          .update({ position: index })
          .eq('id', project.id);

        if (error) {
          console.error('Error updating position for project:', project.id, error);
          throw error;
        }
      }

      console.log('Positions updated successfully');
    } catch (error) {
      console.error('Error updating positions:', error);
      toast({
        title: "Error",
        description: "Failed to update positions",
        variant: "destructive"
      });
    }
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    
    if (over && active.id !== over.id) {
      setProjects((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        
        const newItems = arrayMove(items, oldIndex, newIndex);
        // Update positions in database
        updatePositions(newItems);
        
        return newItems;
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
            Projects
          </motion.h1>
          {isAuthenticated && (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button>Add New Project</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Project</DialogTitle>
                </DialogHeader>
                <ProjectForm onClose={() => setIsOpen(false)} />
              </DialogContent>
            </Dialog>
          )}
        </div>
        
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={projects.map(p => p.id)} strategy={verticalListSortingStrategy}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <SortableProject
                  key={project.id}
                  {...project}
                  onDelete={() => handleDelete(project.id)}
                  isAuthenticated={isAuthenticated}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default Projects;