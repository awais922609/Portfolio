import type { ISourceOptions } from "tsparticles-engine";

export const particleConfig: ISourceOptions = {
  background: {
    color: {
      value: "transparent",
    },
    image: "radial-gradient(#00ff4133 1px, transparent 1px)",
    position: "50% 50%",
    repeat: "repeat",
    size: "20px 20px",
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  fpsLimit: 60,
  particles: {
    groups: {
      nodes: {
        number: { value: 15 },
        zIndex: { value: 2 },
        color: { value: "#00ff41" },
        shape: { type: "circle" },
        size: { value: 4 },
        opacity: { value: 0.8 },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true,
          outModes: "bounce"
        }
      },
      text: {
        number: { value: 5 },
        zIndex: { value: 1 },
        color: { value: "#00ff41" },
        shape: {
          type: "char",
          options: {
            char: {
              value: ["BREACH DETECTED", "SCANNING", "ENCRYPTED", "SECURE", "ACCESS DENIED"]
            }
          }
        },
        size: { value: 12 },
        opacity: { 
          value: 0.5,
          animation: {
            enable: true,
            speed: 0.5,
            minimumValue: 0.1,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 1,
          direction: "right",
          straight: true
        }
      }
    },
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#00ff41",
      animation: {
        enable: true,
        speed: 20,
        sync: true
      }
    },
    shape: {
      type: ["circle", "triangle"],
    },
    opacity: {
      value: 0.5,
      random: true,
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
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.05
      }
    },
    move: {
      enable: true,
      speed: 1,
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
    }
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "bubble"]
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
        size: 12,
        duration: 2,
        opacity: 0.8,
        color: {
          value: "#00ff41"
        }
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true
};