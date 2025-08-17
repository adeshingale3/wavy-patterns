import React from "react";
import { motion } from "framer-motion";

const ReactCard = () => {
  return (
    <motion.div
      className="relative"
      animate={{ rotateY: 360 }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <div className="relative w-24 h-32 rounded-2xl backdrop-blur-md bg-cyan-900/50 border border-cyan-400/60 shadow-2xl transform -translate-x-4 -translate-y-2 z-10">
        {/* Card border glow */}
        <div className="absolute inset-0 rounded-2xl border border-cyan-400/90 shadow-[0_0_25px_rgba(34,211,238,0.4)]"></div>

        {/* Card content */}
        <div className="relative h-full flex items-center justify-center">
            <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 841.9 595.3"
      width="200"
      height="200"
      fill="none"
      className="svg"
    >
      {/* Base React logo (3 ellipses) with softer glow */}
      <g
        stroke="cyan"
        strokeWidth="20"
        opacity="0.5"
        filter="url(#glowSoft)"
      >
        <ellipse cx="420.9" cy="296.5" rx="300" ry="120" />
        <ellipse
          cx="420.9"
          cy="296.5"
          rx="300"
          ry="120"
          transform="rotate(60 420.9 296.5)"
        />
        <ellipse
          cx="420.9"
          cy="296.5"
          rx="300"
          ry="120"
          transform="rotate(120 420.9 296.5)"
        />
      </g>

      {/* Glowing moving circle (kept strong) */}
      <motion.circle
        r="14"
        fill="cyan"
        filter="url(#circleGlow)"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <animateMotion
          dur="5s"
          repeatCount="indefinite"
          rotate="auto"
          path="M 120,296.5 A 300,120 0 1,1 721,296.5 A 300,120 0 1,1 120,296.5 Z"
        />
      </motion.circle>

      {/* Glow filters */}
      <defs>
        {/* Softer glow for ellipses */}
        <filter id="glowSoft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0  0
                    0 0 0 0  1
                    0 0 0 0  1
                    0 0 0 0.7  0"
            result="glowColor"
          />
          <feMerge>
            <feMergeNode in="glowColor" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Strong glow for circle */}
        <filter id="circleGlow" x="-50%" y="-50%" width="300%" height="300%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0  0
                    0 0 0 0  1
                    0 0 0 0  1
                    0 0 0 1  0"
            result="glowColor"
          />
          <feMerge>
            <feMergeNode in="glowColor" />
            <feMergeNode in="glowColor" />
            <feMergeNode in="glowColor" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent rounded-full blur-4xl scale-200"></div>
    </motion.div>
  );
};

export default ReactCard;
