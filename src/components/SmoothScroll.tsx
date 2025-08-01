"use client";
import {
  ReactNode,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Utility to detect mobile devices
const isMobile = () => {
  if (typeof window === "undefined") return false;
  return (
    window.innerWidth <= 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  );
};

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Detect mobile device on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobileDevice(isMobile());
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  // Different physics for mobile vs desktop
  const physics = isMobileDevice
    ? {
        damping: 8, // Reduced damping for faster response
        mass: 0.15, // Reduced mass for quicker movement
        stiffness: 150, // Increased stiffness for snappier feel
      }
    : {
        damping: 15,
        mass: 0.27,
        stiffness: 100,
      };

  const spring = useSpring(transform, physics);

  // If mobile device, render without smooth scroll
  if (isMobileDevice) {
    return <div ref={contentRef}>{children}</div>;
  }

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
