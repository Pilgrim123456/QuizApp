import React, { useState } from 'react';
import './Wheel.css';

const Wheel = () => {
  // States to keep track of the rotation, spinning status, and prize result.
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  // Define prizes for each of the 8 sectors.
  const prizes = [
    'You should dance!', 
    'You should sing!', 
    'Hug somebody!', 
    'Give us a speech!', 
    'You won $20!', 
    'There is no prize for you! Oops.', 
    'You are single.', 
    'You are cheating on your partner.'
  ];

  const spinWheel = () => {
    if (spinning) return; // Prevent multiple spins at once.
    setResult(null);
    setSpinning(true);

    // Calculate a random extra rotation between 0 and 360.
    const extraDegrees = Math.floor(Math.random() * 360);
    // Add several full rotations (e.g., 5 full turns) for a dramatic spin.
    const fullRotations = 360 * 5;
    const spinDegrees = fullRotations + extraDegrees;

    // Calculate the new total rotation.
    const newRotation = rotation + spinDegrees;
    setRotation(newRotation);

    // Wait 3 seconds (duration of the CSS transition) then determine the prize.
    setTimeout(() => {
      setSpinning(false);

      // Normalize the rotation within 0 to 360 degrees.
      const normalizedAngle = newRotation % 360;
      // Each sector covers 360/8 = 45 degrees.
      // Assuming a pointer at the top (0°) and sectors arranged clockwise,
      // you might adjust the index calculation depending on your design.
      const sectorIndex = Math.floor(normalizedAngle / 45);
      // Adjust index if necessary (here we reverse the order so that the top sector wins)
      const winningIndex = (8 - sectorIndex) % 8;
      setResult(prizes[winningIndex]);
    }, 4000);
  };

  return (
    <div className="wheel-container">
      <div 
        className="wheel" 
        style={{ 
          transform: `rotate(${rotation}deg)`, 
          transition: spinning ? 'transform 3s ease-out' : 'none'
        }}
      >
        {/* The wheel sectors can be drawn with CSS or as an image */}
      </div>
      <button onClick={spinWheel} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin the Wheel!'}
      </button>
      {result && <div className="result">{result}</div>}
    </div>
  );
};

export default Wheel;
