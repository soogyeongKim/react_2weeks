import { useEffect, useState } from "react";

const useDeviceOrientation = () => {
  const [state, setState] = useState({
    alpha: null,
    beta: null,
    gamma: null,
  });

  const handleOrientation = (event) => {
    setState({ alpha: event.alpha, beta: event.beta, gamma: event.gamma });
  };

  useEffect(() => {
    window.addEventListener(
      "deviceorientation",
      (e) => {
        handleOrientation(e);
      },
      true
    );

    return () =>
      window.removeEventListener("deviceorientation", (e) => {
        handleOrientation(e);
      });
  }, []);

  return state;
};

export default useDeviceOrientation;
