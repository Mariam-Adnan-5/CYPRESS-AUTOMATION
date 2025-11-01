it('Get cookie ',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.getCookie('level').should('have.property','value','all level ') 
})

it('Set cookie',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    //cy.setCookie('name','value')
    cy.setCookie('level','all level')
    cy.setCookie('couser','cupress')
})
it.only('Get all cookie',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    //cy.setCookie('name','value')
    cy.getCookies().should('have.length',0)
    
})