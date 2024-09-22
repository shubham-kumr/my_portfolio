import { useEffect } from 'react';
import { Fireworks } from 'fireworks-js';

function FireworksDisplay() {
  useEffect(() => {
    const canvas = document.querySelector('#fireworks');
    if (canvas) {
      const fireworks = new Fireworks(canvas, {
        opacity: 0.9,
        sound: {
          enabled: false,
        },
        rocketsPoint: { min: 10, max: 25 },
      });

      fireworks.start();

      const timer = setTimeout(() => {
        fireworks.stop();
      }, 3000);

      return () => {
        clearTimeout(timer); 
        fireworks.stop();
      };
    }
  }, []);

  return <canvas id="fireworks" className="fixed top-0 left-0 w-full h-full pointer-events-none" />;
}

export default FireworksDisplay;
