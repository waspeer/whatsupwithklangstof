import React from 'react';

import { Posts_allPostsYaml_nodes_image as IImage } from '#types/__generated__/Posts';

import { BreakpointContext } from './hooks';
import { ThemeProvider } from './theme';

export const imageMock: IImage = {
  __typename: 'ImageSharp',
  base: {
    __typename: 'File',
    childImageSharp: {
      __typename: 'ImageSharp',
      fluid: {
        __typename: 'ImageSharpFluid',
        base64: 'base64',
        aspectRatio: 1,
        src: 'src',
        srcSet: 'srcSet',
        srcWebp: 'srcWebp',
        srcSetWebp: 'srcSetWebp',
        sizes: 'sizes',
      },
    },
  },
};

interface ProvidersProps {
  breakpoint?: string;
  children?: React.ReactNode;
  mode?: 'light' | 'dark';
}

export const Providers = ({ breakpoint = 'sm', children, mode = 'light' }: ProvidersProps) => (
  <ThemeProvider settings={{ mode }}>
    <BreakpointContext.Provider value={breakpoint}>{children}</BreakpointContext.Provider>
  </ThemeProvider>
);
