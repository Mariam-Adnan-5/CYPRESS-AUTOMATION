it('warp command',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('#email1').invoke('text').should('eql','')

})
it.only('warp command',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.form-control').then((text) =>{
        cy.log(text)
    })

})