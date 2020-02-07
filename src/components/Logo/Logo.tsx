import React from 'react';

import { useParallax } from '#lib/hooks';

import { LogoWrapper, TextLayer, LogoText } from './styles';

const Logo = () => {
  const FRICTION = 14;
  const parallaxElement = useParallax();

  const text = [];
  for (let i = 0; i < 3; i += 1) {
    text.push(
      <TextLayer key={i} data-depth={(i + 1) / FRICTION}>
        <LogoText>KLANGSTOF</LogoText>
      </TextLayer>,
    );
  }

  return (
    <LogoWrapper>
      <div ref={parallaxElement}>{text}</div>
    </LogoWrapper>
  );
};

export default Logo;
