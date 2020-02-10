/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { createGlobalStyle, ThemeProvider as StyledThemeProvider } from 'styled-components';

interface ThemeSettings {
  mode: 'light' | 'dark';
}

export const theme = {
  colors: {
    backgroundColor: ({ mode }: ThemeSettings) => (mode === 'light' ? '#fff2d3' : '#559cd6'),
    primary: '#ff88d9',
    secondary: '#00feff',
    neutral: '#ffe000',
  },
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

  body, html {
    background-color: ${(props: any) => props.theme.colors.backgroundColor};
    font-family: "Source Sans Pro", sans-serif;
  }

  body {
    overflow-x: hidden;
  }

  h1,
  h2,
  h3 {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

interface ThemeProviderProps {
  settings: ThemeSettings;
  children: React.ReactNode;
}

export const ThemeProvider = ({ settings, children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={settings}>
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </StyledThemeProvider>
);
