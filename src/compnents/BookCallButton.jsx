import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const SlidingColorButton = () => {
  const [isActive, setIsActive] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { x: "-100%" },
        {
          x: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            overlayRef.current.style.backgroundColor = isActive
              ? "#16a34a"
              : "#dc2626";
          },
        }
      );
    }
  }, [isActive]);

  return (
    <button
      onClick={() => setIsActive(!isActive)}
      className="relative px-6 py-3 rounded-md overflow-hidden text-white font-bold"
      style={{
        backgroundColor: isActive ? "#16a34a" : "#dc2626",
      }}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{
          backgroundColor: isActive ? "#16a34a" : "#dc2626",
          zIndex: 1,
        }}
      />
      <span className="relative z-10">
        {isActive ? "Right" : "Left"}
      </span>
    </button>
  );
};

export default SlidingColorButton;
