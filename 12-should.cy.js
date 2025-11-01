it('should be vivible command',() => {
   // cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-checkboxes [type="checkbox"]').check(['checkbox1']).should('be.visible')

})
it('should have text command',() => {
   // cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('h1').should('have.text','Actions')
})

it('should contains text command',() => {
   // cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('h1').should('contain','Act')
})

it('should have class command',() => {
   cy.visit('https://example.cypress.io/commands/assertions')
   // cy.visit('https://example.cypress.io/commands/actions')
    cy.get('tr').eq(3).find('td').eq(1).should('have.class','success')
})
it('should have css command',() => {
   //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-focus').focus().should('have.css',
        'border',
        '5px solid rgb(255, 165, 0)'
    )
})
it.only('should have attribute command',() => {
   //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-blur').should('have.attr','type','text')
})