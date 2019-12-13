describe('Display list of employees', () => {
  it('when user visits the page', () => {
    cy.visit('http://localhost:3001');

    cy.get('section[name="main"]').within(() => {
      cy.get('div[role="listitem"]')
        .should('have.length', 5);
    });
  });
});
