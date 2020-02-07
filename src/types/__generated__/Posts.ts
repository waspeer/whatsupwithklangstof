/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_allPostsYaml_nodes_image_base_childImageSharp_fluid {
  __typename: 'ImageSharpFluid';
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  srcWebp: string | null;
  srcSetWebp: string | null;
  sizes: string;
}

export interface Posts_allPostsYaml_nodes_image_base_childImageSharp {
  __typename: 'ImageSharp';
  fluid: Posts_allPostsYaml_nodes_image_base_childImageSharp_fluid | null;
}

export interface Posts_allPostsYaml_nodes_image_base {
  __typename: 'File';
  childImageSharp: Posts_allPostsYaml_nodes_image_base_childImageSharp | null;
}

export interface Posts_allPostsYaml_nodes_image {
  __typename: 'PostsYamlImage';
  base: Posts_allPostsYaml_nodes_image_base | null;
}

export interface Posts_allPostsYaml_nodes {
  __typename: 'PostsYaml';
  date: string | null;
  id: string;
  title: string | null;
  url: string | null;
  image: Posts_allPostsYaml_nodes_image | null;
}

export interface Posts_allPostsYaml {
  __typename: 'PostsYamlConnection';
  nodes: Posts_allPostsYaml_nodes[];
}

export interface Posts {
  allPostsYaml: Posts_allPostsYaml;
}
