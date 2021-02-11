import { useState } from "react";

const useLockScroll = (onChange) => {
  const [isLocked, setIsLocked] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = "hidden";
    const originalStyle =
      window.getComputedStyle(document.body).overflow === "hidden"
        ? true
        : false;
    setIsLocked(originalStyle);
  };

  const unLockScroll = () => {
    document.body.style.overflow = "visible";
    const originalStyle =
      window.getComputedStyle(document.body).overflow === "hidden"
        ? true
        : false;
    setIsLocked(originalStyle);
  };

  return [isLocked, { lockScroll, unLockScroll }];
};

export default useLockScroll;
