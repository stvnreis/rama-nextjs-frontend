import React, { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

type RevealProps = {
  children: JSX.Element;
  width?: 'fit-content' | '100%';
  transformOrigin?: string;
};

export const Reveal = ({
  children,
  width,
  transformOrigin = 'auto',
}: RevealProps) => {
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
        transition={{ duration: 0.35, delay: 0.2 }}
        style={{ transformOrigin }}
      >
        {children}
      </motion.div>
    </div>
  );
};
