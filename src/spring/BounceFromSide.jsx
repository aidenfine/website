import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export const BounceFromSide = ({ children, delay }) => {
  const props = useSpring({
    from: {
      transform: 'translateX(100%)',
      opacity: 0,
    },
    to: {
      transform: 'translateX(0%)',
      opacity: 1,
    },
    config: {
      tension: 200,
      friction: 12,
    },
    delay: delay,
  });

  return <animated.div style={props}>{children}</animated.div>;
};
