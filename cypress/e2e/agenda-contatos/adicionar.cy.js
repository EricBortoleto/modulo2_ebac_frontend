/// <reference types="cypress" />

describe('Testes para adicionar um contato', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[type="text"]').type('Cristiano Ronaldo');
    cy.get('input[type="email"]').type('cr@exemplo.com');
    cy.get('input[type="tel"]').type('11 77777 7777');
    cy.get('button.adicionar').first().click();
    cy.get('ul').should('contain', 'Cristiano Ronaldo');
    cy.screenshot('contato-adicionado');
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[type="text"]').type('Lionel Messi');
    cy.get('input[type="email"]').type('messi@exemplo.com');
    cy.get('input[type="tel"]').type('11 77777 7777');
    cy.get('button.adicionar').first().click();
    cy.get('ul').should('contain', 'Lionel Messi');
    cy.screenshot('contato-adicionado');
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[type="text"]').type('Neymar jr');
    cy.get('input[type="email"]').type('meninoney@exemplo.com');
    cy.get('input[type="tel"]').type('11 77777 7777');
    cy.get('button.adicionar').first().click();
    cy.get('ul').should('contain', 'Neymar jr');
    cy.screenshot('contato-adicionado');
  });
});
