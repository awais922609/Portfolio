import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const CertificationForm = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const [certificateLink, setCertificateLink] = useState("");
  const [issuer, setIssuer] = useState("");
  const [image, setImage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCertification = {
      id: Date.now().toString(),
      title: title || "Untitled Certification",
      certificateLink,
      issuer: issuer || "Unknown Issuer",
      image: image || "/placeholder.svg",
      date: new Date().toISOString().split('T')[0]
    };

    // Get existing certifications from localStorage
    const existingCertifications = JSON.parse(localStorage.getItem('certifications') || '[]');
    
    // Add new certification
    localStorage.setItem('certifications', JSON.stringify([...existingCertifications, newCertification]));

    toast({
      title: "Success",
      description: "Certification added successfully!",
    });

    onClose();
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