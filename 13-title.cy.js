it('get URL',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    //should command have access to yelied(url) in console
    cy.url().should('contain','/commands/actions')

    // use title commmand to get website title
    cy.title().should('eql','Cypress.io: Kitchen Sink')
})