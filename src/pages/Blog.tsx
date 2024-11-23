import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: "1",
      title: "Advanced Intrusion Detection Systems",
      description: "Exploring the implementation of machine learning in modern IDS solutions.",
      image: "/placeholder.svg",
      date: "2024-03-15",
    },
    {
      id: "2",
      title: "Email Forensics Techniques",
      description: "A deep dive into email forensics and user location tracing methodologies.",
      image: "/placeholder.svg",
      date: "2024-03-10",
    },
    {
      id: "3",
      title: "Automotive Security",
      description: "Research findings on automobile hacking and virtual control systems.",
      image: "/placeholder.svg",
      date: "2024-03-05",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold"
          >
            Blog Posts
          </motion.h1>
          <Link to="/blog/new">
            <Button variant="outline">
              Create New Post
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;