/* eslint-disable spaced-comment */
/// <reference types="Cypress" />

describe('reading posts', () => {
  before(() => {
    cy.visit('/').waitForRouteChange();
  });

  it('displays posts on the page with image, title and working links', () => {
    cy.get('.post')
      .should('have.length.gt', 0)
      .each((post) => {
        cy.findByTestId('post-link', { container: post })
          .should('exist')
          .should('have.attr', 'href')
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
