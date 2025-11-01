it('Go command',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('#type').click()
    cy.go('back')
    cy.go('forward')
})