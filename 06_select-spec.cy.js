it('select command',()=>{
    cy.visit('https://example.cypress.io/commands/actions')
    // Find element by class name
    //select command by value,text,index
    //cy.get('.action-select').select('bananas')//passed on text
    //cy.get('.action-select').select('fr-bananas')//passed on value
    cy.get('.action-select').select(1)//passed on index(index 1 => first option)
})
