"use client";
import {
  ReactNode,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Medimos solo el contenido real
  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setContentHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [resizePageHeight]);

  const { scrollY } = useScroll();
  const transform = useTransform(
    scrollY,
    [0, contentHeight],
    [0, -contentHeight]
  );
  const physics = {
    damping: 15,
    mass: 0.27,
    stiffness: 100,
  };
  const spring = useSpring(transform, physics);

  return (
    <>
      {/* Placeholder en el flujo normal */}
      <div style={{ height: contentHeight }} />
      {/* Contenedor animado fuera del flujo normal */}
      <motion.div
        style={{
          y: spring,
          position: "fixed",
          left: 0,
          top: 0,
          width: "100vw",
          willChange: "transform",
        }}
        className="scroll-container"
      >
        <div ref={contentRef}>{children}</div>
      </motion.div>
    </>
  );
};

export default SmoothScroll;
