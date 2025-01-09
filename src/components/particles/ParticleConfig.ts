import type { ISourceOptions } from "tsparticles-engine";

export const particleConfig: ISourceOptions = {
  background: {
    color: {
      value: "#000000",
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#00ff41", "#00ffff", "#00ff9d"],
      animation: {
        enable: true,
        speed: 2,
        sync: false
      }
    },
    shape: {
      type: "circle",
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
      value: 3,
      random: true,
      animation: {
        enable: true,
        speed: 2,
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
      speed: 1,
      direction: "none" as const,
      random: true,
      straight: false,
      outModes: {
        default: "bounce" as const
      },
      trail: {
        enable: true,
        length: 3,
        fillColor: "#000000"
      }
    },
    zIndex: {
      value: -1,
      opacityRate: 0.5
    }
  },
  interactivity: {
    detectsOn: "window" as const,
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
          opacity: 0.8
        }
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true,
  fullScreen: {
    enable: true,
    zIndex: -1
  }
};