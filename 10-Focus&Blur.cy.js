it('Focus command',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-focus').focus()
})
it.only('Blur command',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-blur').type('About a Blur')
    cy.get('.action-blur').blur()
})