document.addEventListener('DOMContentLoaded', function() {
  const sun = document.getElementById('sun');
  const mercury = document.getElementById('mercury');
  const venus = document.getElementById('venus');
  const earth = document.getElementById('earth');
  const mars = document.getElementById('mars');
  const jupiter = document.getElementById('jupiter');
  const saturn = document.getElementById('saturn');
  const uranus = document.getElementById('uranus');
  const neptune = document.getElementById('neptune');

  const planets = [
    { element: mercury, radius: 70, speed: 0.02, angle: Math.random() * Math.PI * 2 },
    { element: venus, radius: 100, speed: 0.015, angle: Math.random() * Math.PI * 2 },
    { element: earth, radius: 140, speed: 0.01, angle: Math.random() * Math.PI * 2 },
    { element: mars, radius: 180, speed: 0.008, angle: Math.random() * Math.PI * 2 },
    { element: jupiter, radius: 250, speed: 0.005, angle: Math.random() * Math.PI * 2 },
    { element: saturn, radius: 320, speed: 0.004, angle: Math.random() * Math.PI * 2 },
    { element: uranus, radius: 380, speed: 0.003, angle: Math.random() * Math.PI * 2 },
    { element: neptune, radius: 430, speed: 0.002, angle: Math.random() * Math.PI * 2 }
  ];

  function updatePlanetPositions() {
    planets.forEach(planet => {
      planet.angle += planet.speed;
      const x = Math.cos(planet.angle) * planet.radius;
      const y = Math.sin(planet.angle) * planet.radius;
      planet.element.style.left = x + 'px';
      planet.element.style.top = y + 'px';
      planet.element.style.transform = 'translate(-50%, -50%)';
    });
  }

  function animationLoop() {
    updatePlanetPositions();
    requestAnimationFrame(animationLoop);
  }

  animationLoop();
});
