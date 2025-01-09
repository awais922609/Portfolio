export const particleConfig = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 30,
  particles: {
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
      type: ["circle", "triangle"],
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
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    },
    zIndex: {
      value: -1,
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
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: false
};