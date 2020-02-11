/* eslint-disable spaced-comment */
/// <reference types="Cypress" />

describe('reading posts', () => {
  before(() => {
    cy.visit('/').waitForRouteChange();
  });

  it('displays posts on the page with image, title and working links', () => {
    cy.findAllByTestId('post')
      .should('have.length.gt', 0)
      .each((post) => {
        cy.wrap(post)
          .should('have.attr', 'data-href')
          .then((url) => {
            cy.request(url);
          });

        cy.wrap(post[0])
          .get('.gatsby-image-wrapper')
          .should('exist');

        cy.findByTestId('post-title', { container: post }).should('exist');
      });
  });
});
