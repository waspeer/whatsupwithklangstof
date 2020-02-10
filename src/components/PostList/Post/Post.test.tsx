import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider } from '#lib/theme';
import { Posts_allPostsYaml_nodes_image as IImage } from '#types/__generated__/Posts';

import Post from './Post';

const imageMock: IImage = {
  __typename: 'FileYaml',
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

jest.mock('gatsby-image', () => 'test-gatsby-image');
jest.mock('react-parallax-tilt', () => 'test-react-parallax-tilt');

const Providers = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider settings={{ mode: 'light' }}>{children}</ThemeProvider>
);

describe('Post', () => {
  it('renders correctly', () => {
    const title = 'OMG BV';
    const url = 'http://omgbv.com';

    const { container, queryByTestId } = render(
      <Post image={imageMock} title={title} url={url} />,
      { wrapper: Providers },
    );

    expect(queryByTestId('post-title')).toHaveTextContent(title);
    expect(queryByTestId('post-link')).toHaveAttribute('href', url);
    expect(container.querySelector('test-gatsby-image')).toBeInTheDocument();
  });

  it.todo('displays the title by default on small screens');
});
