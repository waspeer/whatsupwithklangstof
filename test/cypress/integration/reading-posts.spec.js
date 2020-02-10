/* eslint-disable spaced-comment */
/// <reference types="Cypress" />

describe('reading posts', () => {
  before(() => {
    cy.visit('/').waitForRouteChange();
  });

  it('displays posts on the page', () => {
    cy.queryAllByTestId('post').should('have.length.gt', 0);
  });

  it('all posts contain working links', () => {
    cy.queryAllByTestId('post').each((post) => {
      cy.findByTestId('post-link', { container: post })
        .should('exist')
        .should('have.attr', 'href')
        .then((url) => {
          cy.request(url);
        });
    });
  });

  it('all posts contain an image', () => {
    cy.queryAllByTestId('post').each((post) => {
      cy.wrap(post[0].querySelector('.gatsby-image-wrapper')).should('exist');
    });
  });

  it('all posts contain a title', () => {
    cy.queryAllByTestId('post').each((post) => {
      cy.findByTestId('post-title', { container: post }).should('exist');
    });
  });
});
