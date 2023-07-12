import { RoughNotation } from 'react-rough-notation';
import { useState } from 'react';
import { PINKISHHIGHLIGHTER } from '../../colors';
import './UnderlineOnHover.css';

export const UnderlineOnHover = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <RoughNotation
      multiline={true}
      animationDelay={1700}
      padding={[0, 4]}
      iterations={1}
      animationDuration={300}
      color={PINKISHHIGHLIGHTER}
    >
      <span
        className={`underline-on-hover ${isHovered ? 'underline-on-hover--hover' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
    </RoughNotation>
  );
};
