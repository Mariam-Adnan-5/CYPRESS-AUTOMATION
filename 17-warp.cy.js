it.only('warp command',()=>{
    const x={
        name:'Mariam',
        last:'Thabet',
        isQC: true,
        iswatching: function(){
            console.log('She is watching')
        }
    }
    const message ='Welcome to HAHAHAHAHA'
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.wrap(x).should('have.property','name','Mariam')
    cy.wrap(message).should('eql','Welcome to HAHAHAHAHA')
})