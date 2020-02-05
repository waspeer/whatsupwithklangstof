module.exports = {
  client: {
    tagName: 'graphql',
    includes: ['src/**/*.tsx'],
    service: {
      name: 'gatsby',
      url: 'http://localhost:8000/___graphql',
    },
  },
};
