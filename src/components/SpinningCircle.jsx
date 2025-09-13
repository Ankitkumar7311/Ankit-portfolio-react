import React, { useEffect, useState } from "react";
import circle from '../assests/Circle.JPG'

const SpinningCircle = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [direction, setDirection] = useState({ dx: 4, dy: 4 });

  useEffect(() => {
    const move = () => {
      setPosition((prev) => {
        const nextX = prev.x + direction.dx;
        const nextY = prev.y + direction.dy;

        const maxX = window.innerWidth - 50; // ball width
        const maxY = window.innerHeight - 50; // ball height

        let newDx = direction.dx;
        let newDy = direction.dy;

        // Bounce on edges
        if (nextX <= 0 || nextX >= maxX) newDx = -direction.dx;
        if (nextY <= 0 || nextY >= maxY) newDy = -direction.dy;

        setDirection({ dx: newDx, dy: newDy });

        return {
          x: Math.min(Math.max(nextX, 0), maxX),
          y: Math.min(Math.max(nextY, 0), maxY),
        };
      });
    };

    const interval = setInterval(move, 16); // ~60fps
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className="fixed w-30 h-30  rounded-full pointer-events-none"
    >
        <img className="rounded-full border-red-400" src={circle} alt="" />
    </div>
  );
};

export default  SpinningCircle ;
