it('dblclick command',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-div').dblclick()
})