/* eslint-disable spaced-comment */
/// <reference types="Cypress" />

describe('reading posts', () => {
  before(() => {
    cy.visit('/').get('main');
  });

  it('displays posts on the page with image, title and working links', () => {
    // all posts have working links, images and titles
    cy.findAllByTestId('post')
      .should('have.length.gt', 0)
      .each((post) => {
        cy.wrap(post)
          .should('have.attr', 'data-href')
          .should('include', 'http')
          .then((url) => {
            cy.request(url);
          });

        cy.wrap(post[0])
          .get('.gatsby-image-wrapper')
          .should('exist');

        cy.findByTestId('post-title', { container: post }).should('exist');
      });

    // title should be visible by default on small screens
    cy.viewport('iphone-6')
      .findAllByTestId('post-title')
      .should('be.visible');
  });
});
