it.only('warp command',()=>{
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('h1').invoke('text').then(x=>{
       // expect command must inside then command
       expect(x).to.eql('Actions')
       expect(x).to.contain('Ac')
       expect(x).to.not.contain('vA')
    })
})