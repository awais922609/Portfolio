import type { EmitterInstance } from "tsparticles-engine";

export const particleEmitters: EmitterInstance[] = [
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
  },
  {
    direction: "none",
    rate: {
      delay: 2,
      quantity: 1
    },
    position: {
      x: 50,
      y: 50
    },
    size: {
      width: 100,
      height: 100
    },
    particles: {
      groups: ["overlay"],
      opacity: {
        value: 0.1
      },
      size: {
        value: { min: 15, max: 30 }
      }
    }
  }
];