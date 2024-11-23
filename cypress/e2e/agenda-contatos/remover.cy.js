/// <reference types="cypress" />

describe('Testes para excluir um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve excluir o primeiro contato', () => {
    cy.intercept('DELETE', '**/api/contatos*').as('deleteContato');

    cy.get('div.sc-beqWaB.eQdhbg.contato').should('have.length', 3);

    cy.get('div.sc-beqWaB.eQdhbg.contato')
      .first()
      .find('button.delete')
      .click();

    cy.wait('@deleteContato');

    cy.get('div.sc-beqWaB.eQdhbg.contato').should('have.length', 2);

    cy.screenshot('contato-excluido');
  });
});
