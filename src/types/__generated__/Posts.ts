/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_allPostsYaml_nodes {
  __typename: "PostsYaml";
  id: string;
  date: string | null;
  image: string | null;
  title: string | null;
  url: string | null;
}

export interface Posts_allPostsYaml {
  __typename: "PostsYamlConnection";
  nodes: Posts_allPostsYaml_nodes[];
}

export interface Posts {
  allPostsYaml: Posts_allPostsYaml;
}
