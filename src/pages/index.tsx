import { graphql } from 'gatsby';
import React from 'react';

import Layout from '#components/Layout';
import SEO from '#components/Seo';
import { Posts as IData } from '#types/__generated__/Posts';

interface Props {
  data: IData;
}

const IndexPage = ({ data }: Props) => {
  const {
    allPostsYaml: { nodes: posts },
  } = data;

  console.log(posts);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </Layout>
  );
};

export const query = graphql`
  query Posts {
    allPostsYaml {
      nodes {
        id
        title
        image
        date
      }
    }
  }
`;

export default IndexPage;
