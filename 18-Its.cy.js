it.only('warp command',()=>{
    const x={
        name:'Mariam',
        last:'Thabet',
        isQC: true,
        iswatching: function(){
            console.log('She is watching')
        }
    }
    //cy.visit('https://example.cypress.io/commands/assertions')
    cy.visit('https://example.cypress.io/commands/actions')
    cy.wrap(x).its('last').should('eql','Thabet')
})