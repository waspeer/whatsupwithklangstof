import classnames from 'classnames';
import Image, { FluidObject } from 'gatsby-image';
import React from 'react';

import { Posts_allPostsYaml_nodes as IPost } from '#types/__generated__/Posts';

import { TitleText, TitleWrapper, Wrapper } from './_styles';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const imageFluid = post.image?.base?.childImageSharp?.fluid;
  const wrapperClasses = classnames({ 'no-image': !post.image });

  const PossibleLink = ({ children }: { children: JSX.Element | (JSX.Element | null)[] | null }) =>
    post.url ? (
      <a href={post.url} data-testid="post-link">
        {children}
      </a>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper className={wrapperClasses} data-testid="post">
      <PossibleLink>
        {post.image && <Image fluid={imageFluid as FluidObject} />}
        {post.title !== null ? (
          <TitleWrapper>
            <TitleText data-testid="post-title">
              <span>{post.title}</span>
            </TitleText>
          </TitleWrapper>
        ) : null}
      </PossibleLink>
    </Wrapper>
  );
};

export default Post;
