import React, { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

type RevealProps = {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
};

export const Reveal = ({ children, width }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
