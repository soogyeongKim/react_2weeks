import { useState } from "react";

const useLocalStorage = (name, initialValue) => {
  const [currentLS, setCurrentLS] = useState(() => {
    const item = localStorage.getItem(name);
    return item ? item : initialValue;
  });

  const setLS = (value) => {
    localStorage.setItem(name, value);
    setCurrentLS(value);
  };

  return [currentLS, setLS];
};

export default useLocalStorage;
