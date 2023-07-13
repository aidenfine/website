import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export const Bounce = ({ children, delay }) => {
  const props = useSpring({
    from: {
      transform: 'translateY(100%)',
      opacity: 0,
    },
    to: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
    config: {
      tension: 200,
      friction: 20,
    },
    delay: delay,
  });

  return <animated.div style={props}>{children}</animated.div>;
};
