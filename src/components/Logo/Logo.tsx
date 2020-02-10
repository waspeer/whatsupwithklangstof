import React from 'react';

import { useParallax } from '#lib/hooks';

import { LogoWrapper, TextLayer, LogoText } from './styles';

const FRICTION = 14;

const Logo = () => {
  const parallaxElement = useParallax<HTMLDivElement>();

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
