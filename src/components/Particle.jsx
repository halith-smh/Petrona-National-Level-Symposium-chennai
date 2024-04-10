import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import ParticleConfig from '../utils/particles.json'

import { loadFull } from "tsparticles";
export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log("%c 👋 Hey there, inspector! 🕵️‍♂️ Hope you're enjoying the Symposium website! 🌐  Looking forward to seeing you at the event on April 13th, 2024! 🎉 ️", "color: #4CAF50; font-size: 18px;");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={ParticleConfig}
        />
      )}
    </>
  );
}