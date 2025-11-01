it('Hover over command',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-form .btn.btn-primary').trigger('mouseover')
})
it.only('Hover out command',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
        cy.get('.action-form .btn.btn-primary').trigger('mouseover')
        cy.get('.action-form .btn.btn-primary').trigger('mouseout')
})