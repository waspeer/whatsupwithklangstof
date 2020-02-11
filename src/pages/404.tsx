import React from 'react';
import styled from 'styled-components';

import Layout from '#components/Layout';
import SEO from '#components/Seo';

const Title = styled.h1`
  text-align: center;
`;

const Paragraph = styled.p`
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not found" />
    <Title>Not Found</Title>
    <Paragraph>You just hit a route that doesn&#39;t exist... the sadness.</Paragraph>
  </Layout>
);

export default NotFoundPage;
