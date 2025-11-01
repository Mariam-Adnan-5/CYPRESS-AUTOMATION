it.only('Aliases in cypress',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
     cy.visit('https://example.cypress.io/commands/actions')
     cy.url().as('url')
     cy.get('h1').should('be.visible')
     c.get('@url').should('contain','/commands/actions')
})