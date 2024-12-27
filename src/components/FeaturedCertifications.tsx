import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Award } from "lucide-react";
import CertificationCard from "./CertificationCard";
import { supabase } from "@/integrations/supabase/client";

const FeaturedCertifications = () => {
  const [certifications, setCertifications] = useState<any[]>([]);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const { data, error } = await supabase
          .from('certifications')
          .select('*')
          .order('created_at', { ascending: false })
          .limit(3);
        
        if (error) {
          console.error('Error fetching certifications:', error);
        } else {
          setCertifications(data || []);
        }
      } catch (error) {
        console.error('Error fetching certifications:', error);
      }
    };

    fetchCertifications();
  }, []);

  return (
    <section className="py-8" id="certifications">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Top Certifications</h2>
          <p className="text-muted-foreground">
            Professional achievements and qualifications
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification) => (
            <div key={certification.id} className="flex flex-col">
              <CertificationCard {...certification} onDelete={() => {}} />
              {certification.certificate_link && (
                <Button 
                  variant="outline"
                  className="mt-4 gap-2"
                  onClick={() => window.open(certification.certificate_link, '_blank', 'noopener,noreferrer')}
                >
                  <Award className="h-4 w-4" />
                  View Badge
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCertifications;