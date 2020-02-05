import { graphql } from 'gatsby';
import React from 'react';

import Layout from '#components/Layout';
import SEO from '#components/Seo';
import PostList from '#components/PostList';
import { Posts as IData } from '#types/__generated__/Posts';

interface Props {
  data: IData;
}

const IndexPage = ({ data }: Props) => {
  const {
    allPostsYaml: { nodes: posts },
  } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <PostList posts={posts} />
    </Layout>
  );
};

export const query = graphql`
  query Posts {
    allPostsYaml {
      nodes {
        id
        date
        image
        title
        url
      }
    }
  }
`;

export default IndexPage;
