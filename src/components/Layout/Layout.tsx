import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';

import Logo from '#components/Logo';
import { useDayNight, BreakpointProvider } from '#lib/hooks';
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
    <HelmetProvider>
      <ThemeProvider settings={{ mode }}>
        <BreakpointProvider>
          <GlobalStyle />
          <header>
            <Logo />
          </header>
          <Wrapper>{children}</Wrapper>
        </BreakpointProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Layout;
