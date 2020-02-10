import Image, { FluidObject } from 'gatsby-image';
import React from 'react';

import { Posts_allPostsYaml_nodes_image as IImage } from '#types/__generated__/Posts';

import { TitleText, TitleWrapper, Wrapper } from './_styles';

interface Props {
  image: IImage;
  title: string;
  url: string;
}

const Post = ({ image, title, url }: Props) => {
  const imageFluid = image?.base?.childImageSharp?.fluid ?? null;

  return (
    <Wrapper className="post" gyroscope>
      <a href={url} data-testid="post-link">
        {imageFluid && <Image fluid={imageFluid as FluidObject} />}
      </a>
      <TitleWrapper>
        <TitleText data-testid="post-title">
          <span>{title}</span>
        </TitleText>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Post;
