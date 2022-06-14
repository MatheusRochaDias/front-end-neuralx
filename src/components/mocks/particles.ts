export const configParticles = {
  fullScreen: { enable: false, zIndex: 0 },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        // enable: true,
        // mode: "push",
      },
      onHover: {
        // enable: true,
        // mode: "repulse",
      },
      // resize: true,
    },
    modes: {
      push: {
        quantity: 5,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.6,
      width: 2,
    },
    collisions: {
      // enable: true,
    },
    move: {
      enable: true,
      // outModes: {
      //   default: "bounce",
      // },
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        // enable: true,
        area: 800,
      },
      value: 90,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 6 },
    },
  },
  // detectRetina: true,
};