import React from 'react';

import { Posts_allPostsYaml_nodes as IPost } from '#types/__generated__/Posts';

import Post from './Post';

interface Props {
  posts: IPost[];
}

const PostList = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostList;
