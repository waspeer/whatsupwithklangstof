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
    allPostsYaml(sort: { fields: date, order: DESC }) {
      nodes {
        date
        id
        title
        url
        image {
          base {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
