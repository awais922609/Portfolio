import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const CertificationForm = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const [certificateLink, setCertificateLink] = useState("");
  const [issuer, setIssuer] = useState("");
  const [image, setImage] = useState("");
  const { toast } = useToast();
  const { session } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!session?.user) {
      toast({
        title: "Error",
        description: "You must be logged in to create certifications",
        variant: "destructive"
      });
      return;
    }

    try {
      console.log("Creating certification...", { title, certificateLink, issuer, image });
      const { error } = await supabase
        .from('certifications')
        .insert([{
          title: title || "Untitled Certification",
          certificate_link: certificateLink,
          issuer: issuer || "Unknown Issuer",
          image: image || "/placeholder.svg",
          date: new Date().toISOString().split('T')[0],
          user_id: session.user.id
        }]);

      if (error) {
        console.error('Error creating certification:', error);
        throw error;
      }

      toast({
        title: "Success",
        description: "Certification added successfully!",
      });

      onClose();
    } catch (error) {
      console.error('Error creating certification:', error);
      toast({
        title: "Error",
        description: "Failed to create certification",
        variant: "destructive"
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Certification Title
        </label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter certification title"
        />
      </div>
      
      <div>
        <label htmlFor="issuer" className="block text-sm font-medium mb-1">
          Issuer
        </label>
        <Input
          id="issuer"
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
          placeholder="Enter issuer name"
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
        <label htmlFor="certificateLink" className="block text-sm font-medium mb-1">
          Certificate Link/URL
        </label>
        <Input
          id="certificateLink"
          value={certificateLink}
          onChange={(e) => setCertificateLink(e.target.value)}
          placeholder="https://..."
        />
      </div>
      
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Add Certification</Button>
      </div>
    </form>
  );
};

export default CertificationForm;