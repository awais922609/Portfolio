import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Initializing tsParticles");
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#00FF41",
          },
          links: {
            color: "#00FF41",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 60,
          },
          opacity: {
            value: 0.2,
          },
          size: {
            value: { min: 1, max: 2 },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;