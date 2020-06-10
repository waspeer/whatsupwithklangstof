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
      date: Date! @dateformat(formatString: "x")
      image: ImageSharp!
      title: String!
      url: String!
    }
  `;

  createTypes(typeDefs);
};
