import { useState, useEffect } from 'react';

const BinaryTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString(2).padStart(6, '0');
      const minutes = now.getMinutes().toString(2).padStart(6, '0');
      const seconds = now.getSeconds().toString(2).padStart(6, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    const timer = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-4 right-4 font-mono text-primary text-sm bg-black/50 p-2 rounded">
      {time}
    </div>
  );
};

export default BinaryTime;