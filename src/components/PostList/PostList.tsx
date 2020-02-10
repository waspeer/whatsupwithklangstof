import React from 'react';
import styled from 'styled-components';

import { Posts_allPostsYaml_nodes as IPost } from '#types/__generated__/Posts';

import Post from './Post';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50%);
  justify-content: center;

  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;

interface Props {
  posts: IPost[];
}

const PostList = ({ posts }: Props) => {
  return (
    <Wrapper>
      {posts.map((post: IPost) => (
        <Post image={post.image} key={post.id} title={post.title} url={post.url} />
      ))}
    </Wrapper>
  );
};

export default PostList;
