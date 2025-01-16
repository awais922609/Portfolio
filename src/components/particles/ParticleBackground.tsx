import { useCallback } from "react";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing golden matrix particles");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Golden matrix particles loaded", container);
  }, []);

  return (
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
            value: "#1a1814", // Dark golden-brown background
          },
          opacity: 0.9
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60, // Reduced for better performance
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: ["#FFD700", "#DAA520", "#FFA500"], // Golden colors
            animation: {
              enable: true,
              speed: 1,
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.6,
            random: true,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.2,
              sync: false
            }
          },
          size: {
            value: 2,
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
            color: "#DAA520", // Golden links
            opacity: 0.3,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.1
            }
          },
          move: {
            enable: true,
            speed: 0.6, // Slower, more elegant movement
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            },
            trail: {
              enable: true,
              length: 3,
              fillColor: "#1a1814"
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
                color: "#FFD700" // Brighter golden color on interaction
              }
            },
            push: {
              quantity: 3 // Reduced for better performance
            }
          }
        },
        detectRetina: true,
        smooth: true
      }}
    />
  );
};

export default ParticleBackground;