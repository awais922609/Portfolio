import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import HomeButton from "../components/HomeButton";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import BlogForm from "../components/BlogForm";
import { useToast } from "../components/ui/use-toast";

const Blog = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(storedBlogs);
  }, [isOpen]);

  const handleDelete = (id: string) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
    toast({
      title: "Success",
      description: "Blog deleted successfully!",
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
            Blog
          </motion.h1>
          {isAuthenticated && (
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button>Add New Blog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Blog</DialogTitle>
                </DialogHeader>
                <BlogForm onClose={() => setIsOpen(false)} />
              </DialogContent>
            </Dialog>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;