import { createGlobalStyle } from 'styled-components';
import styledTheme from 'styled-theming';

const backgroundColor = styledTheme('mode', {
  light: '#fff2d3',
  dark: '#559cd6',
});

export const theme = {
  colors: {
    backgroundColor,
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

interface GlobalProps {
  theme: typeof theme;
}

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

  body, html {
    background-color: ${(props: GlobalProps) => props.theme.colors.backgroundColor};
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
