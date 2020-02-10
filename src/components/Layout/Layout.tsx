import React from 'react';
import styled from 'styled-components';

import Logo from '#components/Logo';
import { useDayNight } from '#lib/hooks';
import { ThemeProvider, GlobalStyle } from '#lib/theme';

const Wrapper = styled.main`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 2rem;
`;

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  const isDay = useDayNight();
  const mode = isDay ? 'light' : 'dark';

  return (
    <ThemeProvider settings={{ mode }}>
      <GlobalStyle />
      <Logo />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  );
};

export default Layout;
