import type { ISourceOptions } from "tsparticles-engine";

export const particleConfig: ISourceOptions = {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 60,
  particles: {
    groups: {
      matrix: {
        number: { value: 80 },
        zIndex: { value: 1 },
        color: { value: "#00ff41" },
        shape: { type: "char", options: { char: { value: ["0", "1"] } } },
        size: { value: 12 },
        move: {
          direction: "bottom",
          speed: 3,
          straight: true
        }
      },
      nodes: {
        number: { value: 40 },
        zIndex: { value: 2 },
        color: { value: ["#00ff41", "#0FA0CE", "#33C3F0"] },
        shape: { type: "circle" },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true
        }
      },
      overlay: {
        number: { value: 15 },
        zIndex: { value: 3 },
        color: { value: "#ffffff" },
        shape: { type: "polygon", options: { polygon: { sides: 6 } } },
        opacity: { value: 0.1 },
        size: { value: 15 },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          random: true
        }
      }
    },
    number: {
      value: 0,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#00ff41", "#0FA0CE", "#33C3F0"],
      animation: {
        enable: true,
        speed: 20,
        sync: true
      }
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
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },
  detectRetina: true,
  fullScreen: {
    enable: false,
    zIndex: -1
  }
};