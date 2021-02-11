import { useState, useEffect } from "react";

const useFavicon = (initialFaviconUrl) => {
  const [favicon, setFavicon] = useState(initialFaviconUrl);
  const updateFavicon = () => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = favicon;
    document.head.appendChild(link);
  };
  useEffect(updateFavicon, [favicon]);
  return setFavicon;
};

export default useFavicon;
