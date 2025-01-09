import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const CommandLine = () => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    
    const responses: { [key: string]: string } = {
      "hack": "Hacking FBI... Just kidding. Try harder.",
      "cd /projects": "Directory changed. Please wait while I compile your awesomeness.",
      "help": "Available commands: hack, cd /projects, clear, exit",
      "clear": "",
      "exit": "Nice try! You can't escape that easily.",
      "": "Type 'help' for available commands"
    };

    const newOutput = responses[command.toLowerCase()] || "Command not recognized. Type 'help' for available commands.";
    
    if (command.toLowerCase() === "clear") {
      setOutput([]);
    } else {
      setOutput(prev => [...prev, `> ${command}`, newOutput]);
    }
    
    setCommand("");
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-4 right-4 w-96 h-64 glass-card rounded-lg overflow-hidden"
    >
      <div className="bg-black/90 p-2 flex items-center justify-between">
        <span className="text-primary text-sm">Terminal</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="p-4 h-[calc(100%-2.5rem)] overflow-auto font-mono text-sm">
        <div className="space-y-2 mb-4">
          {output.map((line, i) => (
            <div key={i} className="text-primary">{line}</div>
          ))}
        </div>
        <form onSubmit={handleCommand} className="flex items-center gap-2">
          <span className="text-primary">&gt;</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-primary"
            autoFocus
          />
        </form>
      </div>
    </motion.div>
  );
};

export default CommandLine;