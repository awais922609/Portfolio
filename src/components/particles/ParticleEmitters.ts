import type { ISourceOptions } from "tsparticles-engine";

export const particleEmitters: ISourceOptions["emitters"] = [
  {
    direction: "top",
    rate: {
      delay: 2,
      quantity: 1
    },
    position: {
      x: 0,
      y: 100
    },
    size: {
      width: 100,
      height: 0
    },
    particles: {
      shape: {
        type: "char",
        options: {
          char: {
            value: ["SCANNING", "ENCRYPTED"]
          }
        }
      },
      color: {
        value: "#00ff41"
      },
      size: {
        value: 12
      },
      move: {
        direction: "top",
        straight: true,
        speed: 2
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1,
          sync: false
        }
      }
    }
  }
];