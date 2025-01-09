import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BinaryGenerator = () => {
  const generateBinary = () => {
    const binary = Array.from({ length: 8 }, () => Math.round(Math.random())).join("");
    toast("Yes, it's all random. No, it's not a secret code.", {
      description: binary,
      duration: 3000,
    });
  };

  return (
    <Button
      onClick={generateBinary}
      className="fixed top-4 right-4 glass-card hover:bg-primary/20"
      variant="outline"
    >
      Generate Binary
    </Button>
  );
};

export default BinaryGenerator;