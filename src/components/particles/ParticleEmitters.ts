import type { ISourceOptions } from "tsparticles-engine";

export const particleEmitters: ISourceOptions["emitters"] = [
  {
    direction: "top",
    rate: {
      delay: 0.5,
      quantity: 2
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
      groups: ["matrix"],
      move: {
        direction: "bottom",
        straight: true
      },
      opacity: {
        value: 0.3
      },
      size: {
        value: 12
      }
    }
  }
];