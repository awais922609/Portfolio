import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

const CertificationForm = ({ onClose }: { onClose: () => void }) => {
  const [title, setTitle] = useState("");
  const [certificateLink, setCertificateLink] = useState("");
  const [issuer, setIssuer] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCertification = {
      id: Date.now().toString(),
      title,
      certificateLink,
      issuer,
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
          required
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
          required
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
          required
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