module.exports = {
  client: {
    tagName: 'graphql',
    includes: ['src/**/*.tsx', 'src/lib/fragments.ts'],
    service: {
      name: 'gatsby',
      url: 'http://localhost:8000/___graphql',
    },
  },
};
