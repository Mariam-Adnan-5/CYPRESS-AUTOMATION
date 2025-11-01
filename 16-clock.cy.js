it.only('clock command',()=>{
    let now=new Date('2027 11 01')
    cy.clock(now)
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
})