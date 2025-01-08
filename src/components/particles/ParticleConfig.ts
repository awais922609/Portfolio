import type { ISourceOptions } from "tsparticles-engine";

export const particleConfig: ISourceOptions = {
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
      type: ["circle", "triangle", "arrow"]
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
    detectsOn: "window" as const,
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
  detectRetina: false
};