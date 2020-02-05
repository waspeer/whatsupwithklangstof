import React from 'react';
import Image, { FluidObject } from 'gatsby-image';

import { Posts_allPostsYaml_nodes as IPost } from '#types/__generated__/Posts';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const imageFluid = post.image?.base?.childImageSharp?.fluid;

  const image = imageFluid ? <Image fluid={imageFluid as FluidObject} /> : <h1>No image!</h1>;

  return <div>{image}</div>;
};

export default Post;
