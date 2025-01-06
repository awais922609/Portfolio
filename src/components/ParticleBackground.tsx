import { useCallback } from "react";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing particles with cybersecurity theme");
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Cybersecurity particles loaded", container);
  }, []);

  return (
    <Particles
      className="absolute inset-0 -z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 30,
        particles: {
          groups: {
            z5000: {
              number: {
                value: 70
              },
              zIndex: {
                value: 5000
              }
            },
            z7500: {
              number: {
                value: 30
              },
              zIndex: {
                value: 75
              }
            },
            z2500: {
              number: {
                value: 50
              },
              zIndex: {
                value: 25
              }
            },
            z1000: {
              number: {
                value: 40
              },
              zIndex: {
                value: 10
              }
            }
          },
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#00ff41", "#008F11"],
            animation: {
              enable: true,
              speed: 20,
              sync: true
            }
          },
          shape: {
            type: ["circle", "triangle", "arrow"],
            options: {
              arrow: {
                heightLoss: 0.5
              }
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1,
              sync: false
            }
          },
          links: {
            enable: true,
            distance: 150,
            color: "#00ff41",
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            },
            trail: {
              enable: true,
              length: 4,
              fillColor: "#000000"
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          zIndex: {
            value: 5,
            opacityRate: 0.5
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.5
              }
            },
            bubble: {
              distance: 200,
              size: 5,
              duration: 2,
              opacity: 0.5
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              quantity: 1
            },
            remove: {
              quantity: 2
            }
          }
        },
        detectRetina: false,
        emitters: [
          {
            direction: "top-right",
            rate: {
              delay: 1,
              quantity: 1
            },
            position: {
              x: 0,
              y: 100
            },
            size: {
              width: 0,
              height: 0
            },
            particles: {
              shape: {
                type: "arrow"
              },
              size: {
                value: 3
              },
              move: {
                speed: 5,
                straight: true
              },
              life: {
                duration: {
                  sync: true,
                  value: 1
                }
              }
            }
          },
          {
            direction: "top-left",
            rate: {
              delay: 1,
              quantity: 1
            },
            position: {
              x: 100,
              y: 100
            },
            size: {
              width: 0,
              height: 0
            },
            particles: {
              shape: {
                type: "arrow"
              },
              size: {
                value: 3
              },
              move: {
                speed: 5,
                straight: true
              },
              life: {
                duration: {
                  sync: true,
                  value: 1
                }
              }
            }
          }
        ]
      }}
    />
  );
};

export default ParticleBackground;