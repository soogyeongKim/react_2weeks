import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [coords, setCoords] = useState({});
  const [error, setError] = useState(null);

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    setCoords({
      lat: latitude,
      long: longitude,
    });
  };

  const handleError = (err) => {
    console.log(err.message);
    setError(err.message);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { coords, error };
};

export default useGeolocation;
