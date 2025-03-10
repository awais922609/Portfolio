
import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { motion } from "framer-motion";

const ParticleBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing golden matrix particles");
    await loadFull(engine);
    setIsInitialized(true);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Golden matrix particles loaded", container);
  }, []);

  const gridLinesVariant = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.07,
      transition: {
        delay: 1.2,
        duration: 1.5
      }
    }
  };

  return (
    <>
      <Particles
        className="absolute inset-0 -z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: -1
          },
          background: {
            color: {
              value: "#050505",
            },
            opacity: 0.9
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 900
              }
            },
            color: {
              value: ["#00FF41", "#76ff03", "#39FF14"],
              animation: {
                enable: true,
                speed: 2,
                sync: false
              }
            },
            shape: {
              type: ["circle", "triangle"],
              options: {
                triangle: {
                  sides: 3
                }
              }
            },
            opacity: {
              value: 0.8,
              random: true,
              animation: {
                enable: true,
                speed: 0.3,
                minimumValue: 0.4,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 0.8,
                minimumValue: 0.5,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#00FF41",
              opacity: 0.5,
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.1
              }
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              },
              trail: {
                enable: true,
                length: 3,
                fillColor: "#000000"
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: {
                enable: true,
                mode: "grab"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.7,
                  color: "#00FF41"
                }
              },
              push: {
                quantity: 3
              }
            }
          },
          detectRetina: true,
          smooth: true
        }}
      />
      
      {/* Digital grid background */}
      <motion.div 
        className="absolute inset-0 -z-9 data-grid pointer-events-none"
        variants={gridLinesVariant}
        initial="initial"
        animate="animate"
      />
      
      {/* Digital scanlines */}
      <div className="absolute inset-0 -z-8 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <div 
            key={index}
            className="digital-scanline"
            style={{ 
              animationDelay: `${index * 1.5}s`,
              top: `${index * 20}%`
            }}
          />
        ))}
      </div>
      
      {/* Reactive glow at mouse position */}
      {isInitialized && (
        <motion.div
          className="fixed w-[300px] h-[300px] rounded-full pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(0,255,65,0.1) 0%, rgba(0,255,65,0) 70%)",
            left: mousePosition.x - 150,
            top: mousePosition.y - 150,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );
};

export default ParticleBackground;
