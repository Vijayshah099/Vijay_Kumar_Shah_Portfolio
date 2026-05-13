import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({ isDarkMode }) => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="fixed inset-0 z-[1] pointer-events-none"
            options={{
  background: {
    color: {
      value: "transparent",
    },
  },

  fpsLimit: 120,

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },

    modes: {
      grab: {
        distance: 180,
        links: {
          opacity: 0.8,
        },
      },
    },
  },

  particles: {
    color: {
      value: ["#8b5cf6", "#06b6d4", "#3b82f6"],
    },

    links: {
      color: "#38bdf8",
      distance: 140,
      enable: true,
      opacity: 0.35,
      width: 1.2,
    },

    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 1.5,
      straight: false,
    },

    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 90,
    },

    opacity: {
      value: 0.7,
    },

    shape: {
      type: "circle",
    },

    size: {
      value: { min: 1, max: 4 },
    },
  },

  detectRetina: true,
}}
        />
    );
};

export default ParticlesBackground;
