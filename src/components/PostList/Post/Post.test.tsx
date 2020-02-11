/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import { cleanup, render } from '@testing-library/react';

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
const title = 'OMG BV';
const url = 'http://omgbv.com';

jest.mock('gatsby-image', () => 'test-gatsby-image');
jest.mock('react-parallax-tilt', () => 'test-react-parallax-tilt');

const Providers = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider settings={{ mode: 'light' }}>{children}</ThemeProvider>
);

describe('Post', () => {
  let container: HTMLElement;
  let queryByTestId: any;

  beforeEach(() => {
    const result = render(<Post image={imageMock} title={title} url={url} />, {
      wrapper: Providers,
    });

    container = result.container;
    queryByTestId = result.queryByTestId;
  });

  afterEach(cleanup);

  it('renders correctly', () => {
    expect(queryByTestId('post-title')).toHaveTextContent(title);
    expect(queryByTestId('post')).toHaveAttribute('data-href', url);
    expect(container.querySelector('test-gatsby-image')).toBeInTheDocument();
  });

  it('works as a link', () => {
    window.open = jest.fn();
    queryByTestId('post').click();
    expect(window.open).toHaveBeenCalled();
  });

  it('displays the title by default on small screens', () => {
    // @ts-ignore
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    expect(queryByTestId('post-title')).toBeVisible();
  });
});
