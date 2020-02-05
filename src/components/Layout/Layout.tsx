import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledTheme from 'styled-theming';

import Logo from '#components/Logo';
import { useDayNight } from '#lib/hooks';

const backgroundColor = styledTheme('mode', {
  light: '#fff2d3',
  dark: '#559cd6',
});

const theme = {
  backgroundColor,
  primary: '#ff88d9',
  secondary: '#00feff',
  neutral: '#ffe000',
};

interface GlobalProps {
  theme: typeof theme;
}

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

  body, html {
    background-color: ${({ theme }: GlobalProps) => theme.backgroundColor};
    font-family: "Source Sans Pro", sans-serif;
  }

  h1,
  h2,
  h3 {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

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
