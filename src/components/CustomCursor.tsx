"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isViewHovering, setIsViewHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use motion values for position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the outer ring (lerp delay)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Spring for the inner dot (fast, no delay)
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 600 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 600 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleInteractableEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='view']")) {
        setIsViewHovering(true);
      } else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      }
    };

    const handleInteractableLeave = () => {
      setIsHovering(false);
      setIsViewHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Event delegation for hover states
    document.addEventListener("mouseover", handleInteractableEnter);
    document.addEventListener("mouseout", handleInteractableLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleInteractableEnter);
      document.removeEventListener("mouseout", handleInteractableLeave);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      if (document.body) document.body.style.cursor = "auto";
    }
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-indigo-600 pointer-events-none z-[9999] mix-blend-exclusion"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center overflow-hidden"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        initial={{ width: 36, height: 36, border: "1.5px solid #4F46E5", backgroundColor: "rgba(79, 70, 229, 0)" }}
        animate={{
          width: isViewHovering ? 80 : isHovering ? 52 : 36,
          height: isViewHovering ? 80 : isHovering ? 52 : 36,
          border: isViewHovering ? "0px solid #4F46E5" : "1.5px solid #4F46E5",
          backgroundColor: isViewHovering 
            ? "rgba(79, 70, 229, 0.9)" 
            : isHovering 
            ? "rgba(79, 70, 229, 0.15)" 
            : "rgba(79, 70, 229, 0)",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.span
          className="text-white text-[10px] font-bold tracking-widest font-body"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: isViewHovering ? 1 : 0,
            scale: isViewHovering ? 1 : 0.5 
          }}
          transition={{ duration: 0.2 }}
        >
          VIEW
        </motion.span>
      </motion.div>
    </>
  );
}
