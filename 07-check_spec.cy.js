it('check command',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]').check(['checkbox1'])
    cy.get('.action-checkboxes [type="checkbox"]').uncheck(['checkbox1'])


})