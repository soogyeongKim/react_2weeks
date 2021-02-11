import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const updateDisplay = (event) => {
    setMouse({
      x: event.pageX,
      y: event.pageY,
    });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateDisplay, false);

    return () => {
      window.removeEventListener("mousemove", updateDisplay);
    };
  });

  return mouse;
};

export default useMousePosition;
