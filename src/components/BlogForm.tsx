import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const BlogForm = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newBlog = {
      id: Date.now().toString(),
      title,
      image: image || "/placeholder.svg",
      url,
      date: new Date().toISOString().split('T')[0]
    };

    // Get existing blogs from localStorage
    const existingBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    
    // Add new blog
    localStorage.setItem('blogs', JSON.stringify([...existingBlogs, newBlog]));

    toast({
      title: "Success",
      description: "Blog post created successfully!",
    });

    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <div>
        <label htmlFor="image" className="block text-sm font-medium mb-1">
          Cover Image URL
        </label>
        <Input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Enter image URL or leave empty for placeholder"
        />
      </div>
      
      <div>
        <label htmlFor="url" className="block text-sm font-medium mb-1">
          Blog URL
        </label>
        <Input
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://..."
          required
        />
      </div>
      
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Create Post</Button>
      </div>
    </form>
  );
};

export default BlogForm;