import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const HomeButton = () => {
  return (
    <Link to="/">
      <Button 
        variant="ghost" 
        size="icon"
        className="fixed top-4 left-4 z-50 hover:bg-primary/20"
      >
        <Home className="h-5 w-5" />
      </Button>
    </Link>
  );
};

export default HomeButton;