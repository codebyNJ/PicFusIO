import React, { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    const particlesContainer = document.querySelector(".particles");

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.width = `${Math.random() * 5 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.top = `${y}px`;
      particle.style.left = `${x}px`;
      particle.style.setProperty("--random-x", `${(Math.random() - 0.5) * 200}px`);
      particle.style.setProperty("--random-y", `${(Math.random() - 0.5) * 200}px`);
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 2000); // Remove after the animation ends
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="particles"></div>;
};

export default Particles;
