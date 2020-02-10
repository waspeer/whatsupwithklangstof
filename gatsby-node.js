/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type PostsYaml implements Node {
      date: Date!
      image: FileYaml!
      title: String!
      url: String!
    }
  `;

  createTypes(typeDefs);
};
