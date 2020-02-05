import React from 'react';

import { Posts_allPostsYaml_nodes as IPost } from '#types/__generated__/Posts';

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  return <div>{post.title}</div>;
};

export default Post;
