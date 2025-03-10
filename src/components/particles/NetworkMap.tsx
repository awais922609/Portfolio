
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface City {
  name: string;
  lat: number;
  lng: number;
  x: number;
  y: number;
}

interface Connection {
  from: number;
  to: number;
  progress: number;
  active: boolean;
  color: string;
}

const NetworkMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cities, setCities] = useState<City[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Major tech hubs around the world
  const cityData = [
    { name: "San Francisco", lat: 37.7749, lng: -122.4194 },
    { name: "New York", lat: 40.7128, lng: -74.0060 },
    { name: "London", lat: 51.5074, lng: -0.1278 },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
    { name: "Singapore", lat: 1.3521, lng: 103.8198 },
    { name: "Sydney", lat: -33.8688, lng: 151.2093 },
    { name: "Berlin", lat: 52.5200, lng: 13.4050 },
    { name: "Bangalore", lat: 12.9716, lng: 77.5946 },
    { name: "Toronto", lat: 43.6532, lng: -79.3832 },
    { name: "Tel Aviv", lat: 32.0853, lng: 34.7818 },
    { name: "Seoul", lat: 37.5665, lng: 126.9780 },
    { name: "Paris", lat: 48.8566, lng: 2.3522 }
  ];

  const mapLatLngToXY = (lat: number, lng: number, width: number, height: number): { x: number, y: number } => {
    // Simple mapping from lat/lng to x/y coordinates
    // This is a simple Mercator-like projection
    const x = (lng + 180) * (width / 360);
    const latRad = lat * Math.PI / 180;
    const mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
    const y = (height / 2) - (width * mercN / (2 * Math.PI));
    return { x, y };
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Update dimensions on resize
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Map cities to screen coordinates
    if (dimensions.width > 0 && dimensions.height > 0) {
      const mappedCities = cityData.map(city => {
        const { x, y } = mapLatLngToXY(city.lat, city.lng, dimensions.width, dimensions.height);
        return { ...city, x, y };
      });
      
      setCities(mappedCities);
      
      // Generate initial connections
      const initialConnections: Connection[] = [];
      for (let i = 0; i < 15; i++) {
        const from = Math.floor(Math.random() * mappedCities.length);
        let to = Math.floor(Math.random() * mappedCities.length);
        // Ensure we don't connect to the same city
        while (to === from) {
          to = Math.floor(Math.random() * mappedCities.length);
        }
        
        initialConnections.push({
          from,
          to,
          progress: 0,
          active: false,
          color: Math.random() > 0.5 ? '#00FF41' : '#39FF14'
        });
      }
      
      setConnections(initialConnections);
    }
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [dimensions.width, dimensions.height]);
  
  // Animate connections
  useEffect(() => {
    if (cities.length === 0 || connections.length === 0) return;
    
    let animationFrameId: number;
    
    const animateConnections = () => {
      setConnections(prevConnections => 
        prevConnections.map(conn => {
          // If connection is inactive, randomly activate it
          if (!conn.active && Math.random() < 0.01) {
            return { ...conn, active: true, progress: 0 };
          }
          
          // If active, animate progress
          if (conn.active) {
            const newProgress = conn.progress + (Math.random() * 0.02) + 0.01;
            
            // Reset when complete
            if (newProgress >= 1) {
              // If finished, create a new connection from the destination
              const newFrom = conn.to;
              let newTo = Math.floor(Math.random() * cities.length);
              while (newTo === newFrom) {
                newTo = Math.floor(Math.random() * cities.length);
              }
              
              return {
                from: newFrom,
                to: newTo,
                progress: 0,
                active: Math.random() < 0.7, // 70% chance to activate immediately
                color: Math.random() > 0.5 ? '#00FF41' : '#39FF14'
              };
            }
            
            return { ...conn, progress: newProgress };
          }
          
          return conn;
        })
      );
      
      animationFrameId = requestAnimationFrame(animateConnections);
    };
    
    animationFrameId = requestAnimationFrame(animateConnections);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cities]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-7 pointer-events-none overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute inset-0"
      >
        {/* Network nodes (cities) */}
        {cities.map((city, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#00FF41]"
            style={{ 
              left: city.x - 3, 
              top: city.y - 3,
              width: 6,
              height: 6
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ delay: 1.5 + index * 0.1 }}
          />
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {connections.map((conn, index) => {
            if (!cities[conn.from] || !cities[conn.to] || !conn.active) return null;
            
            const fromX = cities[conn.from].x;
            const fromY = cities[conn.from].y;
            const toX = cities[conn.to].x;
            const toY = cities[conn.to].y;
            
            // Calculate the point along the line based on progress
            const currentX = fromX + (toX - fromX) * conn.progress;
            const currentY = fromY + (toY - fromY) * conn.progress;
            
            return (
              <g key={index}>
                {/* Dashed line showing the full path */}
                <line 
                  x1={fromX} 
                  y1={fromY} 
                  x2={toX} 
                  y2={toY}
                  stroke={conn.color}
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  strokeOpacity="0.3"
                />
                
                {/* Solid line showing progress */}
                <line 
                  x1={fromX} 
                  y1={fromY} 
                  x2={currentX} 
                  y2={currentY}
                  stroke={conn.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                />
                
                {/* Moving packet */}
                <circle 
                  cx={currentX} 
                  cy={currentY} 
                  r="2"
                  fill={conn.color}
                >
                  <animate 
                    attributeName="r" 
                    values="2;3;2" 
                    dur="1s" 
                    repeatCount="indefinite" 
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      </motion.div>
    </div>
  );
};

export default NetworkMap;
