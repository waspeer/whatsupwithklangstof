/* eslint-disable spaced-comment */
/// <reference types="Cypress" />

describe('accessibility', () => {
  beforeEach(() => {
    cy.visit('/')
      .injectAxe()
      .waitForRouteChange();
  });

  it('should have no detectable a11y violations on load', () => {
    cy.checkA11y();
  });
});
