import { useState } from 'react';
import { Terminal } from 'lucide-react';

const RESPONSES: Record<string, string> = {
  hack: "You're already in. Why so curious?",
  help: "This is a portfolio, not your terminal.",
  hello: "Greetings, fellow cybernaut!",
  exit: "Nice try! But there's no escape from awesome.",
  default: "Command not recognized. Try 'help' for... well, more confusion."
};

const HackerConsole = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = input.toLowerCase().trim();
    const response = RESPONSES[command] || RESPONSES.default;
    setOutput(response);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto bg-black/80 p-4 rounded-lg border border-primary/30">
      <div className="flex items-center gap-2 mb-2">
        <Terminal className="w-4 h-4 text-primary" />
        <span className="text-primary text-sm">Terminal</span>
      </div>
      {output && (
        <div className="text-primary/80 text-sm mb-2">
          {output}
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <span className="text-primary">{'>'}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-primary"
          placeholder="Type 'help' for... more confusion"
        />
      </form>
    </div>
  );
};

export default HackerConsole;