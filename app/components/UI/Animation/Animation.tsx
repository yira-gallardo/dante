"use client";
import { motion } from "framer-motion";

interface AnimationProps {
  initial?: any;
  animate?: any;
  transition?: any;
  whileInView?: any;
  viewport?: any;
  children?: React.ReactNode;
}

export default function Animation({
  initial,
  animate,
  transition,
  whileInView,
  viewport,
  children,
}: AnimationProps) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
