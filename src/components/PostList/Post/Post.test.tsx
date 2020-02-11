/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React from 'react';
import { cleanup, render, BoundFunction, GetByBoundAttribute } from '@testing-library/react';

import { imageMock, Providers } from '#lib/test';

import Post from './Post';

const title = 'OMG BV';
const url = 'http://omgbv.com';

jest.mock('gatsby-image', () => 'test-gatsby-image');
jest.mock('react-parallax-tilt', () => 'test-react-parallax-tilt');

describe('Post', () => {
  let container: HTMLElement;
  let getByTestId: BoundFunction<GetByBoundAttribute>;

  beforeEach(() => {
    const result = render(<Post image={imageMock} title={title} url={url} />, {
      wrapper: Providers,
    });

    container = result.container;
    getByTestId = result.getByTestId;
  });

  afterEach(cleanup);

  it('renders correctly', () => {
    expect(getByTestId('post-title')).toHaveTextContent(title);
    expect(getByTestId('post')).toHaveAttribute('data-href', url);
    expect(container.querySelector('test-gatsby-image')).toBeInTheDocument();
  });

  it('works as a link', () => {
    window.open = jest.fn();
    getByTestId('post').click();
    expect(window.open).toHaveBeenCalled();
  });

  it('displays the title by default on small screens', () => {
    // @ts-ignore
    window.innerWidth = 500;
    window.dispatchEvent(new Event('resize'));

    expect(getByTestId('post-title')).toBeVisible();
  });
});
