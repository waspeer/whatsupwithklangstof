import Image, { FluidObject } from 'gatsby-image';
import React from 'react';

import { Posts_allPostsYaml_nodes_image as IImage } from '#types/__generated__/Posts';

import { Tilt, TitleText, TitleWrapper, Wrapper } from './_styles';

interface Props {
  image: IImage;
  title: string;
  url: string;
}

const Post = ({ image, title, url }: Props) => {
  const imageFluid = image?.base?.childImageSharp?.fluid ?? null;

  const handleClick = () => {
    if (window) window.open(url, '_self');
  };

  return (
    <Wrapper data-testid="post" data-href={url} onClick={handleClick} tabIndex={0} role="link">
      <Tilt gyroscope>
        {imageFluid && <Image fluid={imageFluid as FluidObject} />}
        <TitleWrapper>
          <TitleText data-testid="post-title">
            <span>{title}</span>
          </TitleText>
        </TitleWrapper>
      </Tilt>
    </Wrapper>
  );
};

export default Post;
