import type { IEmitter } from "tsparticles-engine";

export const particleEmitters: IEmitter[] = [
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
];