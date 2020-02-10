module.exports = {
  globals: { __PATH_PREFIX__: `` },
  moduleNameMapper: {
    '^#components/(.*)$': '<rootDir>/src/components/$1',
    '^#lib/(.*)$': '<rootDir>/src/lib/$1',
  },
  setupFiles: [`<rootDir>/test/jest/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/test/jest/setup.js`],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  testRegex: '(/test/jest/|/src/).*\\.(test|spec)\\.(ts|tsx|js|jsx)$',
  transform: {
    '^.+\\.[jt]sx?$': '<rootDir>/test/jest/jest-preprocess.js',
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
};
