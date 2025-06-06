"use client";
import { motion, useInView, HTMLMotionProps } from "framer-motion";
import React, { useRef } from "react";
const PopInSection = ({
  children,
  ...props
}: { children: React.ReactNode } & HTMLMotionProps<"div">) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const rest = props;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 60, scale: 0.96 }
      }
      transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default PopInSection;
