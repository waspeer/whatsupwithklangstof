/* eslint-disable spaced-comment */
/// <reference types="Cypress" />

describe('accessibility', () => {
  beforeEach(() => {
    cy.visit('/')
      .injectAxe()
      .get('main');
  });

  it('should have no detectable a11y violations on load', () => {
    cy.checkA11y();
  });
});
