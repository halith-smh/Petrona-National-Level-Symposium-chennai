import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import ParticleConfig from '../utils/particles.json';

import { loadFull } from "tsparticles";

function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    async function initParticleEngine() {
      try {
        const engine = await initParticlesEngine();
        await loadFull(engine);
        setInit(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    }

    initParticleEngine();
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{ zIndex: 1 }}
          options={ParticleConfig}
        />
      )}
    </>
  );
}

export default Particle;