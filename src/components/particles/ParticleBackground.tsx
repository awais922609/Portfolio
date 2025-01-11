import { useCallback } from "react";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing matrix-style particles");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Matrix particles loaded", container);
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
          opacity: 0.8
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#00ff41", "#00ffff", "#0077ff"],
            animation: {
              enable: true,
              speed: 2,
              sync: false
            }
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.8,
            random: true,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.3,
              sync: false
            }
          },
          size: {
            value: 2.5,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.5,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00ff41",
            opacity: 0.4,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.1
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
              length: 5,
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
                opacity: 0.8,
                color: "#00ffff"
              }
            },
            push: {
              quantity: 4
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