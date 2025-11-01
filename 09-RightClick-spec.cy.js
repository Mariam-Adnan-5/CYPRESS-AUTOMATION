it('Rightclick command',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.rightclick-action-div').rightclick()
})