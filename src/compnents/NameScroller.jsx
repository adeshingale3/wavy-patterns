import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const NameScroller = () => {
  const rowRefs = useRef([]);
  const numberOfRows = 6; // You can adjust this number

  useEffect(() => {
    rowRefs.current.forEach((row, index) => {
      if (!row) return;

      const totalWidth = row.scrollWidth / 2;
      const isEvenRow = index % 2 === 0;
      
      // Alternate speeds: even rows are faster, odd rows are slower
      const baseDuration = 12;
      const duration = isEvenRow ? baseDuration : baseDuration * 1.8;

      // All rows move to the left (right to left)
      gsap.fromTo(row,
        { x: 0 },
        {
          x: -totalWidth,
          duration: duration,
          ease: "linear",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const num = parseFloat(x);
              return `${((num % -totalWidth) - totalWidth) % -totalWidth}px`;
            },
          },
        }
      );
    });
  }, []);

  const textSet = Array.from({ length: 8 }).map((_, idx) => (
    <h1 key={idx} className="text-black text-shadow-sm text-shadow-white text-8xl md:text-9xl font-bold mx-6 md:mx-8 whitespace-nowrap">
      WAVY JS
    </h1>
  ));

  const rows = Array.from({ length: numberOfRows }).map((_, rowIndex) => (
    <div
      key={rowIndex}
      ref={(el) => (rowRefs.current[rowIndex] = el)}
      className="flex whitespace-nowrap"
      style={{ willChange: "transform" }}
    >
      {textSet}
      {textSet} {/* Duplicate for seamless loop */}
    </div>
  ));

  return (
    <div className="relative z-[-999] w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden flex flex-col justify-center gap-6 md:gap-10">
      {rows}
    </div>
  );
};

export default NameScroller;
