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
            value: "#0a0a0a",
          },
          opacity: 0.9
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: ["#FFD700", "#DAA520", "#FFA500"],
            animation: {
              enable: true,
              speed: 1,
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
            color: "#DAA520",
            opacity: 0.5,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.2
            }
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            },
            trail: {
              enable: true,
              length: 3,
              fillColor: "#0a0a0a"
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
                color: "#FFD700"
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
  );
};

export default ParticleBackground;