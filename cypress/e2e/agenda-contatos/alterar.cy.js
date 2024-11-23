/// <reference types="cypress" />

describe('Testes para editar um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve editar um contato', () => {
    cy.get('button.edit').first().click();

    cy.get('input[type="text"]').clear().type('Ronaldinho Gaúcho');

    cy.get('input[type="email"]').clear().type('rc@exemplo.com');

    cy.get('input[type="tel"]').clear().type('11 10101 1010');

    cy.get('button.alterar').first().click();

    cy.get('ul').should('contain', 'Ronaldinho Gaúcho');

    cy.screenshot('contato-editado');
  });
});
