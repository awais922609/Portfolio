import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const BlogForm = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would be an API call
    const newBlog = {
      id: Date.now().toString(),
      title,
      image: image || "/placeholder.svg",
      description: description.replace(/\n/g, '<br>'), // Convert newlines to <br> tags
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

  const handleImageInsert = () => {
    const imageUrl = prompt("Enter image URL:");
    if (imageUrl) {
      const imageTag = `<img src="${imageUrl}" alt="Blog image" class="w-full h-auto my-4 rounded-lg" />`;
      setDescription(prev => prev + imageTag);
    }
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
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <div className="space-y-2">
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="min-h-[200px]"
            placeholder="You can include HTML content and images..."
          />
          <Button type="button" variant="outline" onClick={handleImageInsert}>
            Insert Image
          </Button>
        </div>
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