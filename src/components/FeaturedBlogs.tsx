import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { supabase } from "@/integrations/supabase/client";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);
        
        if (error) {
          console.error('Error fetching blogs:', error);
        } else {
          setBlogs(data || []);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-8" id="blog">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-muted-foreground">
            Exploring cybersecurity trends and sharing knowledge
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} onDelete={() => {}} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;