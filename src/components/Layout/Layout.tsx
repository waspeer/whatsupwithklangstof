import React from 'react';
import { ThemeProvider } from 'styled-components';

import Logo from '#components/Logo';
import { useDayNight } from '#lib/hooks';

import { theme, GlobalStyle } from './_styles';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Layout = ({ children }: Props) => {
  const isDay = useDayNight();
  const mode = isDay ? 'light' : 'dark';

  return (
    <ThemeProvider theme={{ ...theme, mode }}>
      <GlobalStyle />
      <Logo />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
